/**
 * Плоский текст истории отзыва для JSON-LD (schema.org Review) и SEO.
 * Читает .md на диске на этапе сборки — id коллекции = имя файла без .md.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export function markdownToPlainText(md: string): string {
  return md
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/\*\*?|__|\*|_|`+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getStoryReviewPlainBodyFromFile(entryId: string): string {
  const filePath = path.join(process.cwd(), 'src/content/reviews', `${entryId}.md`);
  if (!fs.existsSync(filePath)) {
    return '';
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(raw);
  return markdownToPlainText(content);
}

/**
 * Текст для модалки на главной: сохраняет абзацы (pre-line), убирает лёгкую разметку MD.
 */
export function getStoryReviewModalPlainBodyFromFile(entryId: string): string {
  const filePath = path.join(process.cwd(), 'src/content/reviews', `${entryId}.md`);
  if (!fs.existsSync(filePath)) {
    return '';
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(raw);
  let t = content.trim();
  t = t.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  t = t.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  t = t.replace(/\*\*([^*]+)\*\*/g, '$1');
  t = t.replace(/\*([^*]+)\*/g, '$1');
  t = t.replace(/^#{1,6}\s+.*\n?/gm, '');
  return t.replace(/\n{3,}/g, '\n\n').trim();
}
