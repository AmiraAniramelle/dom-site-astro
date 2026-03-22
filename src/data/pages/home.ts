/**
 * Данные главной страницы. Секции под ключами для передачи в компоненты.
 * Правило 3 (00-RULES): все тексты/картинки/ссылки главной — здесь.
 */
import { heroBlock } from '../hero';

export const intentSliderData = {
  eyebrow: 'Это для тебя',
  title: 'Для тех, кто хочет большего',
  subtitle: 'Выбери свое направление — и мы покажем твой путь в DOM.',
  selectBtnLabel: 'Выбрать свой путь →',
  selectBtnUrl: '/ru/path/',
  cards: [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
      topText: 'Я хочу',
      boldText: 'ЖИТЬ ИЗ\nСВОЕГО МЕСТА',
      url: '/ru/path/worldview/',
      phrase: 'Ты хочешь не просто успеха, а жизни, которая ощущается как твоя.',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      topText: 'Я хочу раскрыть',
      boldText: 'СВОЁ\nСЕРДЦЕ',
      url: '/ru/path/soul/',
      phrase: 'Ты чувствуешь, что внутри есть больше, и хочешь это раскрыть.',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      topText: 'Я хочу выстроить',
      boldText: 'ДЕНЬГИ\nИ СВОБОДУ',
      url: '/ru/path/money/',
      phrase: 'Ты строишь жизнь и хочешь, чтобы внешнее и внутреннее совпадали.',
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&q=80',
      topText: 'Я хочу глубже',
      boldText: 'В\nОТНОШЕНИЯ',
      url: '/ru/path/relations/',
      phrase: 'Ты готов идти глубже, чем большинство, и возвращаться к себе настоящему.',
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
      topText: 'Я хочу найти',
      boldText: 'СЕБЯ\nНАСТОЯЩЕГО',
      url: '/ru/path/awareness/',
      phrase: 'Ты уже многое попробовал и чувствуешь, что не хватает целостного пути.',
    },
  ],
};

export const manifestSectionData = {
  eyebrow: 'МАНИФЕСТ DOM',
  title: 'DOM — ЭТО КОГДА ТЫ\nНАКОНЕЦ\nВОЗВРАЩАЕШЬСЯ\nДОМОЙ.',
  highlightWord: 'ДОМОЙ.',
  text: 'Нас учат бежать вперёд — но почти никто не объясняет, как при этом остаться целым внутри. DOM — это пространство, где внешнее и внутреннее наконец совпадают.',
  authorSignature: 'Анна Камаллая Хефорс',
  image: {
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Символичный путь домой на рассвете',
  },
  logoCard: {
    src: '/images/shared/dom-logo-symbol-gold.png',
    alt: 'Логотип DOM, Systemic Method',
    label: 'Systemic Method',
  },
};

export const missionSectionData = {
  title: 'Миссия проекта DOM',
  paragraphs: [
    'Миссия DOM: помочь человеку восстановить внутреннюю опору и выстроить зрелую систему жизни в мире перемен.',
    'Метод соединяет то, что обычно разделено: рациональное мышление и глубину чувств, дисциплину и любовь, внешнюю реализацию и внутреннюю честность, структуру и живое присутствие.',
    'DOM формирует системное мышление, зрелость, устойчивость и уважение к себе и миру. Это путь, где человек учится жить в реальности, не теряя связи с собой.',
  ],
};

