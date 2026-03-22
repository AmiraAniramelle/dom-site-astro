/**
 * Слаг файла из URL статьи Дзена (/a/<slug>/).
 */
export function slugFromDzenUrl(url) {
  try {
    const path = new URL(url).pathname;
    const seg = path.split('/').filter(Boolean).pop() || 'post';
    return seg
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || `post-${Date.now()}`;
  } catch {
    return `post-${Date.now()}`;
  }
}
