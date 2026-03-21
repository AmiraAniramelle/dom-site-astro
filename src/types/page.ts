export interface Breadcrumb {
  name: string;
  url: string;
}

export interface PageMeta {
  title: string; // До 60 символов
  description: string; // До 160 символов
  canonicalUrl: string; // Полный URL
  ogImage?: string; // 1200x630
  ogType?: 'website' | 'article' | 'product' | 'profile';
  locale: 'ru_RU' | 'en_US';
  alternateLocales?: { lang: string; url: string }[];
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: Breadcrumb[];
  /** Дополнительные блоки JSON-LD в <head> (напр. WebPage со вложенным breadcrumb) */
  jsonLd?: Record<string, unknown>[];
}
