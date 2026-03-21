export interface BooksPageData {
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
  hero: {
    chip: string;
    title: string;
    subtitle: string;
    heroImage: { src: string; alt: string; width?: number; height?: number };
    press: { label: string; items: string[] };
  };
  author: {
    title: string;
    /** Полное имя — мелким текстом под заголовком */
    authorName: string;
    paragraphs: string[];
    portrait: { src: string; alt: string; width?: number; height?: number };
  };
  /** Карточки книг на странице (компонент BookCard) */
  bookCards: Array<{
    chip: string;
    title: string;
    paragraphs: string[];
    meta: string[];
    buyButton: { text: string; url: string };
    cover: { src: string; alt: string; width?: number; height?: number };
  }>;
}

export const booksPageData: BooksPageData = {
  seo: {
    title: 'Книги Камаллаи Хефорс — Гармония в семье, Расшифровка генома человечности | DOM',
    description:
      'Авторские книги метода DOM: практическое руководство по отношениям и духовно-научный синтез. Купить на Ozon и Amazon.',
    canonicalUrl: '/ru/books/',
  },
  hero: {
    chip: 'Бестселлеры DOM',
    title: 'Книги Камаллаи Хефорс',
    subtitle:
      'Авторские книги, в которых метод DOM раскрыт через внешний контур отношений и внутренний контур осознанности.',
    heroImage: {
      src: '/dom-assets/hero-reference.jpg',
      alt: 'Книги Камаллаи Хефорс',
      width: 1920,
      height: 1080,
    },
    press: {
      label: 'Представлено на',
      items: ['Amazon', 'Ozon', 'DOM Method', 'MIROZDANIE'],
    },
  },
  author: {
    title: 'Автор книг',
    authorName: 'Анна Камаллая Хефорс',
    paragraphs: [
      'Камаллая Хефорс создает книги как практические маршруты внутренней и внешней трансформации: от семейных сценариев и роли в отношениях до осознанности и глубинных кодов памяти.',
      'Каждый текст продолжает экосистему DOM и помогает перенести знания в ежедневную жизнь через конкретные шаги, наблюдения и практику.',
    ],
    portrait: {
      src: '/dom-assets/anna-portrait.png',
      alt: 'Анна Камаллая Хефорс, автор книг метода DOM',
      width: 800,
      height: 1080,
    },
  },
  bookCards: [
    {
      chip: 'Внешний DOM · Отношения',
      title: 'Гармония в семье',
      paragraphs: [
        'Практическая книга о семейных сценариях как системе: от наследуемых установок до зрелой роли взрослого в отношениях.',
        'В центре внимания - как обрести внутреннюю силу, прекратить повторение старых моделей и выстроить живую, уважительную любовь в паре и в отношениях с детьми.',
      ],
      meta: ['Практическое руководство по отношениям', 'Книга внешнего контура DOM'],
      buyButton: {
        text: 'Купить на Ozon',
        url: 'https://www.ozon.ru/product/garmoniya-v-seme-kak-obresti-silu-i-lyubov-v-semeynyh-stsenariyah-hefors-anna-kamallaya-2917059802/',
      },
      cover: {
        src: '/dom-assets/Книга Гармония в семье.png',
        alt: 'Книга Гармония в семье — Анна Камаллая Хефорс',
        width: 480,
        height: 720,
      },
    },
    {
      chip: 'Внутренний DOM · Осознанность',
      title: 'Расшифровка генома человечности',
      paragraphs: [
        'Уникальное исследование взаимосвязи духовного развития и науки: эволюция сознания через современные данные и древние знания.',
        'В центре внимания - ДНК человека, 64 кодона памяти, их переводы и интерпретации на русском языке как путь к более глубокому осознанию себя и своего места во Вселенной.',
      ],
      meta: ['Духовно-научный синтез', 'Книга внутреннего контура DOM'],
      buyButton: {
        text: 'Купить на Amazon',
        url: 'https://www.amazon.com/dp/B0CNS27BWZ',
      },
      cover: {
        src: '/dom-assets/Расшифрвка генома человечности.png',
        alt: 'Книга Расшифровка генома человечности — Анна Камаллая Хефорс',
        width: 480,
        height: 720,
      },
    },
  ],
};
