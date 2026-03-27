# ТЗ: Бизнес Миссия — единый масштаб + полностью светлая страница

> Прочитай DOM-Design-System.md ПЕРЕД началом работы.
> **НЕ ТРОГАЙ:** Navbar, Footer, global.css, BaseLayout, WelcomePopup.
> **НЕ ТРОГАЙ** стили других продуктов — все правки ТОЛЬКО для slug `business-mission`.

---

## 0. Перед началом

```bash
git add -A && git commit -m "checkpoint before bm-light-theme-and-scale"
```

---

## ЧАСТЬ 1: МАСШТАБ — привести к единому с остальным сайтом

### Проблема

Страница Бизнес Миссия визуально отличается по масштабу от остальных страниц (главная, другие продукты). Элементы выглядят крупнее или сплющеннее.

### Правило

**Открой главную страницу `/ru/` в соседней вкладке. Переключайся между ней и `/ru/products/business-mission/`. Масштаб, размеры шрифтов, ширина контента, отступы — должны ощущаться ОДИНАКОВО.**

### Чеклист масштаба — проверить КАЖДЫЙ блок

Пройди по КАЖДОМУ блоку страницы Бизнес Миссия и проверь:

| Правило | Значение | Где проверить |
|---------|----------|---------------|
| Контейнер | `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8` | Каждый блок |
| H1 | `font-messiri text-5xl md:text-7xl` | BusinessMissionHero |
| H2 | `font-messiri text-4xl md:text-5xl` | Все секции ниже Hero |
| H3 | `font-messiri text-3xl md:text-4xl` | Подзаголовки внутри секций |
| H4 | `font-messiri text-2xl` | Элементы внутри секций |
| Текст | `font-montserrat text-base md:text-lg` | Везде |
| Eyebrow | `font-montserrat text-[11px] uppercase tracking-[0.12em]` | Надписи над заголовками |
| pt от навбара | `pt-20` (десктоп), `pt-8` (мобильный) | Первый блок страницы |
| Между секциями | `mb-16` или `mb-24` | Между блоками |
| Последний блок → Footer | `pb-24` | ProductEnroll → Footer |

**Если какой-то блок использует другие размеры — ИСПРАВИТЬ на стандартные из таблицы.**

### Типичные ошибки масштаба (проверить и исправить):

1. **BusinessMissionHero:** если `pt-2 pb-4` → заменить на `pt-6 pb-8 md:pt-10 md:pb-12` (внутри карточки)
2. **Любой заголовок H2 больше text-5xl** → привести к `text-4xl md:text-5xl`
3. **Любой заголовок H1 больше text-7xl** → привести к `text-5xl md:text-7xl`
4. **Контейнер шире max-w-5xl** → привести к `max-w-5xl`
5. **Текст крупнее text-lg** (кроме заголовков и цены) → привести к `text-base md:text-lg`

---

## ЧАСТЬ 2: УБРАТЬ ВСЕ ТЁМНЫЕ ЭЛЕМЕНТЫ

### Принцип

Страница Бизнес Миссия = полностью светлая и нежная. **Ни одного тёмного блока, ни одного чёрного/графитового фона.** Всё в тёплых бежево-золотых тонах.

Это НЕ касается других продуктов — только `business-mission`.

### Как реализовать

Для каждого компонента, который используется на странице Бизнес Миссия — добавить prop `theme` или условие по slug. Тёмные стили остальных продуктов НЕ ТРОГАТЬ.

---

### Блок 1: BusinessMissionHero

**Статус:** уже светлый (тёплый градиент). Проверить:
- [ ] Нет `bg-black`, `bg-dom-graphite`, `from-black` нигде
- [ ] Hover на видео: НЕ `bg-black/15`, максимум `bg-dom-graphite/8` или убрать
- [ ] Play кнопка: `bg-white/85` с `text-dom-gold-dark`, НЕ `bg-dom-gold` с `text-white`

---

### Блок 2: ProductMission

**Сейчас:** левая карточка «Миссия проекта» на тёмном графитовом фоне (`background: linear-gradient(180deg, #38332d, #2f2923)`).

**Для Бизнес Миссии заменить на:**

```
Левая карточка:
  background: linear-gradient(145deg, rgba(255,252,244,0.98), rgba(246,233,203,0.92))
  border: 1px solid rgba(217,179,114,0.22)
  rounded-[2rem]
  
  H3: text-dom-graphite (НЕ text-dom-gold)
  Текст: text-dom-graphite/80 (НЕ text-dom-beige)
```

**Реализация — prop `theme` в ProductMission.astro:**

