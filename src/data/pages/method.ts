export type MethodQuickCard = {
  title: string;
  items: Array<{ letter: string; name: string }>;
};

export type MethodHouse = {
  title: string;
  subtitle: string;
  triangleDirection: 'up' | 'down';
  items: Array<{ letter: string; name: string; desc: string }>;
};

export interface MethodPageData {
  seo: {
    title: string;
    description: string;
  };
  star: {
    eyebrow: string;
    title: string;
    subtitle: string;
    starCanvas: boolean;
    quickCards: MethodQuickCard[];
  };
  houses: {
    houses: MethodHouse[];
    systemLogic: { title: string; paragraphs: string[] };
    cta: { text: string; url: string };
  };
  subscribe: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      disclaimer: string;
    };
  };
}

export const methodPageData: MethodPageData = {
  seo: {
    title: 'О методе | DOM',
    description: 'Архитектура метода DOM: внешние и внутренние контуры, системная логика и путь трансформации.',
  },
  star: {
    eyebrow: 'ИНТЕРАКТИВНАЯ МОДЕЛЬ',
    title: 'Архитектура Метода',
    subtitle:
      'Наведите курсор на звезду: модель реагирует на движение, показывая единую систему Внешнего и Внутреннего DOM.',
    starCanvas: true,
    quickCards: [
      {
        title: 'Внешний DOM',
        items: [
          { letter: 'D', name: 'Деньги' },
          { letter: 'O', name: 'Отношения' },
          { letter: 'M', name: 'Ментальное здоровье' },
        ],
      },
      {
        title: 'Внутренний DOM',
        items: [
          { letter: 'D', name: 'Душа' },
          { letter: 'O', name: 'Осознанность' },
          { letter: 'M', name: 'Мировоззрение' },
        ],
      },
      {
        title: 'Любовь',
        items: [{ letter: '', name: 'Центр, который объединяет все направления и удерживает систему целостной.' }],
      },
    ],
  },
  houses: {
    houses: [
      {
        title: 'Внешний DOM',
        subtitle: 'Проявленная жизнь',
        triangleDirection: 'down',
        items: [
          { letter: 'D', name: 'Деньги', desc: 'материальная опора и проявленность.' },
          { letter: 'O', name: 'Отношения', desc: 'архитектура связей и партнерства.' },
          { letter: 'M', name: 'Ментальное здоровье', desc: 'психическая устойчивость и опора.' },
        ],
      },
      {
        title: 'Внутренний DOM',
        subtitle: 'Основа личности',
        triangleDirection: 'up',
        items: [
          { letter: 'D', name: 'Душа / Дух', desc: 'источник смыслов и подлинности.' },
          { letter: 'O', name: 'Осознанность', desc: 'честный взгляд на себя и реальность.' },
          { letter: 'M', name: 'Мировоззрение', desc: 'ценности и картина мира.' },
        ],
      },
    ],
    systemLogic: {
      title: 'Системная логика',
      paragraphs: [
        'DOM соединяет внешний и внутренний контуры жизни в единую систему. Когда эти два треугольника сбалансированы, решения становятся точными, эмоции устойчивыми, а действия зрелыми и результативными.',
      ],
    },
    cta: {
      text: 'Перейти к карте пути DOM',
      url: '/ru/path/',
    },
  },
  subscribe: {
    eyebrow: 'ПОДПИСКА DOM',
    title: 'Получать новости и обновления DOM',
    subtitle:
      'Подпишитесь, чтобы первыми узнавать о новых программах, материалах и событиях метода.',
    form: {
      disclaimer: 'Данные в безопасности. Ответим в течение 24 часов.',
    },
  },
};
