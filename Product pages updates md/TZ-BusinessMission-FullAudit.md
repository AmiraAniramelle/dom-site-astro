# ТЗ: Аудит и исправление страницы «Бизнес Миссия» — SEO, шрифты, заголовки, дизайн-система

> Прочитай DOM-Design-System.md ПЕРЕД началом работы.
> **НЕ ТРОГАЙ:** Navbar, Footer, global.css, BaseLayout, WelcomePopup, файлы других страниц.

---

## 0. Перед началом

```bash
git add -A && git commit -m "checkpoint before bm-full-audit-fix"
```

---

## ПРОБЛЕМА

Страница Бизнес Миссия визуально и технически отклоняется от дизайн-системы:
- SEO не настроено (нет Schema.org, проблемы с иерархией заголовков)
- Шрифты местами не те (нужно проверить что всё через `dsH2`, `dsBody` и т.д.)
- Заголовки неправильных уровней (два H2 в одном блоке, пропуск уровней)
- Контейнер `max-w-5xl` отсутствует на некоторых секциях
- Инпуты формы `rounded-full` вместо `rounded-xl`

---

## 1. SEO — КРИТИЧНО

### 1.1 Иерархия заголовков

Правильная иерархия на странице (ОДИН H1, остальное H2 → H3):

```
<h1> БИЗНЕС МИССИЯ                                    ← BusinessMissionHero
  <h2> Если это про вас — программа создана для вас    ← PainPoints
  <h2> Главная ошибка...                               ← MainMistake
    <h3> Ожидание «папа даст»                          ← примеры внутри
    <h3> Роль «я как мама»
    <h3> «Клиент спасёт»
  <h2> Это не мотивационный курс                       ← SystemWork
  <h2> Формат                                          ← FormatResults (левая колонка)
    <h3> Результат после курса                         ← FormatResults (правая колонка)
  <h2> Этот курс                                       ← CourseAudience
    <h3> Не для вас, если:
    <h3> Для вас, если:
  <h2> Записаться на программу                         ← Enroll
  <h2> Частые вопросы                                  ← FAQ (если есть)
```

**Проверить и исправить каждый компонент:**

| Компонент | Сейчас | Должно быть |
|-----------|--------|-------------|
| BusinessMissionHero | `<h1>` ✅ | OK |
| PainPoints | `<h2>` ✅ | OK |
| MainMistake | `<h2>` ✅ | OK, но проверить что примеры = `<h3>` |
| SystemWork | `<h2>` ✅ | OK |
| FormatResults | `<h2>` для «Формат» | OK, но «Результат после курса» должен быть `<h3>` НЕ `<h2>` |
| CourseAudience | `<h2>` для «Этот курс» | OK, но «Не для вас» и «Для вас» должны быть `<h3>` НЕ `<h2>` |
| Enroll | `<h2>` для «Записаться» | OK |

**Конкретные исправления:**

**FormatResults.astro, строка 86** — «Результат после курса»:
```diff
- <h3 class:list={['mb-5 font-normal uppercase...', dsH3]}>
```
Проверить что это `<h3>`. Если `<h2>` — заменить на `<h3>`.

**CourseAudience.astro, строки 40 и 79** — «Не для вас» и «Для вас»:
```diff
Проверить что оба = <h3>. Если <h2> — заменить на <h3>.
```

### 1.2 Schema.org JSON-LD

Сейчас на странице НЕТ Schema.org. Добавить в `[slug].astro` (продуктовый, НЕ блоговый) для всех продуктов:

```html
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": product.title,
  "description": product.shortDesc,
  "provider": {
    "@type": "Organization",
    "name": "DOM | Системный Метод Анны Хефорс"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price.replace(/[^\d]/g, ''),
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock"
  }
})} />
```

### 1.3 FAQ Schema (если есть FAQ блок)

```html
{product.faq && product.faq.length > 0 && (
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  })} />
)}
```

### 1.4 Мета-теги

Проверить что в `[slug].astro` (продуктовый) передаются:
- `<title>` — из `product.seo.title`
- `<meta name="description">` — из `product.seo.description`
- Open Graph теги
- Canonical URL

