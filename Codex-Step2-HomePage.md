# Шаг 2 — Перенос главной страницы по секциям

> **Каждая секция = отдельная задача для Codex/Cursor.**
> Не отправляй всё сразу. Сделай одну секцию → проверь → следующая.
> Каждый промпт самодостаточен — копируй и вставляй.

---

## Общие правила (добавлять к КАЖДОМУ промпту)

```
ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА ДЛЯ ВСЕХ СЕКЦИЙ:

1. ВИЗУАЛЬНО ИДЕНТИЧНО: Скопируй ВСЕ Tailwind-классы и HTML-структуру
   из source-DOM.html. Не меняй классы, не упрощай, не «улучшай».

2. CMS-READY: Все тексты, картинки, ссылки — через props.
   Компонент НЕ содержит захардкоженный контент.

3. ДАННЫЕ: Тексты из оригинала положи в src/data/pages/home.ts
   (экспортируй объект homePageData с секциями).

4. SEO: Заголовок секции — <h2> (НЕ <h1>, он один на всю страницу).
   Подзаголовки — <h3>.

5. НЕ ДЕЛАЙ:
   - Не меняй Tailwind-классы на другие
   - Не убирай градиенты, тени, анимации
   - Не упрощай вложенность HTML
   - Не меняй шрифты и размеры
   - Не добавляй свои стили

6. ПРОВЕРКА: npm run dev → открой localhost:4321/ru/
   → секция визуально идентична оригиналу.

Файл-источник: source-DOM/source-DOM.html
Главная страница: строки 5189–5696
```

---

## Секция 1: Hero (строки 5190–5227)

```
ЗАДАЧА: Создать компонент HeroSection.astro для главной страницы.

ИСТОЧНИК: source-DOM.html, строки 5190–5227
(от <div class="relative w-full home-hero"> до закрывающего </div> перед первой <section>)

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/HeroSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- badge.icon: string (путь к иконке dom-symbol-gold.svg)
- badge.text: string ("DOM · институт внутренней трансформации...")
- title: string ("Верни себе опору. Жизнь - это система...")
- lead: string ("Метод DOM - архитектура зрелой жизни...")
- primaryCta: { text: string, url: string }
- secondaryCta: { text: string, url: string }
- portrait: { src: string, alt: string }
- logo: { src: string, alt: string }

SEO: Это единственный <h1> на всей главной странице.
Заголовок hero = <h1>. Все остальные секции используют <h2>.

ДАННЫЕ: Добавь в src/data/pages/home.ts:
export const homePageData = {
  hero: {
    badge: {
      icon: '/dom-assets/dom-symbol-gold.svg',
      text: 'DOM · институт внутренней трансформации и системного мышления · Анна Хефорс'
    },
    title: 'Верни себе опору. Жизнь - это система, которую можно выстроить.',
    lead: 'Метод DOM - архитектура зрелой жизни: шесть граней единой системы, которая соединяет внешнюю реализацию и внутреннюю честность.',
    primaryCta: { text: 'Начать свой путь', url: '/ru/path/' },
    secondaryCta: { text: 'Открыть структуру метода', url: '/ru/method/' },
    portrait: { src: '/dom-assets/anna-portrait.png', alt: 'Анна Хефорс — автор метода DOM' },
    logo: { src: '/dom-assets/dom-logo-home-gold-bg.jpg', alt: 'DOM Systemic Method by Anna Hefors' }
  }
}

ПОМНИ: onclick="navigateTo('path')" заменяется на <a href={primaryCta.url}>.
В Astro нет клиентского роутинга — используй обычные ссылки <a>.
```

---

## Секция 2: Intent Slider — «Для тех, кто хочет большего» (строки 5228–5252)

