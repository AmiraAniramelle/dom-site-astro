# Правила для страницы «Об авторе»

> Файл-источник: source-DOM/source-DOM.html, строки 6178–6437
> Страница: src/pages/ru/about.astro
> Данные: src/data/pages/about.ts (экспорт aboutPageData)

## Правила
1. Визуально идентично оригиналу. Классы копировать как есть.
2. CMS-READY: все тексты, картинки, ссылки, статистика — через props. Данные в aboutPageData.
3. SEO: один H1 на страницу (блок 1). Остальные H2, H3, H4.
4. Ссылки: onclick → <a href="/ru/.../">
5. Без zoom, без ellipsis, без overflow хаков.
6. Картинки: обычные <img> с alt, width, height, loading="lazy".
7. Хлебные крошки: sr-only (скрыты визуально).
8. НЕ ТРОГАЙ Footer, Navbar, другие страницы.

## SEO мета-теги:
- title: "Анна Камаллая Хефорс — Основатель метода DOM | Об авторе"
- description: "Исследователь системной природы жизни, автор бестселлеров, создатель метода DOM. 300 000+ слушателей, 8+ лет практики."
- canonicalUrl: "/ru/about/"
- ogType: "profile"

## Schema.org:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Анна Камаллая Хефорс",
  "jobTitle": "Основатель метода DOM",
  "description": "Исследователь системной природы жизни и создатель метода DOM",
  "url": "https://dom-site.com/ru/about/",
  "image": "https://dom-site.com/dom-assets/anna-portrait.png"
}
```
Breadcrumbs: Главная → Об авторе

## Декоративные элементы (НЕ ЗАБЫТЬ):
- ornament-flower.png в углах (absolute, opacity-20)
- Золотое свечение (bg-dom-gold rounded-full opacity-[0.05] blur-[100px])