```astro
---
const { theme = 'default' } = Astro.props
const isLight = theme === 'light'
---

<!-- Левая карточка -->
<div class={isLight 
  ? 'p-10 md:p-12 rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] border border-dom-gold/22'
  : 'p-10 md:p-12 rounded-[2rem] relative overflow-hidden'
}
style={isLight ? '' : 'background: linear-gradient(180deg, #38332d, #2f2923);'}>

  <h3 class={`font-messiri text-3xl md:text-4xl mb-6 ${isLight ? 'text-dom-graphite' : 'text-dom-gold'}`}>
  
  <p class={`font-montserrat text-base md:text-lg leading-relaxed ${isLight ? 'text-dom-graphite/80' : 'text-dom-beige/82'}`}>
```

В `[slug].astro`:
```astro
<ProductMission 
  {...missionProps} 
  theme={slug === 'business-mission' ? 'light' : 'default'} 
/>
```

---

### Блок 3: ProductForWhom

**Сейчас:** карточки с тёплым градиентом — уже светлые. Проверить:
- [ ] Нет тёмного фона на обёртке секции
- [ ] Заголовок H2: `text-dom-graphite` (не gold, не white)
- [ ] Карточки: тёплый светлый градиент с `border-dom-gold/22`

**Если всё светлое — не трогать.**

---

### Блок 4: BusinessMissionPainPoints (новый)

**Статус:** создаётся по отдельному ТЗ. Уже светлый по дизайну.

**Единственный тёмный элемент — плашка-вывод внизу** (`background: linear-gradient(180deg, #38332d, #2f2923)`).

**Заменить на светлый вариант:**

```html
<div class="mx-4 mb-6 md:mx-6 md:mb-8 mt-2 md:mt-4
            rounded-2xl p-8 md:p-10
            bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))]
            border border-dom-gold/25
            flex items-center justify-center gap-8 md:gap-10">
  
  <!-- Левая часть -->
  <p class="font-montserrat text-base md:text-lg text-dom-graphite/50 
            text-right flex-1 leading-relaxed">
    Это не проблема<br>мотивации.
  </p>
  
  <!-- Разделитель -->
  <div class="w-px h-12 bg-dom-gold/30 flex-shrink-0"></div>
  
  <!-- Правая часть — акцент -->
  <p class="font-messiri text-2xl md:text-3xl text-dom-gold-dark 
            text-left flex-1 leading-tight">
    Это системная<br>ошибка.
  </p>

</div>
```

**Изменения:**
- Фон: графитовый → тёплый бежевый градиент + бордер
- «Не проблема мотивации»: `text-dom-beige/50` → `text-dom-graphite/50`
- «Системная ошибка»: `text-dom-gold` → `text-dom-gold-dark` (лучше читается на светлом)

---

### Блок 5: ProductResults

**Сейчас:** обёртка с тёплым градиентом (светлая). Проверить:
- [ ] Фон: `bg-[linear-gradient(145deg,...)]` — тёплый светлый
- [ ] Timeline точки и линии: `border-dom-gold/30`, `bg-dom-beige` — OK
- [ ] Нет тёмных элементов

**Если всё светлое — не трогать.**

---

### Блок 6: ProductReviews

**Сейчас:** карточки на белом фоне. Проверить:
- [ ] Нет тёмного фона секции
- [ ] Карточки: `bg-white` с `border-dom-gold/25`

**Если всё светлое — не трогать.**

---

### Блок 7: ProductFAQ

**Сейчас:** `<details>` на белом фоне. Проверить:
- [ ] Нет тёмного фона
- [ ] Иконка «+»: `text-dom-gold`
- [ ] Бордеры: `border-dom-gold/20`

**Если всё светлое — не трогать.**

---

### Блок 8: ProductEnroll (ЗАПИСАТЬСЯ)

**Это главный проблемный блок — сейчас на тёмном фоне.**

**Для Бизнес Миссии — полностью светлая версия:**

Добавить prop `theme` в ProductEnroll.astro:

```astro
---
const { theme = 'dark' } = Astro.props
const isLight = theme === 'light'
---
```

В `[slug].astro`:
```astro
<ProductEnroll 
  {...enrollProps} 
  theme={slug === 'business-mission' ? 'light' : 'dark'} 
/>
```

**Таблица замен для светлой темы:**