```
ЗАДАЧА: Создать компонент IntentSlider.astro.

ИСТОЧНИК: source-DOM.html, строки 5228–5252
(секция с class="home-intent-section")

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/IntentSlider.astro

ОСОБЕННОСТЬ: Эта секция содержит слайдер с карточками, который
управляется JavaScript (data-home-intent-slider, data-home-intent-slots).
Данные карточек генерируются динамически в JS.

ЧТО СДЕЛАТЬ:
1. Найди в source-DOM.html массив данных для intent-карточек
   (ищи INTENT или home-intent в JS-блоке после строки 9000)
2. Вынеси данные карточек в homePageData.intent
3. HTML-структуру скопируй как есть
4. JS-логику слайдера перенеси в <script> тег внутри компонента
5. Заголовок "Для тех, кто хочет большего" — это <h2>

PROPS:
- title: string
- cards: Array<{ title: string, text: string, icon?: string }>
- phrase: string (текст внизу слайдера)
```

---

## Секция 3: Manifest — «Что такое DOM» (строки 5254–5290)

```
ЗАДАЧА: Создать компонент ManifestSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5254–5290
(секция с class="home-manifest-section")

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/ManifestSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- title: string (заголовок секции)
- paragraphs: string[] (текстовые блоки)
- highlightText: string (выделенный текст если есть)

SEO: Заголовок — <h2>.
```

---

## Секция 4: Mission — «Миссия проекта DOM» (строки 5292–5307)

```
ЗАДАЧА: Создать компонент MissionSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5292–5307

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/MissionSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- title: string ("Миссия проекта DOM")
- text: string (текст миссии)
- highlights: string[] (ключевые тезисы если есть)

SEO: Заголовок — <h2>.
```

---

## Секция 5: Architecture — «Архитектура метода DOM» (строки 5309–5388)

```
ЗАДАЧА: Создать компонент ArchitectureSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5309–5388
(секция с интерактивной схемой «Внешний Дом» / «Внутренний Дом»)

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/ArchitectureSection.astro

ОСОБЕННОСТЬ: Содержит интерактивную схему с data-home-arch.
JS-логика управляет показом блоков.

ЧТО ВЫНЕСТИ В PROPS:
- title: string ("АРХИТЕКТУРА МЕТОДА DOM")
- subtitle: string
- outerHouse: { title: string, items: Array<{ name: string, desc: string }> }
- innerHouse: { title: string, items: Array<{ name: string, desc: string }> }

SEO: Заголовок секции — <h2>. «Внешний Дом» и «Внутренний Дом» — <h3>.
JS-логику перенеси в <script> тег.
```

---

## Секция 6: Author — «Анна Камаллая Хефорс» (строки 5390–5434)

```
ЗАДАЧА: Создать компонент AuthorSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5390–5434

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/AuthorSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- subtitle: string ("АВТОР МЕТОДА DOM")
- title: string ("Анна Камаллая Хефорс")
- bio: string[] (параграфы биографии — 4 штуки)
- quote: { text: string, author: string }
- badges: Array<{ text: string }> (4 бейджа: "Автор метода DOM", "Автор бестселлеров", "+ 80 000 учеников по всему миру", "Международное сообщество единомышленников")
- image: { src: string, alt: string }
- cta: { text: string, url: string } ("ПОДРОБНЕЕ ОБ АВТОРЕ" → /ru/about/)

SEO: Заголовок — <h2>.
```

---

## Секция 7: Programs — «Выбери свой путь домой» (строки 5436–5458)

```
ЗАДАЧА: Создать компонент ProgramsSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5436–5458
(секция с каруселью программ, data-home-programs)

ОСОБЕННОСТЬ: Карусель программ генерируется JavaScript.
Данные программ — в JS после строки 9000.

ЧТО СДЕЛАТЬ:
1. Найди массив данных программ в JS-блоке source-DOM.html
2. Вынеси в homePageData.programs
3. HTML-каркас скопируй как есть
4. JS-логику карусели перенеси в <script>

PROPS:
- title: string ("Выбери свой путь домой")
- filters: Array<{ id: string, label: string }>
- programs: Array<{ id: string, title: string, desc: string, category: string, url: string }>

SEO: Заголовок — <h2>.
Ссылки на продукты: <a href="/ru/products/{slug}/">
```

---

## Секция 8: Reviews — «Истории трансформации» (строки 5460–5494)

