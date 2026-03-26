export interface AboutPageData {
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
  personSchema: {
    name: string;
    jobTitle: string;
    description: string;
    imagePath: string;
  };
  hero: {
    title: string;
    description: string;
    primaryCta: { text: string; url: string };
    secondaryCta: { text: string; url: string };
    portrait: { src: string; alt: string; width: number; height: number };
    stats: Array<{ value: string; label: string }>;
  };
  whoToday: {
    title: string;
    paragraphs: string[];
  };
  philanthropy: {
    title: string;
    text: string;
    image: { src: string; alt: string; width?: number; height?: number };
    imageCaption?: string;
  };
  pathLived: {
    title: string;
    text: string;
    image: { src: string; alt: string; width?: number; height?: number };
    imageCaption?: string;
  };
  philosophy: {
    title: string;
    principles: Array<{ title: string; description: string }>;
  };
  ecosystem: {
    /** Первая строка заголовка (вторая — titleLine2, напр. «DOM») */
    title: string;
    titleLine2?: string;
    description: string;
    items: string[];
    /** Не показывается, если есть gallery — портрет в полосе карточек */
    image?: { src: string; alt: string; width?: number; height?: number };
    cta?: { text: string; url: string };
    gallery?: Array<{ src: string; alt: string; imgClass?: string }>;
  };
  method: {
    title: string;
    houses: Array<{ title: string; description: string; subtitle?: string }>;
    footerParagraphs?: string[];
    cta?: { text: string; url: string };
  };
  books: {
    title: string;
    books: Array<{
      title: string;
      description: string;
      cover: string;
      url?: string;
      coverLayout?: 'default' | 'library';
    }>;
    intro?: string;
    cta?: { text: string; url: string };
  };
  app: {
    title: string;
    description: string;
    image: { src: string; alt: string; width?: number; height?: number };
    cta: { text: string; url: string };
    sublabel?: string;
  };
  stories: {
    title: string;
    stories: Array<{ name: string; text: string; photo?: string }>;
    intro?: string;
    cta?: { text: string; url: string };
  };
  finalCta: {
    title: string;
    description: string;
    cta: { text: string; url: string };
    secondaryCta?: { text: string; url: string };
  };
  /** Подписка (MethodSubscribe + виджет GetCourse; поля формы задаёт виджет) */
  subscribe: {
    title: string;
    subtitle: string;
    fields: Array<{ name: string; placeholder: string; type: string }>;
    buttonText: string;
    form: { disclaimer: string };
  };
}

/** Убирает eyebrow из макета: «Роль Анны Камаллаи Хефорс: …» перед заголовком блока */
function stripAboutRoleEyebrowLine(text: string): string {
  if (!text) return text;
  return text.replace(/^Роль\s+Анны\s+Камалла[яи]\s+Хефорс\s*:\s*/iu, '').trim();
}

