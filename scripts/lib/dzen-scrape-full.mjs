/**
 * Полная статья с Дзена: Playwright + Turndown, картинки в public/images/blog/<slug>/
 */

import { mkdir, writeFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import TurndownService from 'turndown';
import { uniqueSlugFromTitle } from './blog-slug.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

const EXT_BY_CT = {
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

function mobileUrlFromArticleUrl(url) {
  try {
    const u = new URL(url);
    const m = u.pathname.match(/\/a\/([^/?#]+)/i);
    if (!m) return null;
    return `https://dzen.ru/m/article/${m[1]}`;
  } catch {
    return null;
  }
}

/**
 * Удаляет упоминания Дзена / ссылки на dzen.ru из markdown.
 */
/** Обрезает шум до первого H1 и после типичных блоков «ещё почитать». */
export function trimArticleMarkdown(md) {
  if (!md) return '';
  const lines = md.split('\n');
  let start = 0;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (/^#\s+/.test(t) && t.length > 5) {
      start = i;
      break;
    }
  }
  const endMarkers = [
    'Рекомендуем почитать',
    'Подпишитесь на канал',
    'Не пропустите новые публикации',
    'Другие материалы',
    'Читайте также',
    'Похожие публикации',
  ];
  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    const line = lines[i];
    if (endMarkers.some((m) => line.includes(m))) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join('\n').trim();
}

export function stripDzenFromMarkdown(md) {
  if (!md) return '';
  let s = md;

  s = s.replace(/\]\(\/away\?[^)]+\)/gi, (full) => {
    const m = full.match(/to=([^&)]*)/);
    if (!m) return full;
    try {
      const target = decodeURIComponent(m[1].replace(/\+/g, '%20'));
      return `](${target})`;
    } catch {
      return full;
    }
  });

  s = s.replace(/([?&])utm_[^=]+=[^&\s)]*/gi, '');
  s = s.replace(/\?&+/g, '?');
  s = s.replace(/https?:\/\/[^)\s]+\?(?=[\s)])/g, (u) => u.replace(/\?$/, ''));
  s = s.replace(/https?:\/\/[^)\s]+\?$/g, (u) => u.slice(0, -1));

  s = s.replace(/\[([^\]]*)\]\([^)]*(?:dzen\.ru|zen\.yandex\.ru|zen\.yandex\.com)[^)]*\)/gi, '$1');
  s = s.replace(/https?:\/\/[^\s\])'"<>]*(?:dzen\.ru|zen\.yandex\.ru|zen\.yandex\.com)[^\s\])'"<>]*/gi, '');

  const phrases = [
    /\bЯндекс[\s\u00A0]*[Дд]зен\w*\b/gi,
    /\bYandex[\s\u00A0]*Zen\b/gi,
    /\bв[\s\u00A0]*[Дд]зен\w*\b/gi,
    /\bна[\s\u00A0]*[Дд]зен\w*\b/gi,
    /\bс[\s\u00A0]*[Дд]зен\w*\b/gi,
    /\b[Дд]зен\w*\b/g,
    /\bDzen\b/gi,
    /zen\.yandex\.\w+/gi,
  ];
  for (const p of phrases) s = s.replace(p, '');

  s = s.replace(/\s+\./g, '.');
  s = s.replace(/\(\s*\)/g, '');
  s = s.replace(/[ \t]{2,}/g, ' ');
  s = s.replace(/\n{4,}/g, '\n\n\n');
  return s.trim();
}

function buildTurndown() {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });
  td.remove(['script', 'style', 'noscript', 'iframe']);
  return td;
}

/**
 * Достаёт основной HTML блок статьи из отрендеренной страницы.
 */