---

## 2. КОНТЕЙНЕР — max-w-5xl ВЕЗДЕ

**Проблема:** секции не обёрнуты в стандартный контейнер `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`.

Сейчас каждый компонент использует `<div class="w-full">` без ограничения ширины.

**Исправить:** обернуть контент КАЖДОЙ секции в стандартный контейнер.

Два варианта:

**Вариант A (рекомендуемый):** добавить контейнер в `[slug].astro` вокруг блоков:
```astro
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <BusinessMissionPainPoints ... />
</div>
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <BusinessMissionMainMistake ... />
</div>
<!-- и так далее -->
```

**Вариант B:** добавить контейнер внутрь каждого компонента, заменив `<div class="w-full">` на:
```html
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
```

---

## 3. ОТСТУПЫ МЕЖДУ СЕКЦИЯМИ

Каждая `<section>` должна иметь `mb-16 md:mb-24` (или через gap в родителе).

Проверить что между блоками достаточно воздуха. Сейчас секции идут `<section>` без margin.

**Исправить:** добавить `class="mb-16 md:mb-24"` на каждую `<section>` или обернуть все блоки в:
```html
<div class="space-y-16 md:space-y-24">
  <!-- все блоки -->
</div>
```

---

## 4. ФОРМА ЗАПИСИ (BusinessMissionEnroll.astro) — ИНПУТЫ

### 4.1 Инпуты: rounded-full → rounded-xl

**Сейчас (строки 115, 124, 133):**
```
rounded-full border-0 bg-white px-6 py-3.5 text-sm ... ring-1 ring-black/5
```

**Заменить на (по дизайн-системе):**
```
rounded-xl border border-dom-gold/20 bg-white px-6 py-4 font-montserrat text-lg text-dom-graphite placeholder:text-dom-graphite/30 outline-none focus:border-dom-gold/60 focus:ring-2 focus:ring-dom-gold/20 transition-all duration-300
```

**Что меняется:**
- `rounded-full` → `rounded-xl`
- `border-0 ring-1 ring-black/5` → `border border-dom-gold/20`
- `py-3.5 text-sm` → `py-4 text-lg` (десктоп) / `text-base` (мобильный)
- `shadow-inner` → убрать
- `focus:ring-dom-graphite/25` → `focus:border-dom-gold/60 focus:ring-2 focus:ring-dom-gold/20`

### 4.2 Кнопка «Занять место»

Проверить что используется `domButtonPrimary` и что он содержит ТОЧНЫЕ классы из дизайн-системы:
```
bg-gold-gradient text-white py-4 px-8 rounded-xl font-montserrat font-bold uppercase tracking-[0.12em] text-sm shadow-[0_12px_28px_rgba(217,179,114,0.36)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(217,179,114,0.45)] active:translate-y-0 transition-all duration-300 block text-center w-full md:w-auto
```

Если `domButtonPrimary` в `src/data/ui/domButtons.ts` содержит другие классы — ИСПРАВИТЬ файл `domButtons.ts`.

---

## 5. ПРОВЕРКА ФАЙЛА domButtons.ts

Открыть `src/data/ui/domButtons.ts` и проверить что `domButtonPrimary` содержит ТОЧНО:

```typescript
export const domButtonPrimary = 'bg-gold-gradient text-white py-4 px-8 rounded-xl font-montserrat font-bold uppercase tracking-[0.12em] text-sm shadow-[0_12px_28px_rgba(217,179,114,0.36)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(217,179,114,0.45)] active:translate-y-0 transition-all duration-300 block text-center w-full md:w-auto';
```

**Если `rounded-xl` заменён на `rounded-2xl` или `rounded-3xl` — вернуть `rounded-xl`.**
**Если `py-4` заменён на `py-5` или `py-6` — вернуть `py-4`.**
**Если `text-sm` заменён на `text-base` или больше — вернуть `text-sm`.**

---

## 6. ПРОВЕРКА ФАЙЛА domTypography.ts

Открыть `src/data/ui/domTypography.ts` и проверить:

