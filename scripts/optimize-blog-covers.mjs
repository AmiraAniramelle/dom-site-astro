#!/usr/bin/env node
/**
 * Оптимизация обложек блога: WebP, max 800px по ширине, quality 80%.
 * Исходники: public/images/blog/covers/*.{png,jpg,jpeg}
 * Результат: рядом файл с тем же basename и расширением .webp
 * Затем обновляет пути в src/content/blog/*.md (cover, ogImage и др.).
 *
 * Запуск: npm run blog:optimize-covers
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COVERS_DIR = path.join(ROOT, 'public', 'images', 'blog', 'covers');
const BLOG_CONTENT = path.join(ROOT, 'src', 'content', 'blog');

const RASTER = /\.(png|jpe?g)$/i;

async function main() {
  if (!fs.existsSync(COVERS_DIR)) {
    console.error('Папка не найдена:', COVERS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(COVERS_DIR).filter((f) => RASTER.test(f));
  const convertedBases = new Set();

  for (const file of files) {
    const inPath = path.join(COVERS_DIR, file);
    const base = file.replace(RASTER, '');
    const outPath = path.join(COVERS_DIR, `${base}.webp`);

    try {
      await sharp(inPath)
        .rotate()
        .resize({
          width: 800,
          withoutEnlargement: true,
        })
        .webp({ quality: 80 })
        .toFile(outPath);

      const inStat = fs.statSync(inPath);
      const outStat = fs.statSync(outPath);
      console.log(
        `${file} → ${base}.webp (${(inStat.size / 1024).toFixed(0)} KB → ${(outStat.size / 1024).toFixed(0)} KB)`,
      );
      convertedBases.add(base);
    } catch (e) {
      console.error('Ошибка:', file, e.message);
    }
  }

  if (convertedBases.size === 0) {
    console.log('Нет PNG/JPEG для конвертации.');
    return;
  }

  let mdUpdated = 0;
  const mdFiles = fs.readdirSync(BLOG_CONTENT).filter((f) => f.endsWith('.md'));

  for (const md of mdFiles) {
    const mdPath = path.join(BLOG_CONTENT, md);
    let text = fs.readFileSync(mdPath, 'utf8');
    const orig = text;

    for (const base of convertedBases) {
      const prefix = `/images/blog/covers/${base}`;
      text = text.replaceAll(`${prefix}.png`, `${prefix}.webp`);
      text = text.replaceAll(`${prefix}.jpg`, `${prefix}.webp`);
      text = text.replaceAll(`${prefix}.jpeg`, `${prefix}.webp`);
      text = text.replaceAll(`${prefix}.JPG`, `${prefix}.webp`);
      text = text.replaceAll(`${prefix}.PNG`, `${prefix}.webp`);
    }

    if (text !== orig) {
      fs.writeFileSync(mdPath, text, 'utf8');
      mdUpdated++;
    }
  }

  console.log(`\nОбновлено markdown-файлов: ${mdUpdated}`);
  console.log('Готово. Старые PNG/JPEG можно удалить вручную после проверки сборки.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
