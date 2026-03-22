#!/usr/bin/env node
/**
 * Загружает статьи канала Дзена через внутренний export API и сохраняет
 * отфильтрованный список «лучших» в JSON (для ручного импорта в блог).
 *
 * Важно: это неофициальный endpoint; соблюдайте правила Дзена и авторские права
 * при копировании полных текстов на свой сайт.
 *
 * Запуск:
 *   node scripts/dzen-best-articles.mjs
 *   node scripts/dzen-best-articles.mjs --top 12 --min-views 2000 --by-score
 *   node scripts/dzen-best-articles.mjs --sort regular --pages 3 --top 15
 *   node scripts/dzen-best-articles.mjs --max-age-days 365 --top 0   # все статьи младше года
 *
 * Полный текст + картинки (Playwright; нужен: npx playwright install chromium):
 *   node scripts/dzen-best-articles.mjs --scrape-full
 *   node scripts/dzen-best-articles.mjs --scrape-full --scrape-limit 3
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyBlogMeta } from './lib/dzen-classify.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEFAULT_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

function buildExportUrl(channel, sortType) {
  const params = new URLSearchParams({
    country_code: 'ru',
    clid: '1400',
    lang: 'ru',
    referrer_place: 'layout',
    channel_name: channel,
    content_type: 'article',
    channel_version: 'welcome_infinity',
    sort_type: sortType,
  });
  return `https://dzen.ru/api/web/v1/export?${params}`;
}

function getItems(payload) {
  if (!payload || typeof payload !== 'object') return [];
  return payload.feedData?.items ?? payload.items ?? [];
}

function getMoreLink(payload) {
  if (!payload || typeof payload !== 'object') return null;
  return payload.feedData?.more?.link ?? payload.more?.link ?? null;
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': process.env.DZEN_UA || DEFAULT_UA,
      Accept: 'application/json',
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} для ${url}\n${text.slice(0, 400)}`);
  }
  return res.json();
}

async function fetchAllArticleItems(channel, sortType, maxPages) {
  const out = [];
  const first = await fetchJson(buildExportUrl(channel, sortType));
  out.push(...getItems(first));
  let more = getMoreLink(first);
  let page = 1;

  while (more && page < maxPages) {
    const next = await fetchJson(more);
    out.push(...getItems(next));
    more = getMoreLink(next);
    page += 1;
  }

  return out;
}

function cleanShareUrl(url) {
  if (!url || typeof url !== 'string') return '';
  try {
    const u = new URL(url);
    return `${u.origin}${u.pathname}`;
  } catch {
    return url.split('?')[0] ?? url;
  }
}

function coverFromImage(image) {
  if (!image?.urlTemplate || !image.namespace) return null;
  const size = image.sizeName || 'scale_1200';
  return image.urlTemplate
    .replace('{namespace}', image.namespace)
    .replace('{size}', size);
}

function mapArticle(raw) {
  const social = raw.socialInfo ?? {};
  const pubSec = raw.publicationDate != null ? Number(raw.publicationDate) : null;
  const views = Number(raw.views ?? raw.viewsTillEnd ?? 0) || 0;
  const likes = Number(social.likesCount ?? 0) || 0;
  const comments = Number(social.commentCount ?? 0) || 0;

  const publishedAt =
    pubSec && !Number.isNaN(pubSec)
      ? new Date(pubSec * 1000).toISOString().slice(0, 10)
      : null;

  const snippet = String(raw.text ?? '').replace(/\s+/g, ' ').trim().slice(0, 600);
  const { category, tags, contentType, classifyNote } = classifyBlogMeta(
    raw.title ?? '',
    snippet,
  );

  return {
    id: raw.id,
    title: raw.title ?? '',
    url: cleanShareUrl(raw.shareLink),
    views,
    likes,
    comments,
    /** эвристика «качества» для локального отбора */
    score: views + likes * 12 + comments * 20,
    publishedAt,
    publishedAtIso:
      pubSec && !Number.isNaN(pubSec) ? new Date(pubSec * 1000).toISOString() : null,
    readingTimeMinutes:
      raw.timeToReadSeconds != null
        ? Math.max(1, Math.round(Number(raw.timeToReadSeconds) / 60))
        : null,
    snippet,
    coverUrl: coverFromImage(raw.image),
    /** под фильтры /ru/blog/ (категория, теги, тип) */
    category,
    tags,
    contentType,
    ...(classifyNote ? { classifyNote } : {}),
  };
}

