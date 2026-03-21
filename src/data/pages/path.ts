export interface PathPageData {
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  externalHouse: {
    title: string;
    subtitle: string;
    intro: string;
    items: Array<{
      letter: string;
      name: string;
      description: string;
      url: string;
      hasBridge?: boolean;
      buttonText: string;
    }>;
  };
  mirror: {
    title: string;
    subtitle: string;
  };
  internalHouse: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      letter: string;
      name: string;
      description: string;
      url: string;
      hasBridge?: boolean;
      buttonText: string;
    }>;
  };
  enroll: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    formDisclaimer: string;
  };
}

export const pathPageData: PathPageData = {
  seo: {
    title: 'Карта Пути DOM — 6 направлений трансформации | DOM',
    description:
      'Деньги, Отношения, Ментальное здоровье, Душа, Осознанность, Мировоззрение. Выберите своё направление в системе DOM.',
    canonicalUrl: '/ru/path/',
  },
  hero: {
    title: 'Карта Пути DOM',
    subtitle:
      'Метод DOM строится в двух измерениях. Сначала человек выстраивает устойчивость во внешнем мире. Только затем открывается возможность безопасного погружения во внутреннюю работу.',
  },
  externalHouse: {
    title: 'Внешний DOM',
    subtitle: 'УРОВЕНЬ 1',
    intro:
      'Фундамент зрелости. Деньги. Отношения. Ментальное здоровье. Без порядка здесь невозможно построить устойчивость внутри.',
    items: [
      {
        letter: 'D',
        name: 'Деньги',
        description: 'Финансовая зрелость, масштабирование дохода и аутентичная реализация.',
        url: '/ru/path/money/',
        buttonText: 'Войти',
      },
      {
        letter: 'O',
        name: 'Отношения',
        description: 'Архитектура семьи, личные границы и экологичное взаимодействие с миром.',
        url: '/ru/path/relations/',
        hasBridge: true,
        buttonText: 'Войти',
      },
      {
        letter: 'M',
        name: 'Ментальное здоровье',
        description: 'Психическая устойчивость, настройка нейрофизиологии и внутренняя стабильность.',
        url: '/ru/path/mental/',
        buttonText: 'Войти',
      },
    ],
  },
  mirror: {
    title: 'Любовь',
    subtitle: 'Объединяющая сила двух домов',
  },
  internalHouse: {
    eyebrow: 'УРОВЕНЬ 2',
    title: 'Внутренний DOM',
    subtitle:
      'Когда внешний фундамент выстроен, открывается глубина. Это работа с душой, тотальной осознанностью и пересборкой мировоззрения.',
    items: [
      {
        letter: 'D',
        name: 'Душа',
        description:
          'Источник внутренней радости, Нейро Медитации и Нейротренажёры мозга. Интеграция духовного опыта.',
        url: '/ru/path/soul/',
        buttonText: 'Подробнее',
      },
      {
        letter: 'O',
        name: 'Осознанность',
        description: 'Честный взгляд и тотальное присутствие. Эволюция через Золотой Геном.',
        url: '/ru/path/awareness/',
        hasBridge: true,
        buttonText: 'Подробнее',
      },
      {
        letter: 'M',
        name: 'Мировоззрение',
        description: 'Фундаментальные законы и архитектура смыслов Мироздания Рафаэля.',
        url: '/ru/path/worldview/',
        buttonText: 'Подробнее',
      },
    ],
  },
  enroll: {
    eyebrow: 'Следующий шаг',
    titleLine1: 'Занять место',
    titleLine2: 'в программе',
    description:
      'Трансформация начинается с решения. Оставьте заявку, и мы свяжемся с вами в течение 24 часов, чтобы обсудить ваш путь в системе DOM.',
    formDisclaimer: 'Данные в безопасности. Ответим в течение 24 часов.',
  },
};
