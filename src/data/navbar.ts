/**
 * Данные навбара. Меняйте здесь или подставляйте из CMS — меню рендерится по этому массиву.
 */

import { blogMenuFilters } from './pages/blog';

export interface NavItemChild {
  title: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
  /** Подпункты для выпадающего меню. Если нет — пункт ведёт на url одной ссылкой */
  children?: NavItemChild[];
}

/** Пункты главного меню (порядок и состав можно менять в CMS) */
export const navItems: NavItem[] = [
  {
    title: 'О методе',
    url: '/ru/method/',
    children: [
      { title: 'Главная DOM', url: '/ru/' },
      { title: 'О методе', url: '/ru/method/' },
    ],
  },
  {
    title: 'Карта пути',
    url: '/ru/path/',
    children: [
      { title: 'Карта пути', url: '/ru/path/' },
      { title: 'Деньги', url: '/ru/path/money/' },
      { title: 'Отношения', url: '/ru/path/relations/' },
      { title: 'Ментальное здоровье', url: '/ru/path/mental/' },
      { title: 'Душа', url: '/ru/path/soul/' },
      { title: 'Осознанность', url: '/ru/path/awareness/' },
      { title: 'Мировоззрение', url: '/ru/path/worldview/' },
    ],
  },
  {
    title: 'Об Авторе',
    url: '/ru/about/',
    children: [
      { title: 'Об авторе', url: '/ru/about/' },
      { title: 'Книги автора', url: '/ru/books/' },
      { title: 'История жизни', url: '/ru/about-life/' },
    ],
  },
  {
    title: 'Блог и наука',
    url: '/ru/blog/',
    children: [
      ...blogMenuFilters.map((f) => ({
        title: f.label,
        url: `/ru/blog/?filter=${f.id}`,
      })),
      { title: 'Смотреть весь блог', url: '/ru/blog/' },
    ],
  },
  { title: 'Отзывы', url: '/ru/reviews/' },
  { title: 'Магазин', url: '/ru/shop/' },
];

/** Ссылки для мобильного меню (плоский список; можно генерировать из navItems или задать отдельно) */
export function getMobileNavLinks(): { title: string; url: string }[] {
  const links: { title: string; url: string }[] = [
    { title: 'DOM', url: '/ru/' },
    { title: 'О методе', url: '/ru/method/' },
    { title: 'Карта пути', url: '/ru/path/' },
    { title: 'Об авторе', url: '/ru/about/' },
    { title: 'Книги автора', url: '/ru/books/' },
    { title: 'История жизни', url: '/ru/about-life/' },
    { title: 'Приложение DOM', url: '/ru/app-dom/' },
    { title: 'Блог и наука', url: '/ru/blog/' },
    ...blogMenuFilters.map((f) => ({
      title: `Блог: ${f.label}`,
      url: `/ru/blog/?filter=${f.id}`,
    })),
    { title: 'Блог: весь каталог', url: '/ru/blog/' },
    { title: 'Отзывы', url: '/ru/reviews/' },
    { title: 'Магазин', url: '/ru/shop/' },
  ];
  return links;
}

/** Переключатель языка (для CMS: массив локалей) */
export const langSwitcher = {
  current: { code: 'ru', label: 'RUS', href: '/ru/' },
  other: { code: 'en', label: 'EN', href: '/en/' },
};