function parseArgs(argv) {
  const opts = {
    channel: process.env.DZEN_CHANNEL || 'kamallaya',
    /** top — как на Дзене («по популярности»), regular — хронология */
    sort: 'regular',
    maxPages: 20,
    /** 0 = без лимита (все, прошедшие фильтры) */
    top: 0,
    minViews: 0,
    /** не брать статьи старше N дней (по умолчанию год) */
    maxAgeDays: 365,
    /** api-order — доверяем порядку ответа API; score — пересортировка по score */
    strategy: 'api-order',
    out: resolve(__dirname, 'output/dzen-best-articles.json'),
    help: false,
    /** Playwright: открыть страницы статей, полный markdown + картинки */
    scrapeFull: false,
    scrapeDelayMs: 600,
    /** 0 = все выбранные статьи */
    scrapeLimit: 0,
    writeMdFiles: true,
    mdOutDir: resolve(__dirname, 'output/dzen-full-md'),
    publicImagesBlog: resolve(__dirname, '../public/images/blog'),
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') opts.help = true;
    else if (a === '--channel') opts.channel = argv[++i];
    else if (a === '--sort') opts.sort = argv[++i];
    else if (a === '--pages') opts.maxPages = Math.max(1, Number(argv[++i]) || 1);
    else if (a === '--top') opts.top = Math.max(0, Number(argv[++i]) || 0);
    else if (a === '--min-views') opts.minViews = Math.max(0, Number(argv[++i]) || 0);
    else if (a === '--max-age-days') opts.maxAgeDays = Math.max(1, Number(argv[++i]) || 365);
    else if (a === '--no-max-age') opts.maxAgeDays = 0;
    else if (a === '--by-score') opts.strategy = 'score';
    else if (a === '--by-api-order') opts.strategy = 'api-order';
    else if (a === '--out') opts.out = resolve(process.cwd(), argv[++i]);
    else if (a === '--scrape-full') opts.scrapeFull = true;
    else if (a === '--scrape-delay-ms') opts.scrapeDelayMs = Math.max(0, Number(argv[++i]) || 0);
    else if (a === '--scrape-limit') opts.scrapeLimit = Math.max(0, Number(argv[++i]) || 0);
    else if (a === '--no-write-md') opts.writeMdFiles = false;
    else if (a === '--md-out') opts.mdOutDir = resolve(process.cwd(), argv[++i]);
    else if (a.startsWith('-')) console.warn(`Неизвестный флаг: ${a}`);
  }

  return opts;
}

function printHelp() {
  console.log(`
dzen-best-articles.mjs — выгрузка «лучших» статей канала Дзена

Использование:
  node scripts/dzen-best-articles.mjs [опции]

Опции:
  --channel <имя>     логин канала (по умолчанию kamallaya или DZEN_CHANNEL)
  --sort top|regular  сортировка на стороне API (regular — хронология, удобно для «все свежие»)
  --pages <n>         максимум страниц пагинации (по ~20–21 статья)
  --top <n>           лимит статей в JSON; 0 = все прошедшие фильтры (по умолчанию 0)
  --max-age-days <n>  не старше N дней (по умолчанию 365; статьи старше отбрасываются)
  --no-max-age        без отсечения по дате
  --min-views <n>     отсечь статьи с просмотрами ниже n
  --by-score          пересортировать по формуле views + likes*12 + comments*20
  --by-api-order      оставить порядок как в ответе API (по умолчанию)
  --out <путь>        файл результата

  --scrape-full       после списка открыть каждую статью в Chromium (Playwright),
                      вытащить полный текст в Markdown, скачать картинки в
                      public/images/blog/<slug>/
  --scrape-delay-ms   пауза между статьями (мс), по умолчанию 600
  --scrape-limit <n>  обработать только первые n (для теста)
  --no-write-md       не писать отдельные .md в scripts/output/dzen-full-md/
  --md-out <папка>    каталог для отдельных .md (по умолчанию scripts/output/dzen-full-md)

В каждой записи: category, tags, contentType — значения с сайта DOM для фильтров блога.
С --scrape-full добавляются: fullMarkdown, scrapeOk, scrapeError?, scrapeSourceUrl.

Переменные окружения:
  DZEN_CHANNEL   канал по умолчанию
  DZEN_UA        свой User-Agent при блокировках

Результат: JSON со списком полей для импорта (title, url, views, дата, snippet…).

Перед --scrape-full: npx playwright install chromium
`);
}

