/**
 * Данные страницы списка блога (/ru/blog/).
 * @see blog-sections/00-RULES-blog.md, 01-blog-hero.md, 02-blog-filters.md
 */
export const blogPageData = {
  seo: {
    title: 'Блог DOM — Статьи, практики, разборы | DOM',
    description:
      'Материалы DOM по системному мышлению, отношениям, деньгам, ментальному здоровью. Статьи, практики, разборы.',
    canonicalUrl: '/ru/blog/',
  },
  hero: {
    title: 'Блог DOM',
    subtitle:
      'Эта страница помогает быстро находить материалы DOM по вашей жизненной теме, глубине формата и ключевому механизму изменений.',
  },
  filters: {
    eyebrow: 'НАВИГАЦИЯ ПО БЛОГУ',
    hint: 'Категория = сфера жизни. Тип = глубина формата. Теги = механизм или состояние.',
    categories: [
      { id: 'science', title: 'Наука' },
      { id: 'system-thinking', title: 'Системное мышление' },
      { id: 'spiritual-development', title: 'Духовное развитие' },
      { id: 'life-meanings', title: 'Смыслы жизни' },
      { id: 'parents', title: 'Отношения с родителями' },
      { id: 'children', title: 'Отношения с детьми' },
      { id: 'male-female', title: 'Мужчина и женщина' },
      { id: 'money-business', title: 'Деньги и бизнес' },
      { id: 'anxiety-depression', title: 'Тревожность и депрессия' },
    ],
    contentTypes: ['Статья', 'Книга'],
    tags: [
      'Принятие',
      'Позиция взрослого',
      'Роль',
      'Порядки системы',
      'Цель',
      'Самоценность',
      'Внутренняя опора',
      'Энергия',
      'Осознание',
      'Конфликт',
      'Страх',
      'Тревога',
      'Депрессивное состояние',
      'Выгорание',
      'Кризис',
      'Вина',
      'Обида',
      'Непринятие',
      'Зависимость',
      'Развод',
      'Границы',
      'Лидерство',
      'Ответственность',
      'Финансовый рост',
      'Масштабирование',
      'Самореализация',
      'Работа с телом',
    ],
    sortOptions: [
      { value: 'new', label: 'Новые' },
      { value: 'old', label: 'Старые' },
      { value: 'popular', label: 'Популярные' },
    ],
    searchPlaceholder: 'Поиск по заголовку, описанию и тегам',
  },
} as const;

/** Подфильтры выпадающего меню «Блог» в навбаре (blog-sections/07-navbar-dropdown.md) */
export const blogMenuFilters = [
  { id: 'science', label: 'Наука' },
  { id: 'system-thinking', label: 'Системное мышление' },
  { id: 'spiritual-development', label: 'Духовное развитие' },
  { id: 'life-meanings', label: 'Смыслы жизни' },
] as const;

/**
 * Соответствие ?filter= из URL значениям селектов на /ru/blog/
 * (id совпадают с blogMenuFilters; при необходимости скорректируйте под контент).
 */
export const blogUrlFilterMap: Record<
  string,
  { category?: string; tag?: string; contentType?: string }
> = {
  science: { category: 'science' },
  'system-thinking': { category: 'system-thinking' },
  'spiritual-development': { category: 'spiritual-development' },
  'life-meanings': { category: 'life-meanings' },
};
