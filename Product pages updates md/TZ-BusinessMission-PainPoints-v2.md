# ТЗ: Блок «Узнаёте себя» — страница Бизнес Миссия

> Прочитай DOM-Design-System.md ПЕРЕД началом работы.
> **НЕ ТРОГАЙ:** Navbar, Footer, global.css, BaseLayout, WelcomePopup, файлы других страниц.

---

## 0. Перед началом

```bash
git add -A && git commit -m "checkpoint before bm-painpoints-block"
```

---

## 1. ЧТО ЭТО

Эмоциональный блок-триггер на странице «Бизнес Миссия». Один цельный блок — НЕ россыпь карточек. Пользователь видит 5 «болей» предпринимателя, узнаёт себя, и получает вывод: «Это не проблема мотивации → Это системная ошибка».

**Размещение:** после ProductForWhom, ПЕРЕД ProductResults.

---

## 2. ДИЗАЙН-СИСТЕМА — ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА

Этот компонент ОБЯЗАН соблюдать ВСЕ правила из DOM-Design-System.md:

### Контейнер
- `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8` — тот же что ВЕЗДЕ на сайте
- Ширина контента НИКОГДА не шире `max-w-5xl` (1152px)

### Шрифты
- Заголовок H2: `font-messiri` (Cinzel RUS by Lyajka)
- Весь остальной текст: `font-montserrat` (Montserrat)
- **Никаких других шрифтов. Никогда.**

### Размеры заголовков — ЖЕЛЕЗНЫЕ ПРАВИЛА
- H2: `font-messiri text-4xl md:text-5xl` (36–48px)
- Мобильный H2: `clamp(1.5rem, 7vw, 2rem)`

### Цвета — ТОЛЬКО из палитры
```
text-dom-graphite          → #38332d
text-dom-gold              → #d9b372
text-dom-gold-dark         → #a4814a  (НЕ goldDark!)
text-dom-beige             → #f4e4ce
bg-gold-gradient           → linear-gradient(135deg, #d9b372, #a4814a)
Графитовый градиент        → linear-gradient(180deg, #38332d, #2f2923)
Тёплый светлый             → linear-gradient(145deg, rgba(255,252,244,0.98), rgba(246,233,203,0.92))
```

### Отступы
- Между секциями: `mb-16` (десктоп), `mb-8` (мобильный)
- Eyebrow → Заголовок: `mb-3`
- Карточки в сетке: `gap-8`

### SEO
- Заголовок блока — `<h2>` (НЕ h1, НЕ h3)
- Иерархия: страница имеет один H1 (название продукта), этот блок = H2
- Текст в тегах `<p>`, не в `<div>` и не в `<span>`

---

## 3. СТРУКТУРА БЛОКА

Одна цельная карточка с тёплым градиентным фоном. Внутри:

```
┌──────────────────────────────────────────────────────────┐
│  Карточка: тёплый градиент, rounded-[2rem], border       │
│                                                            │
│              Узнаёте себя?  (eyebrow)                     │
│                                                            │
│    Если это про вас — программа создана для вас            │
│                    (H2)                                    │
│              ──── (золотая линия) ────                     │
│                                                            │
│  ① Бизнес держится на вас  и разваливается без вас        │
│  ─────────────────────────────────────────────────         │
│  ② Вы много делаете,  но доход нестабилен                 │
│  ─────────────────────────────────────────────────         │
│  ③ Клиенты сложные,  команда не тянет, партнёры подводят  │
│  ─────────────────────────────────────────────────         │
│  ④ Деньги в бизнесе есть,  но «не остаются»              │
│  ─────────────────────────────────────────────────         │
│  ⑤ Вы устали, выгораете,  но не можете остановиться       │
│                                                            │
│  ┌──────────────────────────────────────────────────┐     │
│  │  Это не проблема     │    Это системная          │     │
│  │  мотивации.          │    ошибка.                │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 4. СТИЛИ — ПОСЕКЦИОННО

### 4.1 Секция-обёртка

```html
<section class="mb-16 md:mb-24">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
```

### 4.2 Карточка-контейнер (весь блок внутри одной карточки)

```html
<div class="rounded-[2rem] overflow-hidden
            bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))]
            border border-dom-gold/18">
```

НЕ добавлять: shadow, backdrop-blur. Карточка чистая и тёплая.

### 4.3 Верхняя часть — eyebrow + заголовок + золотая линия

```html
<div class="pt-12 pb-2 md:pt-16 md:pb-4 px-8 md:px-12 text-center">

  <!-- Eyebrow -->
  <span class="font-montserrat text-[11px] uppercase tracking-[0.12em] 
               text-dom-gold-dark mb-3 block">
    Узнаёте себя?
  </span>
  
  <!-- H2 -->
  <h2 class="font-messiri text-4xl md:text-5xl text-dom-graphite 
             leading-tight mb-5">
    Если это про вас — программа создана для вас
  </h2>
  
  <!-- Золотая линия -->
  <div class="w-12 h-0.5 bg-gold-gradient mx-auto"></div>