```
ЗАДАЧА: Создать компонент ReviewsSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5460–5494
(секция с отзывами, data-home-reviews)

ОСОБЕННОСТЬ: Отзывы генерируются JavaScript + есть модальное окно.
Бегущая строка (flow) — отдельный визуальный элемент.

ЧТО СДЕЛАТЬ:
1. Найди массив отзывов в JS source-DOM.html
2. Вынеси в homePageData.reviews
3. HTML-каркас + модалка скопируй как есть
4. JS-логику перенеси в <script>

PROPS:
- title: string ("Истории трансформации через DOM")
- reviews: Array<{ name: string, text: string, photo?: string, meta?: string }>
- flowTexts: string[] (тексты бегущей строки)

SEO: Заголовок — <h2>.
```

---

## Секция 9: App — «DOM всегда с тобой» (строки 5496–5540)

```
ЗАДАЧА: Создать компонент AppSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5496–5540

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/AppSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- subtitle: string ("ПРИЛОЖЕНИЕ DOM · IOS / ANDROID")
- title: string ("DOM всегда с тобой")
- description: string ("Аудиосессии, нейроинструменты и практики...")
- featureCards: Array<{ title: string, icon?: string }> (карточки для бегущих лент: "Музыка внимания", "Цели и намерения", "Сон и восстановление", "Фокус на день", "Трекер состояния", "Дыхательные практики", "Антистресс", "Ритм благодарности", "Путь DOM" и т.д.)
- phoneMockup: { src: string, alt: string }
- primaryCta: { text: string, url: string } ("УЗНАТЬ ПОДРОБНЕЕ")
- secondaryCta: { text: string, url: string } ("ПЕРЕЙТИ НА САЙТ ПРИЛОЖЕНИЯ")
- appStore: { url: string, qrImage: string }
- googlePlay: { url: string, qrImage: string }

ОСОБЕННОСТЬ: Две бегущие ленты с карточками функций (верхняя и нижняя),
мокап телефона по центру поверх них. Ленты анимированы JS/CSS.
Перенеси JS-логику бегущих лент в <script>.

SEO: Заголовок — <h2>.
Ссылки на магазины — с rel="noopener noreferrer" target="_blank".
```

---

## Секция 10: Knowledge Base — «База знаний» (строки 5542–5586)

```
ЗАДАЧА: Создать компонент KnowledgeBaseSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5542–5586

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/KnowledgeBaseSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- title: string ("База знаний")
- categories: Array<{
    title: string,
    description: string,
    articles: Array<{ title: string, url: string }>
  }>

SEO: Заголовок секции — <h2>. Названия категорий — <h3>.
Ссылки на статьи: <a href="/ru/blog/{slug}/">
```

---

## Секция 11: FAQ — «Часто задаваемые вопросы» (строки 5588–5664)

```
ЗАДАЧА: Создать компонент FAQSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5588–5664

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/FAQSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- title: string ("Часто задаваемые вопросы")
- items: Array<{ question: string, answer: string }>

ОСОБЕННОСТЬ: Аккордеон управляется JS (data-home-faq-toggle).
Перенеси JS-логику в <script>.

SEO: Заголовок — <h2>.
Добавь JSON-LD Schema.org типа FAQPage:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer }
  }))
}
</script>
```

---

## Секция 12: Final CTA — «Начни путь к себе сегодня» (строки 5666–5696)

```
ЗАДАЧА: Создать компонент FinalCtaSection.astro.

ИСТОЧНИК: source-DOM.html, строки 5666–5696

ЦЕЛЕВОЙ ФАЙЛ: src/components/sections/FinalCtaSection.astro

ЧТО ВЫНЕСТИ В PROPS:
- title: string ("Начни путь к себе сегодня.")
- subtitle: string ("Трансформация начинается с одного решения. Оставь заявку — и мы подберём твою точку входа в систему DOM.")
- image: { src: string, alt: string } (портрет Анны)
- imageCaption: { name: string, role: string } ("АННА КАМАЛЛАЯ ХЕФОРС", "ОСНОВАТЕЛЬ МЕТОДА DOM")
- form: {
    fields: Array<{ name: string, placeholder: string, type: string }>
    submitText: string ("ОТПРАВИТЬ ЗАЯВКУ")
    disclaimer: string ("Данные в безопасности. Ответим в течение 24 часов.")
  }

ОСОБЕННОСТЬ: Это лид-форма. В статическом Astro-сайте форму можно
обрабатывать через Netlify Forms (добавить атрибут netlify на <form>)
или отправлять на внешний endpoint. Пока сделай HTML-форму с action="#",
обработку подключим позже.

ВАЖНО: В оригинале здесь <h1>, но для SEO нужен <h2> с теми же
CSS-классами, чтобы визуально выглядело так же.
```