```typescript
// H1: font-messiri text-5xl md:text-7xl
export const dsH1 = 'font-messiri text-5xl md:text-7xl text-dom-graphite';

// H2: font-messiri text-4xl md:text-5xl
export const dsH2 = 'font-messiri text-4xl md:text-5xl text-dom-graphite';

// H3: font-messiri text-3xl md:text-4xl
export const dsH3 = 'font-messiri text-3xl md:text-4xl text-dom-graphite';

// Body: font-montserrat text-base md:text-lg
export const dsBody = 'font-montserrat text-base md:text-lg';

// Eyebrow
export const dsEyebrow = 'font-montserrat text-[11px] uppercase tracking-[0.12em] text-dom-gold-dark';
```

**Если размеры отличаются — исправить файл.**

---

## 7. camelCase ПРОВЕРКА

Поиск по всем файлам Бизнес Миссии:

```bash
grep -rn "dom-goldDark\|dom-goldLeaf\|goldDark\|goldLeaf" src/components/products/BusinessMission*.astro
```

Каждое совпадение заменить:
- `dom-goldDark` → `dom-gold-dark`
- `dom-goldLeaf` → `dom-gold-leaf`

Также проверить `[slug].astro` (продуктовый):
```bash
grep -rn "dom-goldDark\|dom-goldLeaf" src/pages/ru/products/
```

---

## 8. ПОЛНЫЙ ЧЕКЛИСТ

### SEO
- [ ] Один `<h1>` на странице (в BusinessMissionHero)
- [ ] Все остальные заголовки — `<h2>` и `<h3>`, иерархия без пропусков
- [ ] Schema.org Course JSON-LD добавлен
- [ ] Schema.org FAQPage JSON-LD добавлен (если есть FAQ)
- [ ] `<title>` и `<meta description>` уникальные
- [ ] Canonical URL
- [ ] OG теги

### Шрифты
- [ ] Все заголовки: `font-messiri` (через `dsH1`, `dsH2`, `dsH3`)
- [ ] Весь текст: `font-montserrat` (через `dsBody`)
- [ ] Eyebrow: `font-montserrat text-[11px] uppercase` (через `dsEyebrow`)
- [ ] Кнопки: `font-montserrat` (НЕ `font-messiri`)

### Размеры
- [ ] H1: `text-5xl md:text-7xl`
- [ ] H2: `text-4xl md:text-5xl`
- [ ] H3: `text-3xl md:text-4xl`
- [ ] Тело: `text-base md:text-lg`

### Контейнер
- [ ] Каждая секция обёрнута в `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`

### Форма
- [ ] Инпуты: `rounded-xl` (НЕ `rounded-full`)
- [ ] Инпуты: `border border-dom-gold/20` (НЕ `ring-1 ring-black/5`)
- [ ] Кнопка: по дизайн-системе (Кнопка 1)

### Кнопки
- [ ] Все CTA: `rounded-xl py-4 px-8 text-sm` (Кнопка 1)
- [ ] `domButtonPrimary` в `domButtons.ts` соответствует дизайн-системе

### camelCase
- [ ] Нет `dom-goldDark` нигде — только `dom-gold-dark`

---

## 9. ПОРЯДОК РАБОТЫ

1. `git commit` — контрольная точка
2. Проверить и исправить `domButtons.ts` и `domTypography.ts`
3. Исправить иерархию заголовков (H2/H3) в FormatResults и CourseAudience
4. Добавить Schema.org JSON-LD в продуктовый `[slug].astro`
5. Добавить `max-w-5xl` контейнеры
6. Добавить отступы между секциями
7. Исправить инпуты формы в BusinessMissionEnroll
8. Проверить camelCase (grep)
9. Открыть страницу — визуальная проверка масштаба (сравнить с главной)
10. `git commit -m "fix: BM audit — SEO, headings, inputs, scale, design system"`

---

## НЕ ТРОГАТЬ

- Navbar, Footer, BaseLayout, WelcomePopup, global.css
- Контент и данные (тексты в business-mission.md)
- Логику компонентов, props
- Файлы других продуктов и страниц
- zoom
