# ТЗ: Финальные исправления — кнопки, текст формата, стили

> Прочитай DOM-Design-System.md ПЕРЕД началом работы.
> **НЕ ТРОГАЙ:** Navbar, Footer, BaseLayout, WelcomePopup.

---

## 0. Перед началом

```bash
git add -A && git commit -m "checkpoint before final-style-fixes"
```

---

## Проблема 1: КНОПКИ выглядят не как на других страницах

### Диагностика

Кнопка использует `domButtonPrimary` из `domButtons.ts` — токен правильный. Но визуально кнопка выглядит крупнее и более скруглённой чем на главной.

### Возможные причины и решения

**Причина A: Tailwind v4 + class:list конфликт**

В Tailwind v4 при конфликте классов побеждает тот, что объявлен позже в CSS, а не позже в HTML. `class:list` может склеить классы в неправильном порядке.

**Решение:** не использовать `class:list` для кнопок. Вместо этого — строковая конкатенация:

Во ВСЕХ компонентах BusinessMission заменить:
```diff
- class:list={['mt-6', domButtonPrimary]}
+ class={`mt-6 ${domButtonPrimary}`}
```

Конкретные строки:

**BusinessMissionMainMistake.astro (строка 60):**
```diff
- <a href={ctaHref} class:list={['mt-6', domButtonPrimary]}>
+ <a href={ctaHref} class={`mt-6 ${domButtonPrimary}`}>
```

**BusinessMissionFormatResults.astro (строка 79):**
```diff
- <a href={ctaHref} class:list={['mt-auto', domButtonPrimary, 'lg:self-start']}>
+ <a href={ctaHref} class={`mt-auto lg:self-start ${domButtonPrimary}`}>
```

**BusinessMissionEnroll.astro (строка 136):**
```diff
- <button type="submit" class:list={['mt-2', domButtonPrimary]}>
+ <button type="submit" class={`mt-2 ${domButtonPrimary}`}>
```

**BusinessMissionHero.astro (строка 260):**
```diff
- <a href={cta.url} class={domButtonPrimary}>
+ <a href={cta.url} class={domButtonPrimary}>
```
(уже правильно — не через class:list)

**Причина B: product-light-card наследует стили**

В `global.css` (строки 129–133) `.product-page-shell .product-light-card` задаёт `border` и `box-shadow`. Кнопка внутри `product-light-card` может наследовать border-radius от карточки через CSS cascade.

**Решение:** добавить `!important` на `border-radius` кнопки в `domButtons.ts`:

НЕТ — лучше проверить. Откройте DevTools в Chrome:
1. Правый клик на кнопку → Inspect
2. В панели Styles найдите `border-radius`
3. Если видите перечёркнутый `rounded-xl` и активный `rounded-2xl` или `rounded-3xl` откуда-то — вот источник проблемы

Если нашли — скиньте скриншот DevTools, я скажу точно что исправить.

---

## Проблема 2: Текст формата в UPPERCASE

### Сейчас (скриншот)

В блоке FormatResults текст пунктов написан UPPERCASE:
```
1 ДЕНЬ ГЛУБОКОЙ СИСТЕМНОЙ РАБОТЫ
ТЕОРИЯ + ПРАКТИКИ
+ 1 ДОПОЛНИТЕЛЬНАЯ ВСТРЕЧА С РАЗБОРАМИ КЕЙСОВ
```

### Причина

**BusinessMissionFormatResults.astro, строка 72:**
```html
<p class:list={['font-semibold uppercase leading-snug tracking-[0.06em] text-dom-graphite', dsBody]}>
```

Здесь `uppercase` и `tracking-[0.06em]` добавлены к `dsBody` — тот же паттерн что был с заголовками!

### Решение

```diff
- <p class:list={['font-semibold uppercase leading-snug tracking-[0.06em] text-dom-graphite', dsBody]}>
+ <p class:list={['font-semibold text-dom-graphite', dsBody]}>
```

Убрано: `uppercase`, `leading-snug`, `tracking-[0.06em]`

---

## Проблема 3: UPPERCASE в CourseAudience текстах

### BusinessMissionCourseAudience.astro

Проверить все `<p>` и `<li>` тексты на наличие `uppercase`. Текст описания НЕ должен быть uppercase — только заголовки (и то без кастомного tracking).

Поиск:
```bash
grep -n "uppercase" src/components/products/BusinessMissionCourseAudience.astro
```

Каждое совпадение в текстовых элементах (НЕ eyebrow, НЕ заголовки) — убрать `uppercase`.

---

## Проблема 4: global.css — hero-title перебивает размеры

### Строки 3436–3443 в global.css:
```css
.hero-title {
  font-size: clamp(2rem, 4vw, 3.2rem) !important;
}
```

Класс `hero-title` используется на странице блога (строка 176 в `[slug].astro` блога):
```html
<h1 class="hero-title text-dom-graphite mb-4 leading-tight">
```

**Если этот класс случайно оказался на каком-то элементе продуктовой страницы** — он перебьёт размер шрифта через `!important`.

Поиск:
```bash
grep -rn "hero-title" src/components/products/ src/pages/ru/products/
```

Если найдено — убрать класс `hero-title`, использовать `dsH1` вместо него.

---

## Проблема 5: Заголовок «Формат» и «Результат после курса:» — разный регистр

На скриншоте: «ФОРМАТ» (uppercase) vs «Результат после курса:» (normal case).

### Причина

В `business-mission.md`:
```yaml
formatTitle: "Формат"        # ← Cursor добавляет uppercase через CSS
resultsTitle: "Результат после курса:"  # ← выводится как есть
```

После того как убрали `uppercase` из Проблемы 2 (заголовки), оба должны отображаться в нормальном регистре. 

Если «Формат» всё ещё uppercase — значит где-то остался `uppercase` класс. Поиск:
```bash
grep -n "uppercase" src/components/products/BusinessMissionFormatResults.astro
```

Убрать ВСЕ `uppercase` кроме eyebrow-элементов (`dsEyebrow` содержит свой uppercase).

---

## Полный grep по всем BusinessMission компонентам

Выполнить и исправить каждое совпадение:

```bash
# Кастомный tracking на заголовках и текстах
grep -rn "tracking-\[" src/components/products/BusinessMission*.astro

# uppercase на НЕ-eyebrow элементах
grep -rn "uppercase" src/components/products/BusinessMission*.astro

# Лишние leading-* при наличии dsH*/dsBody
grep -rn "leading-snug\|leading-tight" src/components/products/BusinessMission*.astro | grep "ds"

# font-normal/font-bold при наличии dsH*
grep -rn "font-normal" src/components/products/BusinessMission*.astro | grep "ds"
```

Правило: если строка содержит `dsH2`, `dsH3` или `dsBody` — рядом НЕ должно быть `uppercase`, `tracking-[...]`, `leading-snug`, `leading-tight`, `font-normal`.

---

## После исправлений — чеклист

- [ ] Кнопка CTA — `rounded-xl`, компактная, как на главной?
- [ ] Текст формата — не uppercase, нормальный регистр?
- [ ] «Формат» и «Результат после курса» — одинаковый визуальный стиль заголовков?
- [ ] Все H2 одного размера? Все H3 одного размера?
- [ ] Нет `uppercase` ни на одном тексте (кроме кнопок и eyebrow)?

---

## НЕ ТРОГАТЬ

- domTypography.ts, domButtons.ts (они правильные)
- Navbar, Footer, BaseLayout
- Контент в business-mission.md
- Файлы других страниц
- global.css (пока не трогать — сначала исправить компоненты)
