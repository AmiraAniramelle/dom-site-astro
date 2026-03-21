# Правила для страницы «Карта Пути»

> Файл-источник: source-DOM/source-DOM.html, строки 5782–5915
> Страница: src/pages/ru/path/index.astro
> Данные: src/data/pages/path.ts (экспорт pathPageData)

## Правила

1. ВИЗУАЛЬНО ИДЕНТИЧНО оригиналу на десктопе. Классы копировать как есть.
2. CMS-READY: все тексты, картинки, ссылки, описания направлений — через props.
   Данные в pathPageData. Компонент НЕ содержит хардкод.
3. SEO: один H1 на страницу (в первом блоке). Остальные H2, H3, H4.
4. ССЫЛКИ: onclick="navigateTo('path-money')" → <a href="/ru/path/money/">
5. МОБИЛЬНАЯ ВЕРСИЯ: одна колонка, компактные отступы, без overflow хаков, без zoom, без ellipsis.
6. КАРТИНКИ: обычные <img> с alt, width, height.
7. Хлебные крошки: скрыты визуально (sr-only), но есть в HTML и JSON-LD.
8. НЕ ТРОГАЙ Footer, Navbar.

## SEO мета-теги (через BaseLayout):
- title: "Карта Пути DOM — 6 направлений трансформации | DOM"
- description: "Деньги, Отношения, Ментальное здоровье, Душа, Осознанность, Мировоззрение. Выберите своё направление в системе DOM."
- canonicalUrl: "/ru/path/"

## Schema.org:
- WebPage + BreadcrumbList (Главная → Карта пути)