function normalizeAboutPageData(data: AboutPageData): AboutPageData {
  return {
    ...data,
    hero: { ...data.hero, title: stripAboutRoleEyebrowLine(data.hero.title) },
    whoToday: { ...data.whoToday, title: stripAboutRoleEyebrowLine(data.whoToday.title) },
    philanthropy: {
      ...data.philanthropy,
      title: stripAboutRoleEyebrowLine(data.philanthropy.title),
    },
    pathLived: { ...data.pathLived, title: stripAboutRoleEyebrowLine(data.pathLived.title) },
    philosophy: {
      ...data.philosophy,
      title: stripAboutRoleEyebrowLine(data.philosophy.title),
      principles: data.philosophy.principles.map((p) => ({
        ...p,
        title: stripAboutRoleEyebrowLine(p.title),
      })),
    },
    ecosystem: {
      ...data.ecosystem,
      title: stripAboutRoleEyebrowLine(data.ecosystem.title),
      titleLine2: data.ecosystem.titleLine2
        ? stripAboutRoleEyebrowLine(data.ecosystem.titleLine2)
        : data.ecosystem.titleLine2,
    },
    method: {
      ...data.method,
      title: stripAboutRoleEyebrowLine(data.method.title),
      houses: data.method.houses.map((h) => ({
        ...h,
        title: stripAboutRoleEyebrowLine(h.title),
      })),
    },
    books: {
      ...data.books,
      title: stripAboutRoleEyebrowLine(data.books.title),
      books: data.books.books.map((b) => ({
        ...b,
        title: stripAboutRoleEyebrowLine(b.title),
      })),
    },
    app: {
      ...data.app,
      title: stripAboutRoleEyebrowLine(data.app.title),
      sublabel: data.app.sublabel
        ? stripAboutRoleEyebrowLine(data.app.sublabel)
        : undefined,
    },
    stories: { ...data.stories, title: stripAboutRoleEyebrowLine(data.stories.title) },
    finalCta: {
      ...data.finalCta,
      title: stripAboutRoleEyebrowLine(data.finalCta.title),
    },
    subscribe: {
      ...data.subscribe,
      title: stripAboutRoleEyebrowLine(data.subscribe.title),
    },
  };
}