</div>
```

Мобильный H2:
```css
font-size: clamp(1.5rem, 7vw, 2rem);
```

### 4.4 Список болевых точек — строки с hover

```html
<div class="px-4 md:px-6">

  <!-- Повторить 5 раз -->
  <div class="group flex items-center gap-5 py-5 px-6 md:px-8 
              border-b border-dom-gold/8 last:border-b-0
              hover:bg-dom-gold/[0.04] transition-colors duration-300 
              cursor-default">
    
    <!-- Номер в круге -->
    <span class="flex-shrink-0 w-9 h-9 rounded-full 
                 border border-dom-gold/20
                 flex items-center justify-center
                 font-messiri text-sm text-dom-gold-dark/45
                 group-hover:text-dom-gold group-hover:border-dom-gold/50
                 transition-all duration-300">
      1
    </span>
    
    <!-- Текст -->
    <p class="font-montserrat text-base md:text-lg text-dom-graphite leading-relaxed">
      <span class="font-semibold">Бизнес держится на вас</span>
      <span class="text-dom-graphite/50"> и разваливается без вас</span>
    </p>

  </div>

</div>
```

**Ключевые моменты:**
- Каждая боль = одна строка (flex row), НЕ карточка
- Номер в круге: `font-messiri`, тонкий бордер, при hover становится золотым
- Текст: первая часть (боль) — `font-semibold`, вторая (уточнение) — приглушённая `text-dom-graphite/50`
- Разделитель: `border-b border-dom-gold/8` — почти невидимая линия
- Hover: лёгкая подсветка `bg-dom-gold/[0.04]` + номер золотеет
- Последняя строка без бордера: `last:border-b-0`

### 4.5 Тёмная плашка-вывод

```html
<div class="mx-4 mb-6 md:mx-6 md:mb-8 mt-2 md:mt-4 
            rounded-2xl p-8 md:p-10
            flex items-center justify-center gap-8 md:gap-10"
     style="background: linear-gradient(180deg, #38332d, #2f2923);">
  
  <!-- Левая часть — приглушённая -->
  <p class="font-montserrat text-base md:text-lg text-dom-beige/50 
            text-right flex-1 leading-relaxed">
    Это не проблема<br>мотивации.
  </p>
  
  <!-- Вертикальный разделитель -->
  <div class="w-px h-12 bg-dom-gold/25 flex-shrink-0"></div>
  
  <!-- Правая часть — акцент -->
  <p class="font-messiri text-2xl md:text-3xl text-dom-gold 
            text-left flex-1 leading-tight">
    Это системная<br>ошибка.
  </p>

</div>
```

**Ключевые моменты:**
- Плашка ВНУТРИ общей карточки, с отступами от краёв (`mx-4 md:mx-6`)
- Фон — графитовый градиент из дизайн-системы
- Левая часть: Montserrat, приглушённый бежевый `text-dom-beige/50`
- Разделитель: вертикальная золотая линия `w-px h-12 bg-dom-gold/25`
- Правая часть: Cinzel (font-messiri), золотой `text-dom-gold`, крупнее
- Flexbox `items-center justify-center gap-10` — обе части по центру

---

## 5. МОБИЛЬНАЯ ВЕРСИЯ (≤768px)

| Элемент | Десктоп | Мобильный |
|---------|---------|-----------|
| Секция | `mb-24` | `mb-16` |
| Карточка padding верх | `pt-16` | `pt-10` |
| Карточка px | `px-12` | `px-5` |
| H2 | `text-4xl md:text-5xl` | `clamp(1.5rem, 7vw, 2rem)` |
| Строка боли py | `py-5` | `py-4` |
| Строка боли px | `px-8` | `px-4` |
| Строка боли gap | `gap-5` | `gap-4` |
| Номер | `w-9 h-9` | `w-8 h-8 text-xs` |
| Текст боли | `text-lg` | `text-base` |
| Плашка-вывод | `flex-row gap-10 p-10` | `flex-col gap-4 p-6 text-center` |
| Вывод текст 1 | `text-lg text-right` | `text-base text-center` |
| Вывод текст 2 | `text-3xl text-left` | `text-2xl text-center` |
| Разделитель в выводе | `w-px h-12` (вертикальный) | `w-16 h-px mx-auto` (горизонтальный) |

**На мобильном плашка-вывод становится вертикальной:**
```html
<div class="... flex flex-col md:flex-row items-center justify-center 
            gap-4 md:gap-10 text-center md:text-left">
  
  <p class="... md:text-right md:flex-1">
    Это не проблема мотивации.
  </p>
  
  <!-- Разделитель: вертикальный на десктопе, горизонтальный на мобильном -->
  <div class="w-16 h-px md:w-px md:h-12 bg-dom-gold/25 flex-shrink-0"></div>
  
  <p class="... md:text-left md:flex-1">
    Это системная ошибка.
  </p>