---

## Сборка главной страницы

После того как все 12 компонентов готовы:

```
ЗАДАЧА: Обновить src/pages/ru/index.astro

Страница должна:
1. Импортировать все секции из src/components/sections/
2. Импортировать данные из src/data/pages/home.ts
3. Передать данные каждому компоненту через props
4. Использовать BaseLayout с правильными SEO мета-тегами
5. НЕ содержать никакого хардкод-контента

Структура файла:
---
import BaseLayout from '../../layouts/BaseLayout.astro'
import { homePageData } from '../../data/pages/home'
import { createPageMeta } from '../../data/seo/defaults'
import HeroSection from '../../components/sections/HeroSection.astro'
import IntentSlider from '../../components/sections/IntentSlider.astro'
// ...остальные импорты

const meta = createPageMeta({
  title: 'DOM | Системный Метод Анны Хефорс',
  description: 'Трансформация жизни через системный подход. 6 направлений, онлайн-программы, нейротренажёры. Метод Анны Хефорс.',
  canonicalUrl: '/ru/',
  ogImage: '/dom-assets/og-home.jpg',
})
---
<BaseLayout meta={meta}>
  <HeroSection {...homePageData.hero} />
  <IntentSlider {...homePageData.intent} />
  <ManifestSection {...homePageData.manifest} />
  <MissionSection {...homePageData.mission} />
  <ArchitectureSection {...homePageData.architecture} />
  <AuthorSection {...homePageData.author} />
  <ProgramsSection {...homePageData.programs} />
  <ReviewsSection {...homePageData.reviews} />
  <AppSection {...homePageData.app} />
  <KnowledgeBaseSection {...homePageData.knowledgeBase} />
  <FAQSection {...homePageData.faq} />
  <FinalCtaSection {...homePageData.finalCta} />
</BaseLayout>

Вот так выглядит идеальная CMS-ready страница:
- Ноль хардкода
- Все данные из одного файла
- Подключить CMS = заменить источник данных
```

---

## Порядок выполнения

**ВАЖНО: Делай секции В ПОРЯДКЕ ИХ РАСПОЛОЖЕНИЯ НА СТРАНИЦЕ.**
Это реальный порядок секций сверху вниз, как они идут на сайте:

1. **Hero** — бейдж + H1 + подзаголовок + 2 кнопки + портрет с визиткой
2. **Intent Slider** — «Для тех, кто хочет большего» — карусель карточек-направлений с JS
3. **Manifest** — «DOM — это когда ты наконец возвращаешься домой» — картинка + текст + подпись
4. **Mission** — «Миссия проекта DOM» — три параграфа в карточке
5. **Architecture** — «Архитектура метода DOM» — Внешний/Внутренний Дом + диаграмма + CTA
6. **Author** — «Анна Камаллая Хефорс» — портрет + био + цитата + 4 бейджа + CTA
7. **Programs** — «Выбери свой путь домой» — фильтры + карусель продуктов с JS
8. **Reviews** — «Истории трансформации» — 3 карточки отзывов + бегущая строка участников
9. **App** — «DOM всегда с тобой» — мокап телефона + бегущие ленты функций + QR-коды
10. **Knowledge Base** — «База знаний» — 3 карточки-категории со статьями
11. **FAQ** — «Часто задаваемые вопросы» — аккордеон + Schema.org
12. **Final CTA** — «Начни путь к себе сегодня» — портрет + лид-форма (Имя, Email, Telegram)

Делай по одной секции, проверяй, потом следующая.
