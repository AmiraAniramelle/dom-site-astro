/**
 * 6 направлений DOM — тексты и классы из source-DOM.html (view-path-*).
 * У каждой программы свой кадр (Unsplash): тёплая редакционная эстетика, под смысл описания.
 */
const u = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=900&h=560&q=82`;

const TELEGRAM_NEURO_MED =
  'https://t.me/itbrain_support?text=Хочу%20получить%20доступ%20к%20проекту%20Нейро%20Медитации';
const TELEGRAM_GOLD_GENOME =
  'https://t.me/itbrain_support?text=Заявка%20в%20лист%20ожидания%20ЗОЛОТОЙ%20ГЕНОМ';
const TELEGRAM_THEORY_GENOME =
  'https://t.me/itbrain_support?text=Заявка%20на%20программу%20Теория%20Золотого%20Генома';
const TELEGRAM_RAPHAEL =
  'https://t.me/itbrain_support?text=Заявка%20на%20программу%20Мироздание%20Рафаэля';
const AMAZON_BOOK =
  'https://www.amazon.com/dp/B0CNS27BWZ?ref_=cm_sw_r_ffobk_cp_ud_dp_SHFHQQVNNNR2ZH5FD7ZX';

export type DirectionProductCardData = {
  /** Доп. классы на обёртке карточки (не используйте md:col-span-2 — колонки задаёт сетка) */
  gridItemClass?: string;
  /** На светлых направлениях: выделенная «флагманская» карточка (тёплый градиент, не dom-dark) */
  isFlagship?: boolean;
  rootTag: 'a' | 'div';
  rootClass: string;
  rootHref?: string | null;
  badge?: { text: string; class: string };
  preTitle?: { text: string; class: string };
  title: string;
  titleClass: string;
  description: string;
  descriptionClass: string;
  showImage?: boolean;
  image: string;
  imageAlt: string;
  imageClass: string;
  noteBlock?: {
    boxClass: string;
    strongClass: string;
    strongText: string;
    bodyText: string;
  };
  ctaTag: 'span' | 'a';
  ctaText: string;
  ctaClass: string;
  ctaHref?: string | null;
  ctaTarget?: string;
  ctaRel?: string;
};

/** Карточка «Источник внутренней радости» на /ru/path/soul/ */
export type SoulInnerJoyProduct = {
  kind: 'soul-inner-joy';
  gridItemClass?: string;
  rootClass: string;
  badge: { text: string; class: string };
  title: string;
  titleClass: string;
  description: string;
  descriptionClass: string;
  accessStrong: string;
  accessText: string;
  accessRowClass: string;
  image: string;
  imageAlt: string;
  visualFooterText: string;
  visualIconSrc: string;
  visualIconAlt: string;
  primaryCta: { text: string; href: string; class: string };
  outlineCtaClass: string;
  appStoreHref: string;
  googlePlayHref: string;
};

/** Карточка «Мобильное приложение DOM» на /ru/path/soul/ (QR из data/footer appBlock внутри компонента) */
export type SoulAppDomProduct = {
  kind: 'soul-app-dom';
  gridItemClass?: string;
  rootClass: string;
  badge: { text: string; class: string };
  title: string;
  titleClass: string;
  subtitle: string;
  subtitleClass: string;
  paragraphs: readonly [string, string];
  paragraphClass: string;
  iconSrc: string;
  iconAlt: string;
  qrHint: string;
  qrHintClass: string;
  appStoreLabel: string;
  googlePlayLabel: string;
  primaryCtaClass: string;
  outlineCtaClass: string;
  aboutHref: string;
  /** Подпись у иконки приложения (как в макете) */
  appBrandLine1?: string;
  appBrandLine2?: string;
};

export type DirectionProductItem = DirectionProductCardData | SoulInnerJoyProduct | SoulAppDomProduct;

export type RelationsBookData = {
  containerClass: string;
  /** Обложка книги (путь из /public) */
  coverSrc: string;
  coverAlt: string;
  eyebrowClass: string;
  eyebrow: string;
  titleClass: string;
  title: string;
  textClass: string;
  text: string;
  buttonClass: string;
  buttonText: string;
  buttonHref: string;
};

export type AwarenessBookData = {
  sectionClass: string;
  gridClass: string;
  coverWrapClass: string;
  coverSrc: string;
  coverAlt: string;
  coverImgClass: string;
  textColClass: string;
  eyebrowClass: string;
  eyebrow: string;
  titleClass: string;
  title: string;
  textClass: string;
  text: string;
  buttonClass: string;
  buttonText: string;
  buttonHref: string;
};

export type DirectionEntry = {
  theme: 'light' | 'dark';
  sectionClass: string;
  programsHeadingClass: string;
  hero: {
    backLink: { text: string; url: string; class: string };
    rowClass: string;
    letterCircleClass: string;
    letter: string;
    levelClass: string;
    level: string;
    titleClass: string;
    title: string;
  };
  description: {
    wrapperClass: string;
    highlightClass: string;
    highlightText: string;
    paragraphs: Array<{ text: string; class: string }>;
  };
  programsTitle: string;
  products: DirectionProductItem[];
  seo: { title: string; description: string; canonicalUrl: string };
  relationsBook?: RelationsBookData;
  awarenessBook?: AwarenessBookData;
};

function heroLight(letter: string, title: string): DirectionEntry['hero'] {
  return {
    backLink: {
      text: '← Вернуться к Карте Пути',
      url: '/ru/path/',
      class:
        'text-dom-goldDark hover:text-dom-graphite flex items-center text-sm font-bold uppercase tracking-wider mb-10 transition-colors',
    },
    rowClass: 'flex items-center mb-10 border-b border-dom-graphite/10 pb-8',
    letterCircleClass:
      'w-20 h-20 rounded-full bg-dom-beige/50 flex items-center justify-center mr-6 text-dom-gold text-4xl font-messiri',
    letter,
    levelClass: 'text-dom-graphite/50 font-bold tracking-widest uppercase text-xs mb-2 block',
    level: 'Уровень 1 / Внешний DOM',
    titleClass: 'hero-title text-dom-graphite',
    title,
  };
}

function heroDark(letter: string, title: string): DirectionEntry['hero'] {
  return {
    backLink: {
      text: '← Вернуться к Карте Пути',
      url: '/ru/path/',
      class:
        'text-dom-gold hover:text-white flex items-center text-sm font-bold uppercase tracking-wider mb-10 transition-colors',
    },
    rowClass: 'flex items-center mb-10 border-b border-dom-gold/20 pb-8',
    letterCircleClass:
      'w-20 h-20 rounded-full bg-dom-gold/20 border border-dom-gold/30 flex items-center justify-center mr-6 text-dom-gold text-4xl font-messiri',
    letter,
    levelClass: 'text-dom-gold font-bold tracking-widest uppercase text-xs mb-2 block',
    level: 'Уровень 2 / Внутренний DOM',
    titleClass: 'hero-title text-dom-gold',
    title,
  };
}

function descLight(highlight: string, body: string): DirectionEntry['description'] {
  return {
    wrapperClass:
      'prose max-w-none text-dom-graphite/80 font-montserrat leading-relaxed mb-16 text-lg',
    highlightClass: 'mb-6 border-l-4 border-dom-gold pl-6 font-medium text-dom-graphite',
    highlightText: highlight,
    paragraphs: [{ text: body, class: 'mb-6' }],
  };
}

function descDark(highlight: string, body: string): DirectionEntry['description'] {
  return {
    wrapperClass:
      'prose max-w-none text-dom-beige/80 font-montserrat leading-relaxed mb-16 text-lg',
    highlightClass: 'mb-6 border-l-4 border-dom-gold pl-6 font-medium text-dom-beige',
    highlightText: highlight,
    paragraphs: [{ text: body, class: 'mb-6' }],
  };
}

function descDarkQuoteOnly(highlight: string): DirectionEntry['description'] {
  return {
    wrapperClass:
      'prose max-w-none text-dom-beige/80 font-montserrat leading-relaxed mb-16 text-lg',
    highlightClass: 'mb-6 border-l-4 border-dom-gold pl-6 font-medium text-dom-beige',
    highlightText: highlight,
    paragraphs: [],
  };
}

export const directionsData: Record<string, DirectionEntry> = {
  money: {
    theme: 'light',
    sectionClass: 'bg-white min-h-screen pt-12 pb-24 text-dom-graphite',
    programsHeadingClass: 'font-messiri text-4xl text-dom-graphite mb-10',
    hero: heroLight('D', 'Направление: Деньги'),
    description: descLight(
      'Деньги в системе DOM — это не просто инструмент потребления. Это следствие вашей проявленности, системного мышления и уровня энергии.',
      'Мы рассматриваем финансовую зрелость как фундамент для любой дальнейшей трансформации. Без закрытых базовых потребностей, без понимания законов обмена ценностью с миром, переход на глубокие уровни осознанности становится побегом от реальности.',
    ),
    programsTitle: 'Программы направления',
    products: [
      {
        isFlagship: true,
        rootTag: 'a',
        rootHref: '/ru/products/formula-money/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 relative overflow-hidden group cursor-pointer block',
        badge: {
          text: 'Флагман',
          class:
            'absolute top-0 right-0 bg-gold-gradient text-white text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        title: 'Формула Денег',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Базовая архитектура финансового мышления. Системный подход к увеличению дохода, снятию блоков и созданию структуры, которая работает на вас.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1611974789855-9c2a0a7236a3'),
        imageAlt: 'Экран с графиками и данными — метафора системного финансового мышления',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-6',
        ctaTag: 'span',
        ctaText: 'Открыть программу',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/business-mission/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Модуль',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Бизнес Миссия',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Точечная работа с поиском своего истинного дела. Интеграция внутренних смыслов в бизнес-модели.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1507679799987-c73779587ccf'),
        imageAlt: 'Сосредоточенный взгляд и пауза — поиск своего дела и смысла в работе',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/power-of-manifestation/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Интенсив',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Сила проявления',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Преодоление страха видимости. Практики для выхода из тени и смелого заявления о себе миру.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1511671782779-c97d3d27a1d4'),
        imageAlt: 'Свет и сцена — смелая видимость, голос и выход из тени',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/seven-systems-abundance/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Практическая встреча',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: '7 систем изобилия',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Настройка всех уровней жизни для свободного финансового потока через 7 жизненных систем.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1544367567-0f2fcb009e0b'),
        imageAlt: 'Спокойная практика баланса — гармония жизненных систем и изобилия',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
    ],
    seo: {
      title: 'Деньги — Направление Внешнего DOM | Метод DOM',
      description:
        'Направление «Деньги» в методе DOM: финансовая зрелость, системное мышление и программы для материальной опоры.',
      canonicalUrl: '/ru/path/money/',
    },
  },

  relations: {
    theme: 'light',
    sectionClass: 'bg-white min-h-screen pt-12 pb-24 text-dom-graphite',
    programsHeadingClass: 'font-messiri text-4xl text-dom-graphite mb-10',
    hero: heroLight('O', 'Направление: Отношения'),
    description: descLight(
      'Отношения — это базовая структура взаимодействия с миром. То, как вы выстраиваете связи с партнером, семьей и окружением, отражает вашу внутреннюю архитектуру.',
      'В этом направлении мы формируем безопасную среду. Снимаем претензии, выходим из деструктивных конфликтов и учимся выстраивать чистые, экологичные границы.',
    ),
    programsTitle: 'Программы направления',
    products: [
      {
        isFlagship: true,
        rootTag: 'a',
        rootHref: '/ru/products/family-unity/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 relative overflow-hidden group cursor-pointer block',
        badge: {
          text: 'Бесплатный вход',
          class:
            'absolute top-0 right-0 bg-white text-dom-graphite text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        title: 'Семейное Единство',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Базовый, фундаментальный шаг. Мягкий порог входа в метод через исцеление самых важных связей. Построение системы крепкой семьи без потери себя.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1511895426328-dc8714191300'),
        imageAlt: 'Семья на закате — тёплые отношения и опора дома',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-6',
        ctaTag: 'span',
        ctaText: 'Начать бесплатно',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/place-among-others/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Встреча + Практика',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Место среди других',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Искусство контакта без потери себя. Включает нейротренажер «Растворение социальных масок».',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1522071820081-009f0129c71c'),
        imageAlt: 'Люди за совместной работой — контакт и своё место в группе',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/man-woman-relations/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Встреча + Практика',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Мужчина и Женщина',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Отношения в паре и нейротренажер «Возвращение на свое место в системе отношений».',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1609220136736-443140cffec6'),
        imageAlt: 'Близость и тепло дома — пара и зрелый контакт в отношениях',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/children-relations/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Глубокий разбор',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Отношения с детьми',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Почему мы теряем контакт и как его восстановить. Создание доверия без манипуляций.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1476703993599-0035a21b17a9'),
        imageAlt: 'Родитель и ребёнок вместе — доверие и живой контакт',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
    ],
    relationsBook: {
      containerClass:
        'mt-14 bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] rounded-2xl border border-dom-gold/22 p-8 md:p-10 shadow-[0_14px_32px_rgba(126,91,35,0.12)]',
      coverSrc: '/dom-assets/Книга Гармония в семье.png',
      coverAlt: 'Обложка книги «Гармония в семье» — Анна Камаллая Хефорс, метод DOM',
      eyebrowClass: 'font-montserrat text-xs uppercase tracking-[0.12em] text-dom-goldDark mb-3',
      eyebrow: 'Книга направления',
      titleClass: 'font-messiri text-3xl text-dom-graphite mb-3',
      title: '«Гармония в семье»',
      textClass: 'text-dom-graphite/75 font-montserrat mb-7',
      text: 'Книга внешнего DOM в сфере отношений: семейные сценарии, зрелая позиция и восстановление близости.',
      buttonClass:
        'px-8 py-3 border border-dom-gold/45 text-dom-goldDark rounded hover:bg-dom-gold/10 transition font-medium uppercase tracking-[0.08em] text-xs inline-block',
      buttonText: 'Открыть в разделе «Книги»',
      buttonHref: '/ru/books/',
    },
    seo: {
      title: 'Отношения — Направление Внешнего DOM | Метод DOM',
      description:
        'Направление «Отношения»: семья, пара, дети и экологичные границы в системе DOM.',
      canonicalUrl: '/ru/path/relations/',
    },
  },

  mental: {
    theme: 'light',
    sectionClass: 'bg-white min-h-screen pt-12 pb-24 text-dom-graphite',
    programsHeadingClass: 'font-messiri text-4xl text-dom-graphite mb-10',
    hero: heroLight('M', 'Ментальное здоровье'),
    description: descLight(
      'Психическая устойчивость — это способность оставаться на своих ногах, когда всё вокруг приходит в движение. Это не отсутствие стресса, а умение сквозь него проходить.',
      'Это направление про нейрофизиологию и стабильность нервной системы. Мы работаем с внутренними опорами, помогаем мозгу выдерживать нагрузки масштаба и восстанавливаем право быть собой настоящим.',
    ),
    programsTitle: 'Программы направления',
    products: [
      {
        rootTag: 'a',
        rootHref: '/ru/products/power-of-acceptance/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        badge: {
          text: 'Фундамент',
          class:
            'absolute top-0 right-0 bg-gold-gradient text-white text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        preTitle: {
          text: 'Шаг 1',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Сила принятия',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Мощный фундаментальный продукт. Как перестать воевать с реальностью и собственными ограничениями, превратив их в ресурс роста.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1545389336-cf090694435e'),
        imageAlt: 'Спокойный светлый интерьер и отдых — мягкое принятие реальности',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-6',
        ctaTag: 'span',
        ctaText: 'Открыть программу',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/rules-of-life-systems/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Шаг 2',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Правила систем жизни',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Устройство внутренней Вселенной. Научитесь видеть сбои и быстро возвращать внутренний порядок.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1497366216548-37526070297c'),
        imageAlt: 'Минималистичное пространство сверху — порядок и внутренние системы',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/square-of-life-force/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Шаг 4',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Квадрат силы жизни',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Освойте взрослое «Я». Алгоритм выхода из автоматических паттернов и возвращения в центр.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1487958449943-2429e8be8625'),
        imageAlt: 'Архитектурные линии и свет — центр, опора и взрослая позиция',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/separation-from-family-scenarios/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Шаг 5',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Разделение с родовыми сценариями',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Снятие повторяющихся сценариев рода через перестройку нейронных связей без ухода в боль.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1441974231531-c6227db76b6e'),
        imageAlt: 'Солнечная тропа в лесу — глубина рода и выход из повторяющихся сценариев',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/true-self/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300 group cursor-pointer block',
        preTitle: {
          text: 'Шаг 6',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Обрети себя настоящего',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Снятие социальных масок, работа со стыдом и виной. Возвращение к подлинной идентичности.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1506794778202-cad84cf45f1d'),
        imageAlt: 'Портрет человека с искренней улыбкой — подлинность без масок',
        imageClass: 'w-full h-40 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Подробнее',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
      {
        isFlagship: true,
        rootTag: 'a',
        rootHref: '/ru/products/psychogenotypes/',
        rootClass:
          'bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] p-8 rounded-2xl border border-dom-gold/22 relative overflow-hidden group cursor-pointer block',
        badge: {
          text: 'Флагман',
          class:
            'absolute top-0 right-0 bg-gold-gradient text-white text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        preTitle: {
          text: 'Шаг 7',
          class: 'text-xs font-bold uppercase text-dom-goldDark mb-3 block tracking-widest',
        },
        title: 'Психогенотипы',
        titleClass:
          'font-messiri text-2xl text-dom-graphite mb-3 group-hover:text-dom-goldDark transition-colors',
        description:
          'Флагман направления. Глубинное понимание структуры личности, врожденных паттернов и точек роста для быстрых и устойчивых изменений.',
        descriptionClass: 'text-sm text-dom-graphite/70 mb-6 font-montserrat',
        image: u('photo-1532094349884-543bc11b234d'),
        imageAlt: 'Модель ДНК крупным планом — структура личности и врождённые паттерны',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-6',
        ctaTag: 'span',
        ctaText: 'Открыть флагман',
        ctaClass:
          'w-full py-3 border border-dom-graphite/20 text-dom-graphite rounded group-hover:bg-dom-graphite group-hover:text-white transition block text-center',
      },
    ],
    seo: {
      title: 'Ментальное здоровье — Направление Внешнего DOM | Метод DOM',
      description:
        'Психическая устойчивость, нервная система и программы направления «Ментальное здоровье» в методе DOM.',
      canonicalUrl: '/ru/path/mental/',
    },
  },

  soul: {
    theme: 'dark',
    sectionClass:
      'dom-dark-shell min-h-screen pt-12 pb-24 text-dom-beige relative overflow-x-hidden',
    programsHeadingClass: 'font-messiri text-4xl text-dom-gold mb-10',
    hero: heroDark('D', 'Направление: Душа'),
    description: descDark(
      'Второй уровень системы DOM. Пространство глубокой внутренней работы, где раскрываются душа, смыслы и зрелая опора.',
      'Это работа на уровне смыслов, тотальной осознанности и духа. Здесь заканчивается "ремонт" жизни и начинается истинное Творчество.',
    ),
    programsTitle: 'Программы направления',
    products: [
      {
        rootTag: 'div',
        rootClass:
          'bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-dom-gold/30 relative overflow-hidden group text-dom-beige dom-dark-card-glow',
        badge: {
          text: 'Бесплатно',
          class:
            'absolute top-0 right-0 bg-white/15 text-dom-beige text-xs font-bold uppercase py-2 px-6 rounded-bl-xl border border-dom-gold/35',
        },
        title: 'Нейро Медитации',
        titleClass: 'font-messiri text-3xl text-dom-gold mb-4 mt-2',
        description:
          'Проект в открытом доступе. Бесплатные материалы и практики для первого входа в направление «Душа» и мягкой внутренней настройки.',
        descriptionClass: 'text-base text-dom-beige/85 mb-6 font-light',
        image: u('photo-1621271428478-7a4658303582'),
        imageAlt: 'Силуэт человека в медитации под звёздным небом — космос, тишина и внутренняя настройка',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-4',
        noteBlock: {
          boxClass:
            'mb-8 p-5 bg-white/10 backdrop-blur-md rounded-xl text-sm border border-dom-gold/30',
          strongClass: 'text-dom-gold block mb-2',
          strongText: 'Доступ:',
          bodyText: ' Открытый доступ для всех участников. Без оплаты.',
        },
        ctaTag: 'a',
        ctaText: 'Получить бесплатно',
        ctaClass:
          'px-8 py-4 bg-dom-gold text-white font-bold rounded hover:bg-dom-goldDark hover:text-white transition shadow-lg text-lg inline-block text-center',
        ctaHref: TELEGRAM_NEURO_MED,
        ctaTarget: '_blank',
        ctaRel: 'noopener noreferrer',
      },
      {
        rootTag: 'a',
        rootHref: '/ru/products/neuro-trainers/',
        rootClass:
          'bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-dom-gold/30 relative overflow-hidden group cursor-pointer block hover:bg-white/15 hover:border-dom-gold/50 transition-all duration-300 text-dom-beige dom-dark-card-glow',
        badge: {
          text: 'Инструмент Души',
          class:
            'absolute top-0 right-0 bg-dom-gold text-white text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        title: 'Нейротренажёры мозга',
        titleClass: 'font-messiri text-3xl text-dom-gold mb-4 mt-2',
        description:
          'Аудио-визуальные практики для синхронизации состояния, глубокой внутренней настройки и устойчивой нейропластичности.',
        descriptionClass: 'text-base text-dom-beige/80 mb-8 font-light',
        image: u('photo-1647356191320-d7a1f80ca777'),
        imageAlt: 'Абстрактная сеть нейронов в космических фиолетово-синих тонах — мозг, нейропластичность и аудиовизуальные коды',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-4',
        ctaTag: 'span',
        ctaText: 'Изучить инструмент',
        ctaClass:
          'w-full md:w-auto px-10 py-4 bg-dom-gold text-white font-bold rounded hover:bg-dom-goldDark transition shadow-lg shadow-dom-gold/30 text-lg tracking-wider block text-center',
      },
      {
        kind: 'soul-inner-joy',
        rootClass: '',
        badge: {
          text: 'Продвинутый уровень',
          class:
            'absolute top-0 right-0 z-10 bg-dom-gold text-white text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        title: 'Источник внутренней радости',
        titleClass: 'font-messiri text-2xl md:text-3xl text-dom-gold mb-3 mt-2',
        description:
          'Глубокое, почти медитативное погружение в собственную природу. Программа в приложении IT BRAIN (DOM) помогает удерживать состояние внутренней радости ежедневно.',
        descriptionClass: 'text-sm md:text-base text-dom-beige/80 font-montserrat font-light leading-relaxed',
        accessStrong: 'Доступ: ',
        accessText: 'приложение IT BRAIN',
        accessRowClass:
          'font-montserrat text-[11px] font-bold uppercase tracking-widest text-[#c5a059] mt-2 mb-0',
        image: '/images/app/dom-app-phone-new.png',
        imageAlt: 'Программа «Источник внутренней радости» в приложении DOM / IT BRAIN',
        visualFooterText: 'Доступно в DOM',
        visualIconSrc: '/images/shared/DOM-app.png',
        visualIconAlt: 'Иконка приложения DOM',
        primaryCta: {
          text: 'О программе',
          href: '/ru/products/source-inner-joy/',
          class: '',
        },
        outlineCtaClass: '',
        appStoreHref: 'https://apps.apple.com/kw/app/it-brain-meditation-balance/id6478028341',
        googlePlayHref:
          'https://play.google.com/store/apps/details?id=pro.appfyl.dmtmeditation&hl=en',
      },
      {
        kind: 'soul-app-dom',
        rootClass: '',
        badge: {
          text: 'Приложение IT BRAIN',
          class:
            'absolute top-0 right-0 z-10 bg-dom-gold text-white text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        title: 'IT BRAIN · приложение DOM',
        titleClass: 'font-messiri text-2xl md:text-3xl text-dom-gold mb-3 mt-2',
        subtitle: 'Meditation & Balance — единая среда практик',
        subtitleClass:
          'font-montserrat text-[11px] font-bold uppercase tracking-widest text-[#c5a059] mb-3',
        paragraphs: [
          'Медитативные аудиопроекты, нейроинструменты и программы метода DOM в одном приложении.',
          'Установите IT BRAIN, чтобы проходить практики направления «Душа», сохранять прогресс и слушать материалы в удобном формате.',
        ],
        paragraphClass: 'text-sm md:text-base text-dom-beige/80 font-montserrat font-light leading-relaxed',
        iconSrc: u('photo-1611983455789-4bb45388c726'),
        iconAlt: 'Радостная женщина с iPhone в руках — мобильное приложение IT BRAIN и практики в смартфоне',
        appBrandLine1: 'IT BRAIN',
        appBrandLine2: 'DOM',
        qrHint: '',
        qrHintClass: '',
        appStoreLabel: 'iOS',
        googlePlayLabel: 'Android',
        primaryCtaClass: '',
        outlineCtaClass: '',
        aboutHref: '/ru/app-dom/',
      },
      {
        rootTag: 'div',
        rootClass:
          'bg-[linear-gradient(135deg,#f3d89b_0%,#d4aa5f_45%,#ba8c42_100%)] text-[#2a2115] p-10 rounded-2xl border border-[#f4e4ce]/55 relative overflow-hidden group dom-gold-card-glow',
        badge: {
          text: 'Сверх флагман',
          class:
            'absolute top-0 right-0 bg-[#2a2115] text-[#f4e4ce] text-xs font-bold uppercase py-2 px-6 rounded-bl-xl tracking-widest',
        },
        preTitle: {
          text: 'Закрытый уровень',
          class: 'text-xs font-bold uppercase text-[#4e3a1d] mb-3 block tracking-widest mt-2',
        },
        title: 'ЗОЛОТОЙ ГЕНОМ',
        titleClass: 'font-messiri text-4xl mb-4 tracking-wide text-[#2a2115]',
        description:
          'Ключевой, высший проект направления «Душа». Сейчас программа временно закрыта и откроется в новом наборе с отдельным анонсом.',
        descriptionClass: 'text-base text-[#2a2115]/90 mb-6 font-montserrat leading-relaxed',
        showImage: false,
        image: u('photo-1579621970563-ebec7560ff3e'),
        imageAlt: '',
        imageClass: '',
        noteBlock: {
          boxClass: 'mb-8 p-5 bg-[#2a2115]/20 rounded-xl text-sm border-l-2 border-[#2a2115]/55 text-[#2a2115]',
          strongClass: 'block mb-2 font-semibold',
          strongText: 'Статус:',
          bodyText: ' Набор временно закрыт. Доступ открывается по анонсу.',
        },
        ctaTag: 'a',
        ctaText: 'Встать в лист ожидания',
        ctaClass:
          'px-8 py-4 bg-[#2a2115] text-[#f4e4ce] font-bold rounded hover:bg-[#1f180f] transition shadow-lg text-lg inline-block text-center',
        ctaHref: TELEGRAM_GOLD_GENOME,
        ctaTarget: '_blank',
        ctaRel: 'noopener noreferrer',
      },
    ],
    seo: {
      title: 'Душа — Направление Внутреннего DOM | Метод DOM',
      description:
        'Направление «Душа»: внутренняя работа, нейротренажёры и программы второго уровня метода DOM.',
      canonicalUrl: '/ru/path/soul/',
    },
  },

  awareness: {
    theme: 'dark',
    sectionClass:
      'dom-dark-shell min-h-screen pt-12 pb-24 text-dom-beige relative overflow-x-hidden',
    programsHeadingClass: 'font-messiri text-4xl text-dom-gold mb-10',
    hero: heroDark('O', 'Направление: Осознанность'),
    description: descDarkQuoteOnly(
      'Осознанность в системе DOM — это не просто пребывание в моменте. Это тотальная ясность и честный, безоценочный взгляд на себя, свои реакции и окружающую реальность.',
    ),
    programsTitle: 'Программы направления',
    products: [
      {
        rootTag: 'div',
        rootClass:
          'bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-dom-gold/30 relative overflow-hidden group text-dom-beige dom-dark-card-glow',
        badge: {
          text: 'Знание',
          class:
            'absolute top-0 right-0 bg-dom-gold text-dom-graphite text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        title: 'Теория Золотого Генома',
        titleClass: 'font-messiri text-3xl text-dom-gold mb-4 mt-2',
        description:
          'Фундаментальные знания об эволюции сознания. Активация заложенного потенциала, распаковка внутренних кодов и переход на частоты творца своей реальности.',
        descriptionClass: 'text-base text-dom-beige/80 mb-8 font-light',
        showImage: true,
        image: u('photo-1462331940025-496dfbfc7564'),
        imageAlt: 'Туманность и звёзды — эволюция сознания и активация внутреннего потенциала',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-6',
        noteBlock: {
          boxClass:
            'mb-8 p-5 bg-white/10 backdrop-blur-md rounded-xl text-sm border border-dom-gold/30',
          strongClass: 'text-dom-gold block mb-2',
          strongText: 'Формат участия:',
          bodyText: ' Участие доступно после регистрации в проект.',
        },
        ctaTag: 'a',
        ctaText: 'Подать заявку',
        ctaClass:
          'px-8 py-4 bg-dom-gold text-white font-bold rounded hover:bg-dom-goldDark hover:text-white transition shadow-lg text-lg inline-block text-center',
        ctaHref: TELEGRAM_THEORY_GENOME,
        ctaTarget: '_blank',
        ctaRel: 'noopener noreferrer',
      },
    ],
    awarenessBook: {
      sectionClass:
        'mt-14 bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-dom-gold/30 text-dom-beige dom-dark-card-glow',
      gridClass: 'grid grid-cols-1 md:grid-cols-12 gap-8 items-center',
      coverWrapClass:
        'md:col-span-4 max-w-[240px] mx-auto md:mx-0 rounded-2xl overflow-hidden border border-dom-gold/35 shadow-[0_16px_34px_rgba(0,0,0,0.25)] bg-white/10',
      coverSrc: '/dom-assets/Расшифрвка%20генома%20человечности.png',
      coverAlt: 'Книга Расшифровка генома человечности',
      coverImgClass: 'w-full h-auto object-cover',
      textColClass: 'md:col-span-8',
      eyebrowClass: 'font-montserrat text-xs uppercase tracking-[0.12em] text-dom-gold/90 mb-3',
      eyebrow: 'Книга направления',
      titleClass: 'font-messiri text-3xl text-dom-gold mb-3',
      title: '«Расшифровка генома человечности»',
      textClass: 'text-dom-beige/80 font-montserrat mb-7',
      text: 'Книга внутреннего DOM в сфере осознанности: духовно-научный синтез, коды памяти и системная глубина.',
      buttonClass:
        'px-8 py-3 border border-dom-gold/45 text-dom-gold rounded hover:bg-dom-gold hover:text-white transition font-medium uppercase tracking-[0.08em] text-xs inline-block',
      buttonText: 'Купить на Amazon',
      buttonHref: AMAZON_BOOK,
    },
    seo: {
      title: 'Осознанность — Направление Внутреннего DOM | Метод DOM',
      description:
        'Направление «Осознанность»: ясность, честный взгляд на себя и практики внутреннего DOM.',
      canonicalUrl: '/ru/path/awareness/',
    },
  },

  worldview: {
    theme: 'dark',
    sectionClass:
      'dom-dark-shell min-h-screen pt-12 pb-24 text-dom-beige relative overflow-x-hidden',
    programsHeadingClass: 'font-messiri text-4xl text-dom-gold mb-10',
    hero: heroDark('M', 'Направление: Мировоззрение'),
    description: descDarkQuoteOnly(
      'Мировоззрение определяет масштаб вашей реальности. Это фундаментальные законы, этический компас и картина мира, через которую вы взаимодействуете с пространством.',
    ),
    programsTitle: 'Программы направления',
    products: [
      {
        rootTag: 'div',
        rootClass:
          'bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-dom-gold/30 relative overflow-hidden group text-dom-beige dom-dark-card-glow',
        badge: {
          text: 'Концепция',
          class:
            'absolute top-0 right-0 bg-dom-gold text-dom-graphite text-xs font-bold uppercase py-2 px-6 rounded-bl-xl shadow-lg',
        },
        title: 'Мироздание Рафаэля',
        titleClass: 'font-messiri text-3xl text-dom-gold mb-4 mt-2',
        description:
          'Глубокая концептуальная база. Архитектура высших смыслов и универсальных законов мироздания. Передача знаний о глобальных структурах, формирующих нашу реальность и эволюцию.',
        descriptionClass: 'text-base text-dom-beige/80 mb-8 font-light',
        showImage: true,
        image: u('photo-1451187580459-43490279c0fa'),
        imageAlt: 'Земля и световая сеть — масштаб мироздания и универсальные смыслы',
        imageClass: 'w-full h-48 object-cover rounded-xl mb-6',
        noteBlock: {
          boxClass:
            'mb-8 p-5 bg-white/10 backdrop-blur-md rounded-xl text-sm border border-dom-gold/30',
          strongClass: 'text-dom-gold block mb-2',
          strongText: 'Формат участия:',
          bodyText: ' Участие доступно после регистрации в проект.',
        },
        ctaTag: 'a',
        ctaText: 'Подать заявку',
        ctaClass:
          'px-8 py-4 bg-dom-gold text-white font-bold rounded hover:bg-dom-goldDark hover:text-white transition shadow-lg text-lg inline-block text-center',
        ctaHref: TELEGRAM_RAPHAEL,
        ctaTarget: '_blank',
        ctaRel: 'noopener noreferrer',
      },
    ],
    seo: {
      title: 'Мировоззрение — Направление Внутреннего DOM | Метод DOM',
      description:
        'Направление «Мировоззрение»: смыслы, этика и картина мира в системе DOM.',
      canonicalUrl: '/ru/path/worldview/',
    },
  },
};
