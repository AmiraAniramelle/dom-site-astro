#!/usr/bin/env node
/**
 * Читает JSON из dzen-best-articles.mjs и создаёт черновики .md в src/content/blog/
 * с теми же category / tags / contentType — фильтры на /ru/blog/ работают сразу.
 *
 *   node scripts/dzen-import-blog.mjs
 *   node scripts/dzen-import-blog.mjs --input scripts/output/dzen-best-articles.json --force
 */

import { readFile, writeFile, mkdir, readdir, rename, access } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchImage, sleep } from './lib/fetch-asset.mjs';
import { slugFromDzenUrl } from './lib/dzen-slug.mjs';
import { uniqueSlugFromTitle } from './lib/blog-slug.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COVERS_DIR = resolve(__dirname, '../public/images/blog/covers');
const IMAGES_BLOG = resolve(__dirname, '../public/images/blog');

async function pathExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

/** Пути /images/blog/<oldSeg>/ → /images/blog/<newSeg>/ */
function rewriteBlogImageDirs(md, oldSeg, newSeg) {
  if (!md || oldSeg === newSeg) return md;
  const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return md.replace(
    new RegExp(`(/images/blog/)${esc(oldSeg)}(/)`, 'g'),
    `$1${newSeg}$2`,
  );
}

function yamlString(s) {
  const t = `${s}`.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `"${t}"`;
}

function altForCoverImage(title) {
  const t = `${title}`.replace(/[\[\]]/g, '').slice(0, 120);
  return t || 'Обложка статьи';
}

function excerptFromSnippet(snippet, max = 220) {
  const one = snippet.replace(/\s+/g, ' ').trim();
  if (one.length <= max) return one;
  const cut = one.slice(0, max);
  const last = cut.lastIndexOf('.');
  return last > 80 ? cut.slice(0, last + 1).trim() : `${cut.trim()}…`;
}

function excerptFromFullMarkdown(md) {
  const plain = md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return excerptFromSnippet(plain || md, 220);
}

