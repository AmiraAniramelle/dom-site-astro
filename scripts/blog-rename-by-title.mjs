#!/usr/bin/env node
/**
 * Переименовывает посты: файл и slug = транслит заголовка (SEO).
 * Двухфазно (через .__migr-*), чтобы не конфликтовать при обмене имён.
 *
 *   node scripts/blog-rename-by-title.mjs --dry-run
 *   node scripts/blog-rename-by-title.mjs
 */

import { readdir, readFile, writeFile, rename, rm, access } from 'node:fs/promises';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import {
  titleToBaseSlug,
  allocateSlug,
} from './lib/blog-slug.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BLOG_DIR = join(__dirname, '../src/content/blog');
const COVERS_DIR = join(__dirname, '../public/images/blog/covers');
const IMAGES_BLOG = join(__dirname, '../public/images/blog');

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function readdirSafe(dir) {
  try {
    return await readdir(dir);
  } catch {
    return [];
  }
}

function patchPathsInString(str, oldSlug, newSlug) {
  if (typeof str !== 'string') return str;
  let s = str;
  const escapeRe = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const reCover = new RegExp(
    `(/images/blog/covers/)${escapeRe(oldSlug)}(\\.(?:png|jpg|jpeg|webp|gif))`,
    'gi',
  );
  s = s.replace(reCover, `$1${newSlug}$2`);
  const reDir = new RegExp(`(/images/blog/)${escapeRe(oldSlug)}(/)`, 'g');
  s = s.replace(reDir, `$1${newSlug}$2`);
  return s;
}

function patchMarkdownBody(content, oldSlug, newSlug) {
  return patchPathsInString(content, oldSlug, newSlug);
}

function patchFrontmatterData(data, oldSlug, newSlug) {
  const d = JSON.parse(JSON.stringify(data));
  d.slug = newSlug;
  d.cover = patchPathsInString(d.cover, oldSlug, newSlug);
  if (d.seo) {
    d.seo = { ...d.seo };
    if (d.seo.ogImage) {
      d.seo.ogImage = patchPathsInString(d.seo.ogImage, oldSlug, newSlug);
    }
  }
  return d;
}

async function main() {
  const dry = process.argv.includes('--dry-run');
  const files = (await readdirSafe(BLOG_DIR)).filter((f) => f.endsWith('.md'));

  const rows = [];
  for (const f of files) {
    const oldSlug = f.replace(/\.md$/, '');
    const fullPath = join(BLOG_DIR, f);
    const raw = await readFile(fullPath, 'utf8');
    const { data, content } = matter(raw);
    const title = data.title || oldSlug;
    rows.push({ oldSlug, fullPath, title, data, content });
  }

  const used = new Set();
  const plan = rows.map((r) => ({
    ...r,
    newSlug: allocateSlug(titleToBaseSlug(r.title), used),
  }));

  const toChange = plan.filter((p) => p.oldSlug !== p.newSlug);

  if (dry) {
    for (const p of toChange) {
      console.error(`[dry] ${p.oldSlug}.md → ${p.newSlug}.md`);
      console.error(`      ${String(p.title).slice(0, 72)}…`);
    }
    console.error(`\n[dry] К переименованию: ${toChange.length}, без изменений: ${plan.length - toChange.length}`);
    return;
  }

  /* Фаза 1: убрать старые пути с диска (временные имена) */
  for (const p of toChange) {
    const mdFrom = join(BLOG_DIR, `${p.oldSlug}.md`);
    const mdTmp = join(BLOG_DIR, `.__migr-md__${p.oldSlug}.md`);
    if (await exists(mdFrom)) {
      await rename(mdFrom, mdTmp);
    }

    const covFiles = await readdirSafe(COVERS_DIR);
    for (const f of covFiles) {
      const base = f.replace(/\.[^.]+$/, '');
      if (base !== p.oldSlug) continue;
      await rename(join(COVERS_DIR, f), join(COVERS_DIR, `.__migr-cover__${p.oldSlug}${extname(f)}`));
    }

    const inlineFrom = join(IMAGES_BLOG, p.oldSlug);
    const inlineTmp = join(IMAGES_BLOG, `.__migr-inline__${p.oldSlug}`);
    if (await exists(inlineFrom)) {
      await rename(inlineFrom, inlineTmp);
    }
  }

  /* Фаза 2: записать финальные имена и обновить пути внутри .md */
  for (const p of toChange) {
    const mdTmp = join(BLOG_DIR, `.__migr-md__${p.oldSlug}.md`);
    if (!(await exists(mdTmp))) {
      console.error(`Пропуск (нет временного md): ${p.oldSlug}`);
      continue;
    }

    const raw = await readFile(mdTmp, 'utf8');
    const { data, content } = matter(raw);
    const newData = patchFrontmatterData(data, p.oldSlug, p.newSlug);
    const newBody = patchMarkdownBody(content, p.oldSlug, p.newSlug);
    const out = matter.stringify(newBody, newData);
    await writeFile(join(BLOG_DIR, `${p.newSlug}.md`), out, 'utf8');
    await rm(mdTmp);
    console.error(`OK ${p.oldSlug} → ${p.newSlug}.md`);

    const covMigr = (await readdirSafe(COVERS_DIR)).find((f) =>
      f.startsWith(`.__migr-cover__${p.oldSlug}.`),
    );
    if (covMigr) {
      const ext = extname(covMigr);
      const to = join(COVERS_DIR, `${p.newSlug}${ext}`);
      if (!(await exists(to))) {
        await rename(join(COVERS_DIR, covMigr), to);
      }
    }

    const inlineTmp = join(IMAGES_BLOG, `.__migr-inline__${p.oldSlug}`);
    const inlineTo = join(IMAGES_BLOG, p.newSlug);
    if (await exists(inlineTmp) && !(await exists(inlineTo))) {
      await rename(inlineTmp, inlineTo);
    }
  }

  console.error(
    `\nГотово: ${toChange.length} переименований, без изменений: ${plan.length - toChange.length}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
