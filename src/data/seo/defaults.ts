import type { PageMeta } from '../../types/page';
import { siteConfig } from '../site';

export const defaultMeta: Partial<PageMeta> = {
  ogImage: siteConfig.defaultOgImage,
  ogType: 'website',
  locale: 'ru_RU',
  author: siteConfig.author,
};

/**
 * Хелпер для создания мета-тегов страницы.
 * canonicalUrl можно передать относительным путём (напр. /ru/products/formula-money/) — будет дополнен siteConfig.url.
 */
export function createPageMeta(
  overrides: Partial<PageMeta> & { title: string; description: string; canonicalUrl: string }
): PageMeta {
  const canonicalUrl =
    overrides.canonicalUrl.startsWith('http')
      ? overrides.canonicalUrl
      : `${siteConfig.url}${overrides.canonicalUrl.startsWith('/') ? '' : '/'}${overrides.canonicalUrl}`;
  return {
    ...defaultMeta,
    ...overrides,
    canonicalUrl,
  } as PageMeta;
}