const aboutPageDataRaw: AboutPageData = {
  seo: {
    title: 'Анна Камаллая Хефорс — Основатель метода DOM | Об авторе',
    description:
      'Исследователь системной природы жизни, автор бестселлеров, создатель метода DOM. 300 000+ слушателей, 20+ лет практики.',
    canonicalUrl: '/ru/about/',
  },
  personSchema: {
    name: 'Анна Камаллая Хефорс',
    jobTitle: 'Основатель метода DOM',
    description: 'Исследователь системной природы жизни и создатель метода DOM',
    imagePath: '/dom-assets/anna-portrait.png',
  },
  hero: {
    title: 'Анна Камаллая Хефорс',
    description:
      'Камаллая возвращает людям устойчивость в сложные периоды, когда рушится привычное и важно не потерять себя. Ее подход соединяет структуру и глубину, поэтому человек не уходит от реальной жизни, а собирает ее в целое, шаг за шагом. Для этого Камаллая создала метод DOM, в котором внешний Дом — это деньги, отношения и ментальное здоровье, а внутренний Дом — это душа, осознанность и мировоззрение.',
    primaryCta: { text: 'История пути', url: '/ru/about-life/' },
    secondaryCta: { text: 'Программы DOMа', url: '/ru/path/' },
    portrait: {
      src: '/dom-assets/anna-portrait.png',
      alt: 'Камаллая Хефорс',
      width: 800,
      height: 1080,
    },
    stats: [
      {
        value: '300 000+',
        label: 'слушателей по всему миру',
      },
      {
        value: '20+',
        label: 'лет глубокой практики, передачи знаний и личного пути',
      },
      {
        value: '6',
        label: 'книг бестселлеров',
      },
      {
        value: '15+',
        label: 'наград',
      },
    ],
  },
  whoToday: {
    title: 'Кто она сегодня',
    paragraphs: [
      'Камаллая Хефорс - автор и архитектор метода DOM. Практик, исследователь и женщина, которая соединяет системное мышление с глубокой человечностью, чтобы изменения происходили не только «в голове», а в реальной жизни: в семье, в решениях, в кошельке, в спокойствии.',
      'Она не продаёт вдохновение. Она строит систему, в которой изменения остаются с тобой навсегда.',
      'Камаллая ведёт через структуру и через сердце. Через то, что можно применить прямо сейчас: в разговоре, в конфликте, в выборе, в кризисе.',
    ],
  },
  philanthropy: {
    title: 'Филантропия, которая не про образ, а про жизнь',
    text:
      'Камаллая поддерживает медицинские и благотворительные программы, которые помогают детям с риском тяжелых заболеваний мозга. Это не отдельная часть «для репутации», а продолжение ее главного выбора, быть рядом там, где человеку страшно, и где нужна опора, простая и настоящая. Поэтому в DOM много внимания к тому, как держится психика, как сохраняется семья, и как человек возвращает себе взрослую устойчивость, потому что это не абстрактные идеи, а то, что напрямую влияет на жизнь.',
    image: {
      src: '/dom-assets/DOM расширенная версия 2 Анна Хефорс белый.jpg',
      alt: 'Камаллая Хефорс, филантропическая миссия и помощь детям',
      width: 1200,
      height: 800,
    },
    imageCaption: '«Помощь детям это продолжение того же смысла, возвращать опору и жизнь.»',
  },
  pathLived: {
    title: 'Путь, который прожит, а не выучен',
    text:
      'Для Камаллаи важно говорить честно: DOM не родился как теория из кабинета. Это путь, который она проживала через собственные кризисы и трансформации, и поэтому в ее работе нет оторванных советов и красивых лозунгов. Камаллая говорит о том, что она не автор, который просто чему-то научился и пересказал, и что все, что она дает людям, прошло через ее жизнь и стало проверкой на прочность. В этом много спокойной силы, потому что человек чувствует, что его не ведут в «идеальность», его ведут к реальности, где можно выстроить устойчивость и вернуть состояние, я дома.',
    image: {
      src: '/dom-assets/anna-portrait.png',
      alt: 'Камаллая Хефорс, личный путь и прожитый опыт метода DOM',
      width: 800,
      height: 1080,
    },
    imageCaption: '«DOM - это не просто знания. Это опыт, который я прожила через себя, и поэтому он работает.»',
  },
  philosophy: {
    title: 'Философия DOM',
    principles: [
      {
        title: 'DOM внутри',
        description:
          'Здесь ты осознаешь: «Это то, что я так долго искал. Наконец я Дома». Только внутренний дом делает внешний мир безопасным.',
      },
      {
        title: 'Взрослая позиция',
        description:
          'Жизнь становится понятной, когда видишь причины и последствия - а не живёшь в тревоге. Свобода начинается с ответственности.',
      },
      {
        title: 'Структура + глубина',
        description: 'Сначала - устойчивое поле и ясность. Потом - смыслы и сердце. Не наоборот.',
      },
      {
        title: 'Любовь как состояние',
        description: 'Не вспышка эмоций, а тихая, зрелая сила. Из неё уже не хочется воевать.',
      },
      {
        title: 'Без догмы',
        description: 'Нет «единственно правильных ответов». Есть пространство, где ты находишь своё.',
      },
    ],
  },
  ecosystem: {
    title: 'Основатель экосистемы',
    titleLine2: 'DOM',
    description:
      'Камаллая Хефорс создала DOM как целостную экосистему развития: от стабилизации внешней жизни до зрелой внутренней глубины. Это не разрозненные продукты, а единая архитектура, которая помогает человеку пройти путь последовательно и с опорой.',
    items: [],
    image: {
      src: '/dom-assets/anna-portrait.png',
      alt: 'Камаллая Хефорс — основатель экосистемы DOM',
      width: 800,
      height: 1080,
    },
    cta: { text: 'О Камаллае', url: '/ru/about-life/' },
    gallery: [
      {
        src: '/dom-assets/hero-reference.jpg',
        alt: 'Камаллая на выступлении',
        imgClass: 'object-[32%_35%]',
      },
      {
        src: '/dom-assets/anna-portrait.png',
        alt: 'Камаллая Хефорс',
        imgClass: 'object-[50%_24%]',
      },
      {
        src: '/dom-assets/dom-logo-home-gold-bg.jpg',
        alt: 'DOM экосистема',
        imgClass: 'object-center',
      },
      {
        src: '/dom-assets/DOM расширенная версия 2 Анна Хефорс белый.jpg',
        alt: 'Камаллая и DOM Method',
        imgClass: 'object-center',
      },
      {
        src: '/dom-assets/hero-reference.jpg',
        alt: 'Камаллая в работе',
        imgClass: 'object-[58%_32%]',
      },
    ],
  },
  method: {
    title: 'Метод DOM',
    houses: [
      {
        title: 'Внешний дом',
        subtitle: 'Деньги · Отношения · Ментальное здоровье',
        description:
          'Сначала стабилизируем психику и мозг - тогда тревоги уходят, а жизнь становится понятной.',
      },
      {
        title: 'Внутренний дом',
        subtitle: 'Душа · Осознанность · Мировоззрение',
        description: 'Путь размышления и зрелости - без отлётов, но с настоящей глубиной.',
      },
    ],
    footerParagraphs: [
      'DOM не заставляет выбирать между наукой и душой. Здесь они идут вместе - в гармонии.',
      'Что меняется: меньше шума внутри → больше ясности → легче договариваться → устойчивость в деньгах и отношениях → ощущение «я дома».',
    ],
  },
  books: {
    title: 'Книги автора',
    intro:
      'Книги Камаллаи Хефорс - это практические маршруты внешней и внутренней трансформации: от семьи и отношений до осознанности и зрелого мировоззрения.',
    books: [
      {
        title: 'Гармония в семье',
        description: 'Сила и любовь в семейных сценариях.',
        cover: '/dom-assets/Книга Гармония в семье.png',
      },
      {
        title: 'Расшифровка генома человечности',
        description: 'Внутренний дом, смыслы и путь зрелости.',
        cover: '/dom-assets/Расшифрвка генома человечности.png',
      },
      {
        title: 'Библиотека DOM',
        description: 'Полная коллекция книг и материалов автора.',
        cover: '/dom-assets/DOM расширенная версия 2 градиент.png',
        coverLayout: 'library',
      },
    ],
    cta: { text: 'Перейти на страницу книг автора', url: '/ru/books/' },
  },
  app: {
    sublabel: 'Приложение DOM',
    title: 'Мобильное приложение DOM',
    description:
      'В приложении собраны ключевые программы DOM, практики, материалы и маршруты развития, чтобы вы могли проходить путь в удобном ритме каждый день.\n\nЭто пространство, где метод Камаллаи доступен в кармане: iOS и Android, быстрый вход через QR и системная поддержка на каждом этапе.',
    image: {
      src: '/dom-assets/Screenshot 2026-02-20 at 12.02.00 AM.png',
      alt: 'Приложение DOM',
      width: 800,
      height: 1600,
    },
    cta: { text: 'Перейти на страницу приложения DOM', url: '/ru/app-dom/' },
  },
  stories: {
    title: 'Истории людей',
    intro:
      'Тысячи отзывов - от людей, которые были в похожем кризисе. Здесь ты увидишь: со мной не что-то «не так». Я просто в периоде - и его можно пройти.',
    stories: [],
    cta: { text: 'Посмотреть отзывы и истории', url: '/ru/reviews/' },
  },
  finalCta: {
    title:
      '«Человек должен почувствовать дом. Я в том месте. Это то, что я искал. Меня здесь понимают. Меня здесь принимают».',
    description:
      'DOM - пространство, где философия возвращает в жизнь: через ясность, структуру и любовь как тихую силу.',
    cta: { text: 'Перейти в пространство DOM', url: '/ru/path/' },
    secondaryCta: { text: 'Узнать её путь', url: '/ru/about-life/' },
  },
  subscribe: {
    title: 'Получать новости и обновления DOM',
    subtitle:
      'Подпишитесь, чтобы первыми узнавать о новых программах, материалах и событиях метода.',
    fields: [
      { name: 'email', placeholder: 'Ваш email', type: 'email' },
      { name: 'telegram', placeholder: 'Telegram (необязательно)', type: 'text' },
    ],
    buttonText: 'ПОДПИСАТЬСЯ',
    form: {
      disclaimer: 'Данные в безопасности. Ответим в течение 24 часов.',
    },
  },
};

export const aboutPageData: AboutPageData = normalizeAboutPageData(aboutPageDataRaw);