async function extractArticleFragment(page) {
  return page.evaluate(() => {
    function textLen(el) {
      const c = el.cloneNode(true);
      c.querySelectorAll('script,style,noscript,iframe').forEach((n) => n.remove());
      return (c.innerText || '').trim().length;
    }

    function cleanClone(el) {
      const clone = el.cloneNode(true);
      clone.querySelectorAll('script,style,noscript,iframe').forEach((n) => n.remove());
      clone
        .querySelectorAll(
          '[class*="comment"], [class*="Comment"], [class*="Subscribe"], [class*="subscription"], [class*="Social"], [class*="related"], [class*="Recommend"], [class*="Similar"], [class*="read-more"], [data-testid*="comment"], [aria-label*="Подписаться"]',
        )
        .forEach((n) => n.remove());
      clone.querySelectorAll('aside, [role="complementary"]').forEach((n) => n.remove());
      return clone;
    }

    function finalize(best, textLength) {
      const images = [];
      const seen = new Set();

      best.querySelectorAll('img').forEach((img) => {
        const src =
          img.getAttribute('data-src') ||
          img.getAttribute('data-original') ||
          img.currentSrc ||
          img.src ||
          '';
        if (!src || src.startsWith('data:') || src.includes('sprite') || src.includes('icon'))
          return;
        try {
          const abs = new URL(src, document.baseURI).href;
          if (seen.has(abs)) return;
          seen.add(abs);
          images.push(abs);
        } catch {
          /* ignore */
        }
      });

      best.querySelectorAll('img').forEach((img) => {
        const src =
          img.getAttribute('data-src') ||
          img.getAttribute('data-original') ||
          img.currentSrc ||
          img.src ||
          '';
        if (!src || src.startsWith('data:')) return;
        try {
          const abs = new URL(src, document.baseURI).href;
          const idx = images.indexOf(abs);
          if (idx >= 0) img.setAttribute('src', `__DZEN_INLINE_IMG_${idx}__`);
        } catch {
          /* ignore */
        }
      });

      return {
        html: best.innerHTML,
        images,
        ok: true,
        textLen: textLength,
      };
    }

    const prioritySelectors = [
      '[itemprop="articleBody"]',
      '[data-testid="article-body"]',
      '[class*="article-view__article"]',
      '[class*="article__text"]',
      '[class*="ArticleText"]',
      '[class*="doc_text"]',
      '[class*="zen-story__body"]',
      'article [class*="text"]',
    ];

    for (const sel of prioritySelectors) {
      const el = document.querySelector(sel);
      if (!el) continue;
      const len = textLen(el);
      if (len >= 500) {
        return finalize(cleanClone(el), len);
      }
    }

    const scored = [];

    const tryPush = (el) => {
      if (!el || el.closest('header')) return;
      const len = textLen(el);
      if (len < 400) return;
      scored.push({ clone: cleanClone(el), len });
    };

    document.querySelectorAll('article').forEach(tryPush);
    document.querySelectorAll('main article').forEach(tryPush);
    document
      .querySelectorAll(
        '[class*="article-view"], [class*="ArticleView"], [class*="article-doc"], [class*="ArticleDoc"], [class*="zen-story"]',
      )
      .forEach(tryPush);

    if (scored.length === 0) return { html: '', images: [], ok: false, textLen: 0 };

    scored.sort((a, b) => b.len - a.len);
    return finalize(scored[0].clone, scored[0].len);
  });
}

async function gotoWithRetry(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120_000 });
  await sleep(2000);
}

/**
 * @param {import('playwright').Page} page
 * @param {string} articleUrl
 * @param {string} slug
 * @param {string} publicImagesBlogRoot — .../public/images/blog
 * @param {string} [articleTitle] — заголовок для H1, если в разметке не попал
 */