| Элемент | Тёмная (остальные продукты) | Светлая (Бизнес Миссия) |
|---------|---------------------------|------------------------|
| **Фон секции** | `linear-gradient(180deg, #38332d, #2f2923)` | `bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))]` |
| **Обёртка** | тёмная, `rounded-[2.2rem]` | тёплый градиент, `border border-dom-gold/25 rounded-[2.2rem]` |
| **H2 «Записаться»** | `text-dom-gold` или `text-white` | `text-dom-graphite` |
| **Карточка условий** | `bg-white/10` прозрачная | `bg-white/70 border border-dom-gold/25 rounded-3xl` |
| **Eyebrow «Условия»** | `text-white/70` | `text-dom-graphite/70` |
| **H3 внутри условий** | `text-white` | `text-dom-graphite` |
| **Описание** | `text-white/80` | `text-dom-graphite/80` |
| **Даты** | `text-white font-bold` | `text-dom-graphite font-bold` |
| **Подписи дат** | `text-white/70` | `text-dom-graphite/70` |
| **Доп. текст (чат)** | `text-white/70` | `text-dom-graphite/65` |
| **Цена** | `text-dom-gold text-5xl` | `text-dom-gold-dark text-5xl` |
| **Примечание цены** | `text-white/60 uppercase` | `text-dom-graphite/60 uppercase` |
| **Карточка формы** | `bg-white/10` прозрачная | `bg-white/75 border border-dom-gold/25 rounded-3xl` |
| **H4 «Форма заявки»** | `text-white` | `text-dom-graphite` |
| **Инпуты фон** | тёмный / прозрачный | `bg-white` |
| **Инпуты border** | `border-white/20` | `border-dom-gold/20` |
| **Инпуты текст** | `text-white` | `text-dom-graphite` |
| **Placeholder** | `placeholder:text-white/30` | `placeholder:text-dom-graphite/30` |
| **Focus** | `focus:border-dom-gold/60 focus:ring-dom-gold/20` | без изменений |
| **Кнопка CTA** | `bg-gold-gradient text-white` | без изменений |
| **Чекбокс текст** | `text-white/85` | `text-dom-graphite/85` |
| **Ссылки** | `text-dom-gold` | `text-dom-gold-dark underline` |
| **Дисклеймер** | `text-white/50 text-sm` | `text-dom-graphite/50 text-sm` |
| **Поддержка** | `text-white/75` | `text-dom-graphite/75` |

---

## ЧАСТЬ 3: СВОДНЫЙ ЧЕКЛИСТ

После всех правок — пройди страницу `/ru/products/business-mission/` сверху вниз:

### Масштаб
- [ ] Открыл главную `/ru/` в соседней вкладке — масштаб одинаковый?
- [ ] Все H2 = `text-4xl md:text-5xl`?
- [ ] Контейнер = `max-w-5xl` на каждом блоке?
- [ ] Между блоками нормальные отступы (`mb-16` или `mb-24`)?

### Светлая тема
- [ ] BusinessMissionHero — светлый? Нет чёрных overlay?
- [ ] ProductMission — левая карточка светлая (не графитовая)?
- [ ] ProductForWhom — светлый?
- [ ] BusinessMissionPainPoints — вывод светлый (не тёмная плашка)?
- [ ] ProductResults — светлый?
- [ ] ProductReviews — светлый?
- [ ] ProductFAQ — светлый?
- [ ] **ProductEnroll — СВЕТЛЫЙ?** (главный фикс)
- [ ] Нет НИ ОДНОГО элемента с `#38332d` фоном или `bg-dom-graphite` фоном?

### Мобильный (375px)
- [ ] Всё читабельно на светлом фоне?
- [ ] Форма заявки — белые инпуты с бордером?
- [ ] Горизонтального скролла нет?

---

## ПОРЯДОК РАБОТЫ

1. `git commit` — контрольная точка
2. Пройти по каждому блоку — проверить масштаб (ЧАСТЬ 1)
3. Исправить масштаб где нужно
4. Добавить `theme` prop в ProductMission.astro — условные стили
5. Добавить `theme` prop в ProductEnroll.astro — условные стили
6. Обновить плашку-вывод в BusinessMissionPainPoints (если уже создан)
7. В `[slug].astro` передать `theme="light"` для `business-mission`
8. Проверить ВСЮ страницу сверху вниз (чеклист из ЧАСТИ 3)
9. Проверить что ДРУГИЕ продукты не сломались (открыть formula-money)
10. `git commit -m "feat: BusinessMission fully light theme + scale fixes"`

---

## НЕ ТРОГАТЬ

- Тёмные стили ProductMission и ProductEnroll для остальных 15 продуктов
- Navbar, Footer, BaseLayout, WelcomePopup, global.css
- BusinessMissionHero.astro (уже светлый)
- zoom
- Файлы других страниц (блог, отзывы, карта пути и т.д.)

---

## АНТИПАТТЕРНЫ

| Cursor скорее всего сделает | Правильно |
|----------------------------|-----------|
| Уберёт тёмную тему из ProductMission/Enroll полностью | Только добавить `theme` prop, тёмная тема остаётся по умолчанию |
| Создаст отдельные файлы для светлых версий | Один компонент с условными стилями через `theme` prop |
| Поменяет масштаб «для красоты» | Строго по дизайн-системе: H2 = text-4xl md:text-5xl, max-w-5xl |
| Использует dom-goldDark (camelCase) | `dom-gold-dark` через дефис |
| Заменит тёмный фон на серый | Тёплый бежевый градиент: `linear-gradient(145deg, rgba(255,252,244,0.98), rgba(246,233,203,0.92))` |
| Сделает текст на светлом фоне слишком бледным | Основной текст: `text-dom-graphite` (полная контрастность), приглушённый: `text-dom-graphite/70–80` |
