/**
 * Скачивание изображений с CDN Дзена (обложки и т.п.).
 */

const UA = process.env.DZEN_UA || 'Mozilla/5.0 (compatible; DOM-site/1.0)';

const EXT_BY_TYPE = {
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

/**
 * @param {string} url
 * @returns {Promise<{ buffer: Buffer, ext: string, contentType: string }>}
 */
export async function fetchImage(url) {
  if (!url || typeof url !== 'string') {
    throw new Error('fetchImage: нет URL');
  }
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'image/*,*/*' },
    redirect: 'follow',
    signal: AbortSignal.timeout(90_000),
  });
  if (!res.ok) {
    throw new Error(`fetchImage: HTTP ${res.status} для ${url}`);
  }
  const contentType = (res.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  const ext = EXT_BY_TYPE[contentType] || 'jpg';
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 100) {
    throw new Error(`fetchImage: слишком маленький ответ (${buffer.length} b) для ${url}`);
  }
  return { buffer, ext, contentType };
}

export function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