export const architectureSectionData = {
  title: 'АРХИТЕКТУРА МЕТОДА DOM',
  subtitle: 'Два дома. Шесть граней. Одна целостная жизнь.',
  description: 'Когда внутренний и внешний контуры человека синхронизированы, появляется устойчивость, ясность и ощущение своего места в жизни.',
  outerHouse: {
    title: 'Внешний Дом',
    label: 'Проявленная жизнь',
    description: 'Это то, как человек реализует себя в мире — в действиях, отношениях и результатах.',
    items: [
      { letter: 'D', name: 'Деньги', desc: 'Опора, реализация и способность создавать материальную свободу.' },
      { letter: 'O', name: 'Отношения', desc: 'Зрелые связи, уважение границ и настоящая близость.' },
      { letter: 'M', name: 'Ментальное здоровье', desc: 'Внутренняя устойчивость, ясность мышления и жизненная энергия.' },
    ],
  },
  innerHouse: {
    title: 'Внутренний Дом',
    label: 'Основа личности',
    description: 'Это пространство, из которого человек живёт, принимает решения и чувствует свою жизнь.',
    items: [
      { letter: 'D', name: 'Душа / Дух', desc: 'Источник смыслов, внутренней радости и глубокой связи с жизнью.' },
      { letter: 'O', name: 'Осознанность', desc: 'Способность честно видеть себя и присутствовать в каждом моменте жизни.' },
      { letter: 'M', name: 'Мировоззрение', desc: 'Картина мира, ценности и фундамент решений, которые формируют судьбу человека.' },
    ],
  },
  closingQuote: 'Когда внутренний дом становится устойчивым, внешняя жизнь начинает выстраиваться иначе.',
  closingText: 'И человек постепенно возвращается в свой настоящий Дом.',
  cta: { text: 'Перейти в раздел «О методе»', url: '/ru/method/' },
  ctaQuestion: 'Хотите глубже понять архитектуру метода DOM?',
  /** Звезда в центре: центр + 6 узлов (порядок как в source: int-o, int-d, int-m, ext-d, ext-m, ext-o) */
  star: {
    centerLabel: 'Любовь',
    nodes: [
      { dataNode: 'int-o', text: 'Осознанность' },
      { dataNode: 'int-d', text: 'Душа' },
      { dataNode: 'int-m', text: 'Мировоззрение' },
      { dataNode: 'ext-d', text: 'Деньги' },
      { dataNode: 'ext-m', textLines: ['Ментальное', 'здоровье'] },
      { dataNode: 'ext-o', text: 'Отношения' },
    ],
  },
};

export const authorSectionData = {
  eyebrow: 'Автор метода DOM',
  title: 'Анна Камаллая Хефорс',
  bio: [
    'Анна Камаллая Хефорс — исследователь системной природы жизни и создатель метода DOM.',
    'В основе её работы лежит идея о том, что жизнь человека разворачивается как система, где внутренние процессы формируют внешнюю реальность.',
    'Метод DOM появился не как теория, а как результат многолетнего личного поиска и практики. Анна исследовала, как внутренние состояния человека связаны с событиями его жизни, и постепенно выстроила систему, которая легла в основу метода.',
    'Сегодня DOM объединяет философию жизни, системное мышление и практическую работу с жизненными процессами человека.',
  ],
  quote: {
    text: '«Я не передаю людям то, что прочитала или изучила. Я делюсь тем, что сама прожила и проверила на собственной жизни.»',
    author: 'Анна Камаллая Хефорс',
  },
  badges: [
    { text: 'Автор метода DOM' },
    { text: 'Автор бестселлеров' },
    { text: '+ 80 000 учеников по всему миру' },
    { text: 'Международное сообщество единомышлеников' },
  ],
  image: { src: '', alt: 'Анна Камаллая Хефорс' },
  imageCaption: 'Анна Камаллая Хефорс',
  cta: { text: 'Подробнее об авторе', url: '/ru/about/' },
};