function filterByMaxAge(articles, maxAgeDays) {
  if (!maxAgeDays || maxAgeDays <= 0) {
    return { list: articles, droppedNoDate: 0, droppedTooOld: 0 };
  }
  const cutoff = Date.now() - maxAgeDays * 24 * 60 * 60 * 1000;
  let droppedNoDate = 0;
  let droppedTooOld = 0;
  const list = articles.filter((a) => {
    if (!a.publishedAtIso) {
      droppedNoDate += 1;
      return false;
    }
    const t = new Date(a.publishedAtIso).getTime();
    if (Number.isNaN(t)) {
      droppedNoDate += 1;
      return false;
    }
    if (t < cutoff) {
      droppedTooOld += 1;
      return false;
    }
    return true;
  });
  return { list, droppedNoDate, droppedTooOld };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  console.error(
    `Канал: ${opts.channel}, sort=${opts.sort}, до ${opts.maxPages} стр., top=${opts.top || 'все'}, maxAge=${opts.maxAgeDays || 'нет'} дн., strategy=${opts.strategy}, scrapeFull=${opts.scrapeFull}`,
  );

  const rawItems = await fetchAllArticleItems(opts.channel, opts.sort, opts.maxPages);
  const articles = rawItems
    .filter((item) => item && item.type === 'article' && !item.isPromoPublication)
    .map(mapArticle)
    .filter((a) => a.title && a.url);

  const seen = new Set();
  const unique = articles.filter((a) => {
    if (seen.has(a.url)) return false;
    seen.add(a.url);
    return true;
  });

  let list = unique.filter((a) => a.views >= opts.minViews);

  const age = filterByMaxAge(list, opts.maxAgeDays);
  list = age.list;
  if (opts.maxAgeDays > 0) {
    console.error(
      `Фильтр даты: −${age.droppedTooOld} старше ${opts.maxAgeDays} дн., −${age.droppedNoDate} без даты`,
    );
  }

  if (opts.strategy === 'score') {
    list = [...list].sort((a, b) => b.score - a.score);
  }

  let selected = opts.top > 0 ? list.slice(0, opts.top) : list;

  if (opts.scrapeFull) {
    const { scrapeArticlesFull } = await import('./lib/dzen-scrape-full.mjs');
    console.error('Запуск Playwright (полный текст и картинки)…');
    selected = await scrapeArticlesFull(selected, {
      publicImagesRoot: opts.publicImagesBlog,
      delayMs: opts.scrapeDelayMs,
      limit: opts.scrapeLimit,
      mdOutDir: opts.writeMdFiles ? opts.mdOutDir : null,
    });
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    channel: opts.channel,
    sort: opts.sort,
    strategy: opts.strategy,
    maxAgeDays: opts.maxAgeDays || null,
    scrapeFull: opts.scrapeFull,
    totalFetched: unique.length,
    afterAgeFilter: list.length,
    selectedCount: selected.length,
    articles: selected.map(({ publishedAtIso, ...rest }) => rest),
  };

  await mkdir(dirname(opts.out), { recursive: true });
  await writeFile(opts.out, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

  console.error(`Готово: ${selected.length} статей → ${opts.out}`);
  selected.forEach((a, i) => {
    console.error(
      `  ${i + 1}. [${a.category}] ${a.publishedAt} · ${a.views} просм. — ${a.title}`,
    );
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
