/**
 * Данные первого блока (hero) на главной.
 * Меняйте здесь или подставляйте из CMS — компонент рендерит по этим полям.
 * Для SEO: title и lead можно использовать для meta title/description страницы.
 */

export interface HeroButton {
  label: string;
  href: string;
}

export interface HeroImage {
  /** Текст для alt (обязателен для доступности и SEO) */
  alt: string;
  /** URL картинки из CMS. Если не задан — используется локальный файл */
  url?: string;
}

export interface HeroBlock {
  /** Строка над заголовком (бейдж) */
  badgeText: string;
  /** Главный заголовок страницы (h1) — один на страницу, ключевая фраза для SEO */
  title: string;
  /** Подзаголовок / лид под h1 */
  lead: string;
  primaryButton: HeroButton;
  secondaryButton: HeroButton;
  /** Портрет: alt обязателен, url — если картинка из CMS */
  portrait: HeroImage;
  /** Карточка-оверлей на портрете (золотой блок с логотипом): alt, url опционально */
  overlayCard: HeroImage;
}

export const heroBlock: HeroBlock = {
  badgeText: 'DOM · ИНСТИТУТ ВНУТРЕННЕЙ ТРАНСФОРМАЦИИ И СИСТЕМНОГО МЫШЛЕНИЯ · АННА ХЕФОРС',
  title: 'Верни себе опору. Жизнь — это система, которую можно выстроить.',
  lead: 'Метод DOM — архитектура зрелой жизни: шесть граней единой системы, которая соединяет внешнюю реализацию и внутреннюю честность.',
  primaryButton: { label: 'Начать свой путь', href: '/ru/path/' },
  secondaryButton: { label: 'Открыть структуру метода', href: '/ru/method/' },
  portrait: {
    alt: 'Анна Хефорс — автор метода DOM, системный метод и внутренняя трансформация',
    url: undefined,
  },
  overlayCard: {
    alt: 'DOM — Systemic Method, Development, Oneness, Mental Health',
    url: undefined,
  },
};