/** Фильтры и программы для секции «Программы DOM». Карусель и фильтрация — в JS компонента. */
export const programsSectionData = {
  eyebrow: 'Программы DOM',
  title: 'Выбери свой путь домой',
  subtitle: 'Выбери направление — и мы покажем программы именно для тебя.',
  filters: [
    { id: 'all', label: 'Все программы' },
    { id: 'money', label: 'Деньги' },
    { id: 'relations', label: 'Отношения' },
    { id: 'mind', label: 'Ментальное здоровье' },
    { id: 'soul', label: 'Душа' },
    { id: 'awareness', label: 'Осознанность' },
    { id: 'worldview', label: 'Мировоззрение' },
  ],
  programs: [
    { id: 'formula-money', title: 'Формула M+O+N+E+Y', category: 'Системная программа', format: 'Онлайн · Видео', image: 'https://images.unsplash.com/photo-1483354483454-4cd359948304?w=600&q=80', isFlagship: true, url: '/ru/products/formula-money/', directions: ['money'], desc: '5 элементов, которые перестраивают мышление и денежные привычки. Достаток как естественное следствие внутреннего порядка.', free: false },
    { id: 'business-mission', title: 'Бизнес Миссия', category: 'Системная программа', format: 'Онлайн · Группа', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', isFlagship: true, url: '/ru/products/business-mission/', directions: ['money'], desc: 'Для предпринимателей, которые хотят, чтобы система работала на цели, а не наоборот.', free: false },
    { id: 'seven-systems-abundance', title: '7 систем изобилия', category: 'Практическая встреча', format: 'Эфир', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80', isFlagship: false, url: '/ru/products/seven-systems-abundance/', directions: ['money'], desc: 'Настройте все уровни жизни для свободного финансового потока.', free: false },
    { id: 'family-unity', title: 'Семейное Единство', category: 'Программа', format: 'Онлайн', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', isFlagship: false, url: '/ru/products/family-unity/', directions: ['relations'], desc: 'Фундамент для здоровья будущего поколения. Практические шаги на основе нейробиологии и психологии.', free: true },
    { id: 'man-woman-relations', title: 'Мужчина и Женщина', category: 'Встреча + Нейротренажёр', format: 'Эфир', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80', isFlagship: false, url: '/ru/products/man-woman-relations/', directions: ['relations'], desc: 'Выстраивание глубокой связи в паре. Возвращение на своё место в системе отношений.', free: false },
    { id: 'neuro-meditations', title: 'Нейро медитации', category: 'Практика в приложении', format: 'Приложение · Аудио', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', isFlagship: false, url: '/ru/products/neuro-meditations/', directions: ['soul'], desc: 'Подборка медитаций для восстановления состояния, мягкой регуляции нервной системы и глубокой внутренней опоры.', free: true },
    { id: 'neuro-trainers', title: 'Нейротренажёры мозга', category: 'Инструмент души', format: 'Аудио', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', isFlagship: false, url: '/ru/products/neuro-trainers/', directions: ['soul'], desc: '5 аудиосессий, которые воздействуют на подсознание с помощью звуковой терапии и нейрокодов.', free: false },
    { id: 'true-self', title: 'Обрети Себя Настоящего', category: 'Терапевтическая работа', format: 'Онлайн', image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&q=80', isFlagship: false, url: '/ru/products/true-self/', directions: ['mind'], desc: 'Финальная сборка всех частей себя в одну Цельность. Ты больше никогда не потеряешь себя.', free: false },
    { id: 'psychogenotypes', title: 'Психогенотипы', category: 'Системный проект', format: 'Онлайн', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80', isFlagship: true, url: '/ru/products/psychogenotypes/', directions: ['mind'], desc: 'Глубинное понимание структуры своей личности и врождённых паттернов поведения.', free: false },
    { id: 'books-showcase', title: 'Книги Анны Хефорс', category: 'Карточка: Книги', format: 'Раздел «Книги»', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=80', isFlagship: false, url: '/ru/books/', directions: ['relations', 'awareness'], desc: 'Три авторские книги Анны Хефорс. Фундаментальная база метода в формате для самостоятельного изучения.', ctaText: 'Смотреть книги', free: false },
    { id: 'app-dom-showcase', title: 'Приложение DOM', category: 'Карточка: Приложение DOM', format: 'iOS · Android', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80', isFlagship: false, url: '/ru/app-dom/', directions: ['soul'], desc: 'Ежедневные практики, медитации и инструменты метода прямо в телефоне. iOS и Android.', ctaText: 'Скачать приложение', free: false },
  ],
  cta: { text: 'Открыть всю карту пути', url: '/ru/path/' },
};

export const reviewsSectionData = {
  eyebrow: 'Отзывы',
  title: 'Истории трансформации через DOM',
  reviews: [
    {
      id: 'story-1',
      name: 'Екатерина Лебедева',
      role: 'Предприниматель',
      city: 'Москва',
      text: 'Я перестала жить в тревоге о деньгах и впервые выстроила спокойный, устойчивый ритм жизни.',
      fullText:
        'До DOM у меня было постоянное внутреннее напряжение: я много работала, но ощущала, что всё держится на усилии.\n\nВ процессе я увидела, как мои внутренние состояния влияли на решения в бизнесе и отношениях с командой. После нескольких месяцев практики появилось ощущение опоры, ясности и порядка.\n\nСейчас я принимаю решения без паники, выстроила стабильную финансовую систему и перестала жить в режиме «пожара». Главное изменение — вернулось чувство уважения к себе и своей жизни.',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'story-2',
      name: 'Андрей Смирнов',
      role: 'Руководитель проектов',
      city: 'Санкт-Петербург',
      text: 'DOM помог мне выйти из выгорания и научиться строить отношения без постоянного внутреннего конфликта.',
      fullText:
        'Я пришёл в DOM в состоянии усталости и раздражения: работа, семья, ответственность, а внутри — пустота.\n\nПрактики метода дали понятную структуру: как видеть свои реакции, как возвращаться в центр и как не разрушать отношения импульсивными действиями. Это было не про «мотивацию», а про системную пересборку.\n\nЧерез время я заметил, что дома стало больше спокойствия, в работе — больше фокуса, а в голове — меньше шума. Для меня DOM стал точкой перехода в зрелую позицию.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'story-3',
      name: 'Марина Ковалёва',
      role: 'Психолог',
      city: 'Казань',
      text: 'Я снова почувствовала вкус к жизни и перестала откладывать себя «на потом».',
      fullText:
        'В какой-то момент я поняла, что помогаю другим, но сама живу без внутренней радости и энергии.\n\nВ DOM меня зацепила глубина и честность подхода: не убегать от реальности, а выстраивать её изнутри. По шагам я восстановила связь с собой, пересобрала приоритеты и вернула ощущение живого интереса к жизни.\n\nСейчас у меня больше внутренней тишины, больше любви к себе и намного больше сил для работы и близких отношений.',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    },
  ],
  cta: { text: 'Читать все истории', url: '/ru/reviews/' },
  flowTitle: 'Тысячи участников проходят трансформацию с DOM',
  /** Горизонтальная лента под кнопкой (компактные карточки). Не смешивать с основной сеткой из трёх историй. */
  flowCards: [
    {
      storyId: 'story-flow-olga-romanova',
      name: 'Ольга Романова',
      city: 'Екатеринбург',
      result: 'Вернула внутреннюю опору и спокойствие',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    },
    {
      storyId: 'story-flow-dmitry-volkov',
      name: 'Дмитрий Волков',
      city: 'Новосибирск',
      result: 'Вышел из выгорания и собрал фокус в работе',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    },
    {
      storyId: 'story-flow-natalya-orlova',
      name: 'Наталья Орлова',
      city: 'Сочи',
      result: 'Наладила отношения с собой и близкими',
      photo: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80',
    },
    {
      storyId: 'story-flow-igor-sorokin',
      name: 'Игорь Сорокин',
      city: 'Казань',
      result: 'Перестроил финансовые сценарии',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
    },
    {
      storyId: 'story-flow-elena-gromova',
      name: 'Елена Громова',
      city: 'Москва',
      result: 'Снизила тревожность и обрела ясность',
      photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
    },
    {
      storyId: 'story-flow-maksim-belyaev',
      name: 'Максим Беляев',
      city: 'Самара',
      result: 'Укрепил ментальную устойчивость',
      photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    },
  ],
};

export const appSectionData = {
  eyebrow: 'Приложение DOM · iOS / Android',
  title: 'DOM всегда с тобой',
  description: 'Аудиосессии, нейроинструменты и практики, которые помогают возвращаться в состояние любви и мягко выстраивать внутренний Дом.',
  featureCards: [
    { title: '6-фазная медитация', icon: '◉', tone: 'violet' },
    { title: 'Трекер состояния', icon: '◌', tone: 'indigo' },
    { title: 'Сон и восстановление', icon: '☾', tone: 'plum' },
    { title: 'Дыхательные практики', icon: '◍', tone: 'night' },
    { title: 'Фокус на день', icon: '✦', tone: 'violet' },
    { title: 'Аффирмации', icon: '∞', tone: 'indigo' },
    { title: 'Музыка внимания', icon: '♪', tone: 'plum' },
    { title: 'Антистресс', icon: '◔', tone: 'night' },
    { title: 'Цели и намерения', icon: '◎', tone: 'violet' },
    { title: 'Ритм благодарности', icon: '♡', tone: 'indigo' },
    { title: 'Энергия тела', icon: '⬢', tone: 'plum' },
    { title: 'Путь DOM', icon: '⌘', tone: 'night' },
  ],
  phoneMockup: { src: '/images/app/dom-app-phone-new.png', alt: 'Интерфейс приложения DOM' },
  primaryCta: { text: 'Узнать подробнее', url: '/ru/app-dom/' },
  secondaryCta: { text: 'Перейти на сайт приложения', url: 'https://it-brain.app/ru/' },
  stores: [
    { platform: 'iOS', label: 'iOS', url: 'https://apps.apple.com/kw/app/it-brain-meditation-balance/id6478028341', qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fapps.apple.com%2Fkw%2Fapp%2Fit-brain-meditation-balance%2Fid6478028341', storeTitle: 'Скачать в App Store' },
    { platform: 'Android', label: 'Android', url: 'https://play.google.com/store/apps/details?id=pro.appfyl.dmtmeditation&hl=en', qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dpro.appfyl.dmtmeditation%26hl%3Den', storeTitle: 'Скачать в Google Play' },
  ],
};

export const knowledgeBaseSectionData = {
  title: 'База знаний',
  ctaAll: { text: 'Смотреть все статьи →', url: '/ru/blog/' },
  categories: [
    {
      chipLabel: 'Системное мышление',
      image: { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80', alt: 'Системное мышление' },
      title: 'Порядки системы и взрослая позиция',
      description: 'Как вернуть структуру в решения и выйти из повторяющихся сценариев.',
      articles: [{ title: 'Читать', url: '/ru/blog/system-thinking/' }],
    },
    {
      chipLabel: 'Отношения',
      image: { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80', alt: 'Отношения' },
      title: 'Роли в паре и семейной системе',
      description: 'Почему конфликты повторяются и как перейти к зрелому диалогу.',
      articles: [{ title: 'Читать', url: '/ru/blog/male-female/' }],
    },
    {
      chipLabel: 'Деньги и бизнес',
      image: { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80', alt: 'Деньги и бизнес' },
      title: 'Финансовые сценарии и рост',
      description: 'Как перейти из хаоса в прогнозируемый финансовый результат.',
      articles: [{ title: 'Читать', url: '/ru/blog/money-business/' }],
    },
  ],
};

export const faqSectionData = {
  title: 'Часто задаваемые вопросы',
  kicker: 'FAQ',
  asideCopy: 'Если у вас остались вопросы по методу DOM, форматам программ или точке входа, свяжитесь с нашей командой поддержки.',
  contactLink: { text: 'Связаться с нами →', url: 'https://t.me/itbrain_support' },
  items: [
    { question: 'Для кого подходит метод DOM?', answer: 'DOM подходит для людей, которые чувствуют разрыв между внешними достижениями и внутренним состоянием. Для тех, кто хочет не просто решить одну проблему, а выстроить целостную систему жизни.' },
    { question: 'Чем DOM отличается от психотерапии или коучинга?', answer: 'Терапия работает с прошлым, коучинг — с целями. DOM соединяет внутренний и внешний контур жизни: убеждения, отношения, решения, действия и реализацию.' },
    { question: 'С чего начать, если я ничего не знаю о методе?', answer: 'Начните со страницы «О методе», затем выберите интересующее направление и программу. Для первого шага также доступны бесплатные материалы.' },
    { question: 'Сколько времени нужно уделять методу?', answer: 'Для регулярной практики обычно достаточно 20–30 минут в день. При прохождении программ глубина и ритм зависят от выбранного формата.' },
    { question: 'Как устроено приложение DOM и сколько оно стоит?', answer: 'Приложение DOM работает как частичный инструмент внутреннего Дома: практики, аудиосессии и медитативные материалы. Базовые функции доступны бесплатно. В приложении есть подписка и платные трансформационные программы.' },
    { question: 'Как записаться на программу?', answer: 'Оставьте заявку в форме ниже: имя, email и Telegram. Мы свяжемся с вами и поможем выбрать подходящий формат.' },
  ],
};

export const finalCtaSectionData = {
  titleLine1: 'Начни путь',
  titleLine2: 'к себе сегодня.',
  subtitle: 'Трансформация начинается с одного решения. Оставь заявку — и мы подберём твою точку входа в систему DOM.',
  image: { src: '/images/about/anna-portrait.png', alt: 'Анна Камаллая Хефорс' },
  imageCaption: { name: 'Анна Камаллая Хефорс', role: 'Основатель метода DOM' },
  form: {
    fields: [
      { name: 'name', placeholder: 'Имя', type: 'text' },
      { name: 'email', placeholder: 'Электронная почта', type: 'email' },
      { name: 'telegram', placeholder: 'Telegram', type: 'text' },
    ],
    submitText: 'Отправить заявку',
    disclaimer: 'Данные в безопасности. Ответим в течение 24 часов.',
    endpoint: undefined,
  },
};

export const homePageData = {
  hero: heroBlock,
  intent: intentSliderData,
  manifest: manifestSectionData,
  mission: missionSectionData,
  architecture: architectureSectionData,
  author: authorSectionData,
  programs: programsSectionData,
  reviews: reviewsSectionData,
  app: appSectionData,
  knowledgeBase: knowledgeBaseSectionData,
  faq: faqSectionData,
  finalCta: finalCtaSectionData,
};
