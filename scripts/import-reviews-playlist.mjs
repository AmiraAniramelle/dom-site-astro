/**
 * Импорт видео из RSS плейлиста YouTube в src/content/reviews/video-*.md
 * Плейлист: https://www.youtube.com/playlist?list=PLmYcEQ8jqXIRwjzs2MC3HkS9IXEKgmxuV
 *
 * Использование: node scripts/import-reviews-playlist.mjs [path/to/feed.xml]
 * По умолчанию: scripts/_playlist-feed.xml (скачать curl-ом при необходимости)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const reviewsDir = path.join(root, 'src/content/reviews');
const feedPath = process.argv[2] || path.join(__dirname, '_playlist-feed.xml');

function pickCategory(title) {
  const t = title.toLowerCase();
  if (/гармония в семье|книг/i.test(title)) return 'book';
  if (/семейн|муж|жена|отношени|вместе|кризис|одиночеств/i.test(title)) return 'relations';
  if (/формул|денег|money|накоплен|зарплат|изобил|финанс|эго.*депутат/i.test(title))
    return 'money';
  if (/страх|боль|сомнен|никчемн|предал/i.test(title)) return 'depression';
  return 'awareness';
}

function excerptFromTitle(title) {
  const t = title.trim();
  if (t.length <= 180) return t;
  return `${t.slice(0, 177)}…`;
}

function parseFeed(xml) {
  const entries = xml.split('<entry>').slice(1).map((s) => '<entry>' + s.split('</entry>')[0]);
  const out = [];
  for (const e of entries) {
    const id = (e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1];
    const title = (e.match(/<title>([^<]*)<\/title>/) || [])[1];
    const published = (e.match(/<published>([^<]+)<\/published>/) || [])[1];
    const thumb =
      (e.match(/url="(https:\/\/i[0-9]\.ytimg\.com\/vi\/[^"]+)"/) || [])[1] || '';
    if (!id) continue;
    const date = published ? published.slice(0, 10) : new Date().toISOString().slice(0, 10);
    const thumbnail = thumb || `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    out.push({ id, title: title || id, date, thumbnail });
  }
  return out;
}

const xml = fs.readFileSync(feedPath, 'utf8');
const videos = parseFeed(xml);
if (!videos.length) {
  console.error('Нет записей в', feedPath);
  process.exit(1);
}

const oldVideo = fs
  .readdirSync(reviewsDir)
  .filter((f) => /^video-0[1-4]\.md$/i.test(f));
for (const f of oldVideo) {
  fs.unlinkSync(path.join(reviewsDir, f));
  console.log('Удалён', f);
}

let n = 0;
for (const v of videos) {
  n += 1;
  const slug = `video-pl-${String(n).padStart(2, '0')}-${v.id}`;
  const category = pickCategory(v.title);
  const body = `---
type: video
title: ${JSON.stringify(v.title)}
name: ${JSON.stringify('Участник проекта')}
city: ${JSON.stringify('Россия')}
categories:
  - ${category}
excerpt: ${JSON.stringify(excerptFromTitle(v.title))}
date: ${JSON.stringify(v.date)}
youtubeId: ${JSON.stringify(v.id)}
thumbnail: ${JSON.stringify(v.thumbnail)}
published: true
lang: ru
---

`;

  const fp = path.join(reviewsDir, `${slug}.md`);
  fs.writeFileSync(fp, body, 'utf8');
  console.log('Записан', path.basename(fp));
}

console.log('Всего:', videos.length);
