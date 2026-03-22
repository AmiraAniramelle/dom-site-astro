/**
 * Данные страницы «Отзывы» (/ru/reviews/).
 * @see reviews-sections/00-RULES-reviews.md, 01-reviews-hero.md, 02-reviews-filters.md, 07-reviews-page.md, 08-navbar-dropdown.md
 * SVG-иконки чипов — source-DOM/source-DOM.html ~5934–5989
 */
export type ReviewsFilterItem = {
  id: string;
  label: string;
  /** Доверенная разметка внутри <svg viewBox="0 0 24 24"> (path/circle/rect) */
  svgMarkup: string;
};

/**
 * Пункты выпадающего меню «Отзывы» в навбаре (→ /ru/reviews/?filter=…)
 * @see reviews-sections/08-navbar-dropdown.md
 */
export const reviewsMenuFilters = [
  { id: 'system-thinking', label: 'Системное мышление' },
  { id: 'male-female', label: 'Мужчина и женщина' },
  { id: 'money', label: 'Деньги' },
  { id: 'depression', label: 'Депрессия' },
] as const;

export const reviewsPageData = {
  seo: {
    title: 'Отзывы участников DOM — Истории трансформации | DOM',
    description:
      'Реальные отзывы участников метода DOM: видео, истории, отзывы из Telegram-чатов.',
    canonicalUrl: '/ru/reviews/',
  },
  hero: {
    eyebrow: 'РЕЗУЛЬТАТЫ',
    title: 'Отзывы участников',
    subtitle:
      'Реальные истории людей, которые проходят метод DOM: видео-отзывы, развёрнутые тексты и отзывы из Telegram-чатов.',
  },
  filters: {
    hint: 'Смотреть отзывы по теме',
    statusPrefix: 'Сейчас показаны:',
    /** Текст статуса при фильтре «все темы» (как в макете — строчные) */
    statusAllLabel: 'все темы',
    items: [
      {
        id: 'all',
        label: 'Все темы',
        svgMarkup:
          '<path d="M12 3v18M3 12h18M5.8 5.8l12.4 12.4M18.2 5.8 5.8 18.2"/>',
      },
      {
        id: 'awareness',
        label: 'Осознания и впечатления',
        svgMarkup: '<path d="m12 3 7 9-7 9-7-9 7-9Z"/><path d="M12 3v18"/>',
      },
      {
        id: 'male-female',
        label: 'Отношения. Мужчина/Женщина',
        svgMarkup: '<circle cx="8" cy="12" r="4.5"/><circle cx="16" cy="12" r="4.5"/>',
      },
      {
        id: 'system-thinking',
        label: 'Системное мышление',
        svgMarkup:
          '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h8M6 8v8M18 8v8M8 18h8"/>',
      },
      {
        id: 'parents',
        label: 'Отношения с родителями',
        svgMarkup:
          '<path d="M4 11.5 12 5l8 6.5"/><path d="M6 10.8V19h12v-8.2"/><path d="M9.5 14.2h5"/>',
      },
      {
        id: 'colleagues',
        label: 'Отношения с коллегами, друзьями и социумом',
        svgMarkup: '<path d="M4 13h5l2 2 3-3 2 2h4"/><path d="M9 10.5h4"/>',
      },
      {
        id: 'money',
        label: 'Деньги. Реализация себя',
        svgMarkup:
          '<rect x="3.5" y="6.5" width="17" height="11" rx="2"/><path d="M12 10v4M10 12h4"/>',
      },
      {
        id: 'money-rod',
        label: 'Отношения с родом',
        svgMarkup:
          '<path d="M4 11.5 12 5l8 6.5"/><path d="M8 10.5V19"/><path d="M16 10.5V19"/><path d="M12 12v7"/>',
      },
      {
        id: 'money-below',
        label: 'Позиция «ниже» денег',
        svgMarkup:
          '<path d="M12 4v13"/><path d="m8.5 14 3.5 3.5L15.5 14"/><circle cx="12" cy="4" r="1.8"/>',
      },
      {
        id: 'money-rules',
        label: 'Правила и порядки системы денег',
        svgMarkup:
          '<path d="M5 7h14"/><path d="M5 12h14"/><path d="M5 17h14"/><path d="M9 7v10"/>',
      },
      {
        id: 'health',
        label: 'Здоровье физическое и психическое',
        svgMarkup: '<path d="M3 12h4l2-3 3 7 2-4h7"/>',
      },
      {
        id: 'children',
        label: 'Отношения с детьми',
        svgMarkup:
          '<circle cx="12" cy="9" r="3"/><path d="M6.5 19c1.2-2.6 3-4 5.5-4s4.3 1.4 5.5 4"/>',
      },
      {
        id: 'depression',
        label: 'Депрессия. Тревожность',
        svgMarkup: '<rect x="4" y="9" width="16" height="6" rx="3"/><path d="M12 9v6"/>',
      },
      {
        id: 'book',
        label: 'Книга «Гармония в Семье»',
        svgMarkup:
          '<path d="M5 5.5h8a3 3 0 0 1 3 3V19H8a3 3 0 0 0-3 3"/><path d="M19 5.5h-8a3 3 0 0 0-3 3V19h8a3 3 0 0 1 3 3"/>',
      },
    ] satisfies readonly ReviewsFilterItem[],
  },
  /** Заголовки секций с отзывами */
  sections: {
    video: 'Видео-отзывы',
    stories: 'Истории студентов',
    telegram: 'Отзывы из Telegram-чатов',
  },
  /** Нижний CTA — reviews-sections/07-reviews-page.md */
  moreReviewsCta: {
    href: 'https://t.me/itbrain_support',
    label: 'Смотреть больше отзывов',
  },
} as const;