export async function scrapeOneArticle(page, articleUrl, slug, publicImagesBlogRoot, articleTitle = '') {
  const urls = [articleUrl];
  const mob = mobileUrlFromArticleUrl(articleUrl);
  if (mob && mob !== articleUrl) urls.push(mob);

  let lastErr = '';
  for (const tryUrl of urls) {
    try {
      await gotoWithRetry(page, tryUrl);

      if (page.url().includes('sso.dzen.ru')) {
        lastErr = 'редирект на SSO (нужна сессия в браузере)';
        continue;
      }

      await sleep(1500);

      let frag = await extractArticleFragment(page);
      if (!frag.ok || frag.textLen < 400) {
        lastErr = `мало текста (${frag.textLen} симв.)`;
        continue;
      }

      let html = frag.html;
      const dir = join(publicImagesBlogRoot, slug);
      await mkdir(dir, { recursive: true });

      for (let i = 0; i < frag.images.length; i++) {
        const src = frag.images[i];
        const token = `__DZEN_INLINE_IMG_${i}__`;
        if (!html.includes(token)) continue;

        let ext = 'jpg';
        let buf;
        try {
          const resp = await page.request.get(src, { timeout: 60_000 });
          if (!resp.ok()) throw new Error(`HTTP ${resp.status()}`);
          buf = Buffer.from(await resp.body());
          const ct = (resp.headers()['content-type'] || '').split(';')[0].trim().toLowerCase();
          ext = EXT_BY_CT[ct] || 'jpg';
        } catch (e) {
          console.error(`    img skip ${i + 1}: ${e.message}`);
          html = html.split(token).join(src);
          continue;
        }

        const fn = `inline-${String(i + 1).padStart(3, '0')}.${ext}`;
        const diskPath = join(dir, fn);
        await writeFile(diskPath, buf);
        const webPath = `/images/blog/${slug}/${fn}`;
        html = html.split(token).join(webPath);
      }

      html = html.replace(/__DZEN_INLINE_IMG_\d+__/g, '');

      const td = buildTurndown();
      let md = td.turndown(html);

      const t = String(articleTitle || '').trim();
      if (t && !/^\s*#\s+/m.test(md)) {
        md = `# ${t.replace(/\s+/g, ' ').trim()}\n\n${md}`;
      }

      md = trimArticleMarkdown(md);
      md = stripDzenFromMarkdown(md);

      if (md.length < 300) {
        lastErr = 'после конвертации мало текста';
        continue;
      }

      return { ok: true, fullMarkdown: md, scrapeUrl: tryUrl, textLen: frag.textLen };
    } catch (e) {
      lastErr = e.message || String(e);
    }
  }

  return { ok: false, fullMarkdown: '', scrapeError: lastErr || 'unknown' };
}

/**
 * @param {object[]} articles — объекты с url, title, …
 * @param {object} options
 */
async function seedUsedSlugsFromBlogImages(publicImagesRoot, usedSlugs) {
  try {
    const entries = await readdir(publicImagesRoot, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      if (e.name === 'covers' || e.name.startsWith('.')) continue;
      usedSlugs.add(e.name);
    }
  } catch {
    /* ignore */
  }
}

export async function scrapeArticlesFull(articles, options) {
  const {
    publicImagesRoot = resolve(__dirname, '../../public/images/blog'),
    delayMs = 400,
    limit = 0,
    mdOutDir = null,
  } = options;

  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      args: ['--disable-dev-shm-usage', '--no-sandbox'],
    });
  } catch (e) {
    throw new Error(
      `Не удалось запустить Chromium (Playwright). Выполните: npx playwright install chromium\n${e.message}`,
    );
  }

  const context = await browser.newContext({
    userAgent: UA,
    locale: 'ru-RU',
    viewport: { width: 1365, height: 900 },
  });
  const page = await context.newPage();

  const out = [];
  let i = 0;
  const total = articles.length;
  const maxScrape = limit > 0 ? limit : total;
  const usedSlugs = options.usedSlugs instanceof Set ? options.usedSlugs : new Set();
  await seedUsedSlugsFromBlogImages(publicImagesRoot, usedSlugs);

  for (const a of articles) {
    i += 1;
    if (i > maxScrape) {
      out.push({ ...a });
      continue;
    }

    const slug = uniqueSlugFromTitle(a.title || 'post', usedSlugs);
    console.error(`[scrape ${i}/${maxScrape}] ${slug} …`);
    const r = await scrapeOneArticle(page, a.url, slug, publicImagesRoot, a.title);
    if (r.ok) {
      console.error(`  ✓ ${r.textLen} симв., ${r.scrapeUrl}`);
    } else {
      console.error(`  ✗ ${r.scrapeError}`);
    }

    const merged = {
      ...a,
      fullMarkdown: r.fullMarkdown || '',
      scrapeOk: r.ok,
      scrapeError: r.ok ? undefined : r.scrapeError,
      scrapeSourceUrl: r.scrapeUrl,
      /** Папка public/images/blog/<articleSlug>/ (совпадает с SEO-slug при том же порядке и usedSlugs) */
      articleSlug: slug,
    };

    if (mdOutDir && r.ok && r.fullMarkdown) {
      await mkdir(mdOutDir, { recursive: true });
      await writeFile(join(mdOutDir, `${slug}.md`), `${r.fullMarkdown}\n`, 'utf8');
    }

    out.push(merged);
    if (delayMs > 0) await sleep(delayMs);
  }

  await browser.close();
  return out;
}