</div>
```

---

## 6. ДАННЫЕ (props)

```typescript
interface BusinessMissionPainPointsProps {
  eyebrow?: string           // "Узнаёте себя?"
  title: string              // "Если это про вас — программа создана для вас"
  items: Array<{
    bold: string             // "Бизнес держится на вас"
    muted: string            // "и разваливается без вас"
  }>
  conclusion: {
    line1: string            // "Это не проблема мотивации."
    line2: string            // "Это системная ошибка."
  }
}
```

### Добавить в Zod-схему (`content.config.ts`):

```typescript
painPointsEyebrow: z.string().optional(),
painPointsTitle: z.string().optional(),
painPoints: z.array(z.object({
  bold: z.string(),
  muted: z.string(),
})).optional(),
painPointsConclusion: z.object({
  line1: z.string(),
  line2: z.string(),
}).optional(),
```

### Добавить в `business-mission.md`:

```yaml
painPointsEyebrow: "Узнаёте себя?"
painPointsTitle: "Если это про вас — программа создана для вас"
painPoints:
  - bold: "Бизнес держится на вас"
    muted: "и разваливается без вас"
  - bold: "Вы много делаете,"
    muted: "но доход нестабилен"
  - bold: "Клиенты сложные,"
    muted: "команда не тянет, партнёры подводят"
  - bold: "Деньги в бизнесе есть,"
    muted: "но «не остаются»"
  - bold: "Вы устали, выгораете,"
    muted: "но не можете остановиться"
painPointsConclusion:
  line1: "Это не проблема мотивации."
  line2: "Это системная ошибка."
```

---

## 7. ПОДКЛЮЧЕНИЕ В [slug].astro

```astro
---
import BusinessMissionPainPoints from '...products/BusinessMissionPainPoints.astro'
---

<!-- Порядок блоков для business-mission: -->
<!-- 1. BusinessMissionHero -->
<!-- 2. ProductMission -->
<!-- 3. ProductForWhom -->
<!-- 4. ★ BusinessMissionPainPoints ← ТУТ -->
<!-- 5. ProductResults -->
<!-- 6. ProductReviews -->
<!-- 7. ProductFAQ -->
<!-- 8. ProductEnroll -->

{slug === 'business-mission' && product.painPoints && (
  <BusinessMissionPainPoints
    eyebrow={product.painPointsEyebrow}
    title={product.painPointsTitle ?? "Если это про вас — программа создана для вас"}
    items={product.painPoints}
    conclusion={product.painPointsConclusion}
  />
)}
```

---

## 8. SEO

- Заголовок блока: `<h2>` — соблюдает иерархию (H1 = название продукта)
- Каждая боль: `<p>` с `<span>` внутри для стилизации bold/muted
- Вывод: `<p>` теги
- НЕ использовать `<div>` вместо `<p>` для текстового контента
- Eyebrow: `<span>`, не `<h3>` — это декоративный элемент, не заголовок

---

## 9. АНТИПАТТЕРНЫ

| Cursor скорее всего сделает | Правильно |
|----------------------------|-----------|
| Разобьёт на отдельные карточки-плитки | ОДИН блок. Строки внутри одной карточки |
| Добавит картинки/иконки к каждой боли | Только номер в круге + текст. Никаких картинок |
| Сделает контейнер шире max-w-5xl | `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8` как ВЕЗДЕ |
| Использует другой шрифт | font-messiri для заголовков, font-montserrat для текста |
| Поставит text-6xl или text-7xl на H2 | H2 = `text-4xl md:text-5xl` — железное правило |
| Сделает вывод отдельным блоком вне карточки | Вывод ВНУТРИ общей карточки, с отступами |
| Использует dom-goldDark (camelCase) | `dom-gold-dark` через дефис |
| Добавит shadow на внешнюю карточку | Без shadow — чистая тёплая карточка с border |
| Поставит `<div>` вместо `<p>` на текст | Семантические теги: `<h2>`, `<p>`, `<span>` |

---

## 10. ПОРЯДОК РАБОТЫ

1. `git commit` — контрольная точка
2. Добавить поля в Zod-схему
3. Добавить данные в `business-mission.md`
4. Создать `BusinessMissionPainPoints.astro`
5. Подключить в `[slug].astro` после ProductForWhom
6. Проверить десктоп — сравнить масштаб с остальными блоками
7. Проверить мобильный (375px) — вывод в столбик, текст читабелен
8. `git commit -m "feat: BusinessMission pain points block"`

---

## НЕ ТРОГАТЬ

- Navbar, Footer, BaseLayout, WelcomePopup, global.css
- BusinessMissionHero.astro
- ProductForWhom.astro, ProductResults.astro и другие общие компоненты
- Файлы других продуктов
- zoom
