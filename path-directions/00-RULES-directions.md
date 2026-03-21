# Правила для страниц направлений

> **Шесть отдельных страниц** (шесть URL), **один** набор компонентов и **один** файл данных.
> Данные: `src/data/pages/path-directions.ts`
> Файлы маршрутов: `src/pages/ru/path/{money,relations,mental,soul,awareness,worldview}.astro`

## Архитектура (как задумано)

1. **`DirectionLayout.astro`** — главный компонент направления: принимает **весь объект направления** (`DirectionEntry`) через props и рендерит **Hero**, **Description**, **ProductsGrid** (и опционально блоки книг). Без хардкода текстов на странице.
2. **`PathDirectionPage.astro`** — только оболочка сайта: **BaseLayout** (meta, SEO, общий каркас) + `<DirectionLayout {...data} />`. Нужен, чтобы не дублировать layout в каждом из 6 файлов.
3. **Каждая из 6 страниц** — 2–3 строки: импорт `PathDirectionPage` + `directionsData.<ключ>`.

Цепочка: страница → **PathDirectionPage** → BaseLayout → **DirectionLayout** → в т.ч. **DirectionProductsGrid**.

### Сетка программ (`DirectionProductsGrid`) — единое правило
- **До `md`:** `grid-cols-1`, карточки столбиком.
- **`md+`:** `grid grid-cols-1 md:grid-cols-2 gap-8` — по 2 в ряд.
- Если число продуктов **нечётное**, **последняя** карточка: `md:col-span-2` (на всю ширину).
- Ширину колонок из данных (`gridItemClass` с `md:col-span-2`) **не задавать** — сетка игнорирует/снимает это.

ОДИН файл данных: `path-directions.ts` (все 6 направлений).

## Два стиля (поле theme):
СВЕТЛЫЙ (Деньги, Отношения, Ментальное здоровье): bg-white, text-dom-graphite
ТЁМНЫЙ (Душа, Осознанность, Мировоззрение): bg-dom-graphite, text-dom-beige

## Правила
1. ВСЕ через props. НИКАКОГО хардкода.
2. Картинки продуктов: поле image в данных. Пока Unsplash placeholder.
3. НЕ ТРОГАЙ Footer, Navbar.
4. Хлебные крошки: sr-only.
5. Десктопную версию не ломать.

## SEO (уникальные для каждого направления):
- Свой title, description, canonicalUrl
- Schema.org: WebPage + BreadcrumbList (Главная → Карта пути → Название)