function readingTimeFromMarkdown(md) {
  const words = md.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parseArgs(argv) {
  const opts = {
    input: resolve(__dirname, 'output/dzen-best-articles.json'),
    outDir: resolve(__dirname, '../src/content/blog'),
    force: false,
    /** Скачать обложку с CDN Дзена в public/images/blog/covers/ */
    downloadCovers: true,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') opts.help = true;
    else if (a === '--input') opts.input = resolve(process.cwd(), argv[++i]);
    else if (a === '--out') opts.outDir = resolve(process.cwd(), argv[++i]);
    else if (a === '--force') opts.force = true;
    else if (a === '--no-covers') opts.downloadCovers = false;
  }
  return opts;
}

function printHelp() {
  console.log(`
dzen-import-blog.mjs — импорт статей из JSON в src/content/blog/*.md

  --input <файл>   по умолчанию scripts/output/dzen-best-articles.json
  --out <папка>    по умолчанию src/content/blog
  --force          перезаписать существующие .md
  --no-covers      не скачивать обложки (оставить placeholder)
`);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  const raw = await readFile(opts.input, 'utf8');
  const data = JSON.parse(raw);
  const articles = data.articles;
  if (!Array.isArray(articles)) {
    throw new Error('В JSON нет массива articles');
  }

  await mkdir(opts.outDir, { recursive: true });
  if (opts.downloadCovers) {
    await mkdir(COVERS_DIR, { recursive: true });
  }

  const usedSlugs = new Set();
  try {
    for (const f of await readdir(opts.outDir)) {
      if (f.endsWith('.md')) usedSlugs.add(f.replace(/\.md$/, ''));
    }
  } catch {
    /* ignore */
  }
  try {
    const entries = await readdir(IMAGES_BLOG, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      if (e.name === 'covers' || e.name.startsWith('.')) continue;
      usedSlugs.add(e.name);
    }
  } catch {
    /* ignore */
  }

  let written = 0;
  let skipped = 0;

  for (const a of articles) {
    const dzenSlug = slugFromDzenUrl(a.url);
    const slug = uniqueSlugFromTitle(a.title || 'Без названия', usedSlugs);
    const filePath = resolve(opts.outDir, `${slug}.md`);

    try {
      await readFile(filePath, 'utf8');
      if (!opts.force) {
        skipped += 1;
        continue;
      }
    } catch {
      /* нет файла */
    }

    const title = a.title || 'Без названия';
    const hasFull =
      typeof a.fullMarkdown === 'string' && a.fullMarkdown.trim().length > 200;
    const excerpt = hasFull
      ? excerptFromFullMarkdown(a.fullMarkdown)
      : excerptFromSnippet(a.snippet || title);
    const date = a.publishedAt || new Date().toISOString().slice(0, 10);
    const readingTime = hasFull
      ? readingTimeFromMarkdown(a.fullMarkdown)
      : Number(a.readingTimeMinutes) || 5;
    const viewsCount = Number(a.views) || 0;
    const category = a.category;
    const tags = Array.isArray(a.tags) ? a.tags : [];
    const contentType = a.contentType || 'Статья';
    const url = a.url || '';

    const seoTitle = `${title} | DOM`.slice(0, 200);
    const seoDesc = excerpt.slice(0, 160);

    const tagsYaml = tags.map((t) => `  - ${yamlString(t)}`).join('\n');

    let coverPath = '/images/blog/placeholder.jpg';
    if (opts.downloadCovers && a.coverUrl) {
      try {
        const { buffer, ext } = await fetchImage(a.coverUrl);
        const coverFile = resolve(COVERS_DIR, `${slug}.${ext}`);
        await writeFile(coverFile, buffer);
        coverPath = `/images/blog/covers/${slug}.${ext}`;
      } catch (e) {
        console.error(`Обложка не скачана (${dzenSlug}): ${e.message}`);
      }
      await sleep(80);
    }

    const alt = altForCoverImage(title);
    const coverInBody =
      !hasFull && coverPath !== '/images/blog/placeholder.jpg'
        ? `\n\n![${alt}](${coverPath})\n\n`
        : '\n\n';

    let body;
    if (hasFull) {
      body = a.fullMarkdown.trim();
      const fromSeg =
        typeof a.articleSlug === 'string' && a.articleSlug.trim()
          ? a.articleSlug.trim()
          : dzenSlug;
      if (fromSeg !== slug) {
        body = rewriteBlogImageDirs(body, fromSeg, slug);
        const fromDir = join(IMAGES_BLOG, fromSeg);
        const toDir = join(IMAGES_BLOG, slug);
        if ((await pathExists(fromDir)) && !(await pathExists(toDir))) {
          try {
            await rename(fromDir, toDir);
          } catch (e) {
            console.error(`Не удалось переименовать ${fromSeg} → ${slug}: ${e.message}`);
          }
        }
      }
    } else {
      body = `Полный текст опубликован на [Дзен](${url}).
${coverInBody}${(a.snippet || '').slice(0, 2000)}

> Иллюстрации внутри текста статьи на Дзене в выгрузке канала недоступны (API отдаёт только обложку и сниппет). При необходимости добавьте скриншоты или вставьте картинки вручную.

---

*Материал перенесён из канала на Дзене; при необходимости замените тело страницы на полный текст с согласия автора.*
`;
    }

    const seoOg =
      coverPath !== '/images/blog/placeholder.jpg' ? `\n  ogImage: "${coverPath}"` : '';

    const md = `---
title: ${yamlString(title)}
slug: ${yamlString(slug)}
excerpt: ${yamlString(excerpt)}
category: ${yamlString(category)}
contentType: ${yamlString(contentType)}
tags:
${tagsYaml}
date: ${yamlString(date)}
readingTime: ${readingTime}
viewsCount: ${viewsCount}
cover: "${coverPath}"
relatedProductId: null
seo:
  title: ${yamlString(seoTitle)}
  description: ${yamlString(seoDesc)}${seoOg}
published: true
lang: "ru"
---

${body}`;

    await writeFile(filePath, md, 'utf8');
    written += 1;
    console.error(`OK ${slug}.md`);
  }

  console.error(`Готово: создано ${written}, пропущено (уже есть) ${skipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
