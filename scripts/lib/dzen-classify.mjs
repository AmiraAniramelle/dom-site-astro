/**
 * Классификация статей под фильтры /ru/blog/ (см. src/data/pages/blog.ts и content.config).
 * Только значения из фиксированных списков — иначе селекты на сайте не подхватят материал.
 */

/** id категорий = value в <select data-blog-filter="category"> */
export const BLOG_CATEGORY_IDS = [
  'science',
  'system-thinking',
  'spiritual-development',
  'life-meanings',
  'parents',
  'children',
  'male-female',
  'money-business',
  'anxiety-depression',
];

/** Точные строки тегов из blogPageData.filters.tags */
export const BLOG_TAGS = [
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
];

const DEFAULT_CATEGORY = 'system-thinking';
const DEFAULT_TAGS = ['Осознание', 'Внутренняя опора'];

/**
 * [categoryId, patterns[]] — регистронезависимо, подстрока в title + snippet
 */
const CATEGORY_RULES = [
  [
    'anxiety-depression',
    [
      'тревог',
      'депресс',
      'паник',
      'апати',
      'бессонниц',
      'подавлен',
      'тоска',
      'безнадежн',
    ],
  ],
  [
    'science',
    [
      'энерги',
      'усталост',
      'выгоран',
      'телом',
      'телесн',
      'здоров',
      'сон ',
      'нейро',
      'мозг',
      'подсознан',
      'психосомат',
      'витальн',
      'ресурс тел',
    ],
  ],
  ['money-business', ['деньг', 'доход', 'бизнес', 'финанс', 'карьер', 'заработ', 'богатств']],
  [
    'male-female',
    [
      'мужчин',
      'женщин',
      'муж ',
      ' жена',
      'брак',
      'партнёр',
      'партнер',
      'любовн',
      'интимн',
      'боготвор',
    ],
  ],
  ['children', ['ребёнок', 'ребенок', 'детей', ' дети', 'сын', 'дочь', 'воспитан', 'школьник']],
  [
    'parents',
    [
      'родител',
      'мама ',
      'мамы ',
      'папа ',
      'папы ',
      'отец ',
      'мать ',
      'детстве о',
      'родительск',
    ],
  ],
  [
    'life-meanings',
    ['обществ', 'социум', 'окружающ', 'коллектив', 'чужое мнение', 'одобрен', 'смысл жизн'],
  ],
  [
    'spiritual-development',
    [
      'самореал',
      'реализац',
      'духовн',
      'призван',
      'потенциал',
      'миссия',
      'свободно жить',
      'личностн рост',
    ],
  ],
  [
    'system-thinking',
    [
      'системн',
      'порядк',
      'система ',
      'причинно',
      'структур',
      'закономерн',
      'сценари',
      'роль в ',
      'наследствен',
      'родов',
    ],
  ],
];

/**
 * [точное имя тега, patterns[]]
 */
const TAG_RULES = [
  ['Тревога', ['тревог', 'беспокойств', 'паник']],
  ['Страх', ['страх', 'боязн', 'опасен']],
  ['Депрессивное состояние', ['депресс', 'апати', 'подавлен', 'тоска']],
  ['Выгорание', ['выгоран', 'истощен', 'нет сил']],
  ['Энергия', ['энерги', 'витальн', 'бодрост']],
  ['Работа с телом', ['телом', 'телесн', 'тело ', 'сомат']],
  ['Осознание', ['осознан', 'подсознан', 'осознать', 'пониман себ']],
  ['Границы', ['границ', 'контрол', 'отпустить контроль', 'навязан']],
  ['Позиция взрослого', ['взросл позиц', 'зрелост', 'внутренн взросл']],
  ['Ответственность', ['ответственн', 'ответ за ']],
  ['Порядки системы', ['порядк', 'иерарх']],
  ['Роль', ['роль ', 'роли ', 'свою роль']],
  ['Цель', ['цель', 'цели ', 'к цели']],
  ['Самореализация', ['самореал', 'реализац']],
  ['Самоценность', ['самоценн', 'недостоин', 'люблю себ']],
  ['Внутренняя опора', ['внутренн опор', 'устойчив', 'стабильн внутр']],
  ['Принятие', ['принят', 'принять']],
  ['Непринятие', ['непринят', 'отвержен', 'отверг']],
  ['Вина', ['вина ', 'виноват', 'виню']],
  ['Обида', ['обид', 'обиж']],
  ['Конфликт', ['конфликт', 'спор', 'разноглас']],
  ['Кризис', ['кризис', 'переломн']],
  ['Зависимость', ['зависим', 'созависим', 'алкогол', 'кодепенд']],
  ['Развод', ['развод', 'расставан', 'бывш муж', 'бывш жен']],
  ['Лидерство', ['лидер', 'лидерств', 'управлен команд']],
  ['Финансовый рост', ['деньг', 'доход', 'финанс', 'заработ']],
  ['Масштабирование', ['масштаб', 'бизнес рост']],
];

// Убрать дубликат правила для Лидерство — merge patterns
function normalizeTagRules() {
  const map = new Map();
  for (const [tag, pats] of TAG_RULES) {
    if (!BLOG_TAGS.includes(tag)) continue;
    if (!map.has(tag)) map.set(tag, []);
    map.get(tag).push(...pats);
  }
  return [...map.entries()].map(([tag, pats]) => [tag, [...new Set(pats)]]);
}

const NORMALIZED_TAG_RULES = normalizeTagRules();

function norm(s) {
  return `${s}`.toLowerCase().replace(/\s+/g, ' ').trim();
}

function scorePatterns(text, patterns) {
  if (!patterns.length) return 0;
  let s = 0;
  for (const p of patterns) {
    if (text.includes(p.toLowerCase())) s += 1;
  }
  return s;
}

/**
 * @returns {{ category: string, tags: string[], contentType: 'Статья', classifyNote?: string }}
 */
export function classifyBlogMeta(title, snippet = '') {
  const text = norm(`${title} ${snippet}`);

  let bestCat = DEFAULT_CATEGORY;
  let bestCatScore = 0;
  for (const [id, patterns] of CATEGORY_RULES) {
    const sc = scorePatterns(text, patterns);
    if (sc > bestCatScore) {
      bestCatScore = sc;
      bestCat = id;
    }
  }

  const tagScores = [];
  for (const [tag, patterns] of NORMALIZED_TAG_RULES) {
    const sc = scorePatterns(text, patterns);
    if (sc > 0) tagScores.push({ tag, sc });
  }
  tagScores.sort((a, b) => b.sc - a.sc);

  let tags = tagScores.slice(0, 3).map((x) => x.tag);
  if (tags.length === 0) tags = [...DEFAULT_TAGS];
  else if (tags.length === 1) tags = [tags[0], DEFAULT_TAGS[1]];

  const uniq = [];
  const seen = new Set();
  for (const t of tags) {
    if (seen.has(t)) continue;
    seen.add(t);
    uniq.push(t);
    if (uniq.length >= 3) break;
  }
  tags = uniq;

  const note =
    bestCatScore === 0
      ? 'category: heuristic default (no keyword match)'
      : undefined;

  return {
    category: bestCat,
    tags,
    contentType: 'Статья',
    ...(note ? { classifyNote: note } : {}),
  };
}
