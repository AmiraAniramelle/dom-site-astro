/**
 * SEO-friendly slug из заголовка статьи (транслит, kebab-case).
 * Используется для имён файлов и URL /ru/blog/<slug>/
 */
import { slugify } from 'transliteration';

export const MAX_SLUG_LEN = 80;

export function cleanTitleForSlug(raw) {
  let t = String(raw || '').trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    t = t.slice(1, -1);
  }
  t = t.replace(/\\"/g, '"');
  t = t.replace(/\s*[—–-]\s*Анна\s+Камаллая\s+Хефорс\.?$/i, '');
  t = t.replace(/\s*Анна\s+Камаллая\s+Хефорс\.?$/i, '');
  t = t.replace(/\s*Анна\s+Хефорс\.?$/i, '');
  t = t.replace(/\s*Нейробиолог\s+Анна\s+Хефорс\.?:?\s*/gi, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  return t.slice(0, 200);
}

export function titleToBaseSlug(title) {
  const cleaned = cleanTitleForSlug(title);
  let s = slugify(cleaned, { lowercase: true, separator: '-' });
  s = s.replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (s.length > MAX_SLUG_LEN) {
    s = s.slice(0, MAX_SLUG_LEN).replace(/-[^-]*$/, '').replace(/-$/, '');
  }
  return s || 'post';
}

/**
 * @param {string} base
 * @param {Set<string>} used — уже занятые slug (в этой партии или существующие файлы)
 */
export function allocateSlug(base, used) {
  let s = base;
  let n = 2;
  while (used.has(s)) {
    const room = MAX_SLUG_LEN - String(n).length - 1;
    s = `${base.slice(0, Math.max(8, room))}-${n}`;
    n += 1;
  }
  used.add(s);
  return s;
}

/** Уникальный slug для заголовка. */
export function uniqueSlugFromTitle(title, used) {
  return allocateSlug(titleToBaseSlug(title), used);
}
