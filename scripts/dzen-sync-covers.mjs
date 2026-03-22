#!/usr/bin/env node
/**
 * Скачивает обложки из dzen-best-articles.json и обновляет cover: в уже существующих .md.
 * Сопоставление статей — по URL Дзена в теле поста, не по имени файла (slug = транслит заголовка).
 *
 *   node scripts/dzen-sync-covers.mjs
 *   node scripts/dzen-sync-covers.mjs --force
 */

import { readFile, writeFile, mkdir, access, readdir } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { fetchImage, sleep } from './lib/fetch-asset.mjs';
import { slugFromDzenUrl } from './lib/dzen-slug.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** alt для markdown ![…] из строки frontmatter title: */
function altFromTitleFrontmatter(md) {
  const titleLine = md.match(/^title:\s*(.+)$/m);
  if (!titleLine) return 'Обложка статьи';
  let t = titleLine[1].trim();
  if (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    t = t.slice(1, -1);
  }
  t = t.replace(/\\"/g, '"').replace(/\\'/g, "'");
  return t.replace(/[\[\]]/g, '').slice(0, 120);
}

function dzenKeyFromMarkdown(md) {
  const m = md.match(/https?:\/\/dzen\.ru\/a\/([^)\s"]+)/i);
  if (!m) return null;
  return slugFromDzenUrl(`https://dzen.ru/a/${m[1]}`);
}

async function buildDzenKeyToMdPath(blogDir) {
  const map = new Map();
  const files = await readdir(blogDir).catch(() => []);
  for (const f of files) {
    if (!f.endsWith('.md')) continue;
    const full = join(blogDir, f);
    const raw = await readFile(full, 'utf8');
    const key = dzenKeyFromMarkdown(raw);
    if (key) map.set(key, full);
  }
  return map;
}

async function main() {
  const force = process.argv.includes('--force');
  const input = resolve(__dirname, 'output/dzen-best-articles.json');
  const blogDir = resolve(__dirname, '../src/content/blog');
  const coversDir = resolve(__dirname, '../public/images/blog/covers');

  const raw = await readFile(input, 'utf8');
  const data = JSON.parse(raw);
  const articles = data.articles;
  if (!Array.isArray(articles)) throw new Error('Нет массива articles');

  await mkdir(coversDir, { recursive: true });

  const dzenToMd = await buildDzenKeyToMdPath(blogDir);

  async function fileExists(p) {
    try {
      await access(p);
      return true;
    } catch {
      return false;
    }
  }

  let ok = 0;
  let skip = 0;
  let fail = 0;

  for (const a of articles) {
    const dzenKey = slugFromDzenUrl(a.url);
    const mdPath = dzenToMd.get(dzenKey);
    const coverUrl = a.coverUrl;
    if (!coverUrl) {
      skip += 1;
      continue;
    }

    if (!mdPath) {
      skip += 1;
      continue;
    }

    let mdRaw = await readFile(mdPath, 'utf8');
    const { data: fm } = matter(mdRaw);
    const slug =
      typeof fm.slug === 'string' && fm.slug.trim()
        ? fm.slug.trim()
        : mdPath.replace(/^.*\//, '').replace(/\.md$/, '');

    let ext = 'jpg';
    let filePath;
    try {
      const { buffer, ext: e } = await fetchImage(coverUrl);
      ext = e;
      filePath = resolve(coversDir, `${slug}.${ext}`);
      if (force || !(await fileExists(filePath))) {
        await writeFile(filePath, buffer);
      }
    } catch (e) {
      console.error(`COVER FAIL ${slug}:`, e.message);
      fail += 1;
      continue;
    }

    const publicPath = `/images/blog/covers/${slug}.${ext}`;

    try {
      let md = mdRaw;
      let next = md.replace(/^cover:\s*.+$/m, `cover: "${publicPath}"`);
      if (!next.includes('ogImage:')) {
        next = next.replace(
          /^(  description: .+)\n/m,
          `$1\n  ogImage: "${publicPath}"\n`,
        );
      }

      /* обложка в теле статьи + пояснение про вложенные картинки */
      if (!next.includes(`](${publicPath})`)) {
        const dzenRe = /(Полный текст опубликован на \[Дзен\]\([^)]+\)\.)\n\n/;
        if (dzenRe.test(next)) {
          const alt = altFromTitleFrontmatter(next);
          next = next.replace(dzenRe, `$1\n\n![${alt}](${publicPath})\n\n`);
        }
      }
      if (!next.includes('Иллюстрации внутри текста статьи на Дзене')) {
        next = next.replace(
          /\n\n---\n\n\*Материал перенесён/,
          '\n\n> Иллюстрации внутри текста статьи на Дзене в выгрузке канала недоступны (API отдаёт только обложку и сниппет). При необходимости добавьте скриншоты или вставьте картинки вручную.\n\n---\n\n*Материал перенесён',
        );
      }

      next = next.replace(
        /^!\[[^\]]*\]\((\/images\/blog\/covers\/[^)]+)\)\s*$/m,
        (_, path) => `![${altFromTitleFrontmatter(next)}](${path})`,
      );

      if (next === md) {
        skip += 1;
        continue;
      }
      await writeFile(mdPath, next, 'utf8');
      ok += 1;
      console.error(`OK ${slug}.md → ${publicPath}`);
    } catch {
      skip += 1;
    }

    await sleep(80);
  }

  console.error(`Готово: обновлено ${ok}, пропуск/нет файла ${skip}, ошибки ${fail}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
