/**
 * Данные подвала. Меняйте здесь или подставляйте из CMS — блоки рендерятся динамически.
 */

export interface NavLink {
  title: string;
  url: string;
}

export interface Contact {
  telegram: string;
  telegramLabel: string;
  email?: string;
}

export interface SocialLink {
  href: string;
  label: string;
  title?: string;
}

export interface LegalLink {
  title: string;
  href: string;
}

export interface AppStoreLink {
  href: string;
  qrImageUrl: string;
  label: string;
  alt?: string;
}

export const footerNavLinks: NavLink[] = [
  { title: 'Главная', url: '/ru/' },
  { title: 'О методе', url: '/ru/method/' },
  { title: 'Об авторе', url: '/ru/about/' },
  { title: 'Карта пути', url: '/ru/path/' },
  { title: 'Книги автора', url: '/ru/books/' },
  { title: 'Приложение DOM', url: '/ru/app-dom/' },
  { title: 'Блог и наука', url: '/ru/blog/' },
  { title: 'Отзывы', url: '/ru/reviews/' },
  { title: 'Магазин', url: '/ru/shop/' },
];

export const contact: Contact = {
  telegram: 'https://t.me/itbrain_support',
  telegramLabel: '@itbrain_support',
  email: undefined,
};

export const socialLinks: SocialLink[] = [
  { href: 'https://www.youtube.com/', label: 'YouTube', title: 'YouTube' },
  { href: contact.telegram, label: 'Telegram', title: 'Telegram' },
  { href: 'https://www.instagram.com/', label: 'Instagram', title: 'Instagram' },
];

export const copyrightText = '© Copyright. Anna Kamallaya Khefors';

export const legalLinks: LegalLink[] = [
  {
    title: 'Оферта',
    href: 'https://t.me/itbrain_support?text=%D0%9F%D1%80%D0%BE%D1%88%D1%83%20%D0%BE%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%9E%D1%84%D0%B5%D1%80%D1%82%D1%83%20DOM',
  },
  {
    title: 'Политика конфиденциальности',
    href: 'https://t.me/itbrain_support?text=%D0%9F%D1%80%D0%BE%D1%88%D1%83%20%D0%BE%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D1%83%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20DOM',
  },
];

export const appBlock = {
  title: 'Приложение DOM',
  appName: 'DOM',
  appSubtitle: 'Meditation & Balance',
  description: 'DOM для iOS и Android.',
  qrHint: 'НАЖМИТЕ НА QR, ЧТОБЫ ПЕРЕЙТИ В STORE, ИЛИ ОТСКАНИРУЙТЕ КОД',
  /** URL иконки приложения (из CMS или медиа). Если задан — используется он, иначе локальный файл */
  iconUrl: undefined as string | undefined,
  stores: [
    {
      href: 'https://apps.apple.com/kw/app/it-brain-meditation-balance/id6478028341',
      qrImageUrl:
        'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fapps.apple.com%2Fkw%2Fapp%2Fit-brain-meditation-balance%2Fid6478028341',
      label: 'IOS',
      alt: 'QR: приложение DOM в App Store',
    },
    {
      href: 'https://play.google.com/store/apps/details?id=pro.appfyl.dmtmeditation&hl=en',
      qrImageUrl:
        'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dpro.appfyl.dmtmeditation%26hl%3Den',
      label: 'ANDROID',
      alt: 'QR: приложение DOM в Google Play',
    },
  ],
};

export const legalBar = {
  year: '2026',
  brand: 'DOM Method',
};

/** Порядок и типы блоков в основной сетке подвала. Меняйте порядок или отключайте блоки. */
export type FooterBlockType = 'logo' | 'links' | 'contact' | 'app' | 'appQR';

export interface FooterBlockConfig {
  id: string;
  type: FooterBlockType;
  gridClass?: string;
}

export const footerBlocks: FooterBlockConfig[] = [
  { id: 'logo', type: 'logo' },
  { id: 'links', type: 'links' },
  { id: 'contact', type: 'contact' },
  { id: 'app', type: 'app' },
  { id: 'appQR', type: 'appQR', gridClass: 'lg:justify-self-start lg:-ml-6' },
];
