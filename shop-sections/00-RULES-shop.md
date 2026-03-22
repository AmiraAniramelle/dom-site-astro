# Правила для страницы «Магазин DOM»

> Файл-источник: source-DOM/source-DOM.html, строки 6485–6521
> Страница: src/pages/ru/shop.astro
> Данные: src/data/pages/shop.ts (экспорт shopPageData)
> Прочитай DOM-Design-System.md

## Правила
1. ВСЕ данные через props. Никакого хардкода.
2. Configurable: тексты, картинки, ссылки, кнопки, бренды.
3. НЕ ТРОГАЙ Footer, Navbar.
4. Следуй DOM-Design-System.md.

## SEO:
- title: "Магазин DOM — Мерч MIROZDANIE и DOM | Стиль метода"
- description: "Лимитированные коллекции MIROZDANIE и DOM: худи, футболки, аксессуары. Стильные вещи для жизни в ритме метода."
- canonicalUrl: "/ru/shop/"

## Schema.org:
```json
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Магазин DOM",
  "description": "Лимитированные коллекции MIROZDANIE и DOM",
  "url": "https://dom-site.com/ru/shop/",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dom-site.com/ru/"},
      {"@type": "ListItem", "position": 2, "name": "Магазин", "item": "https://dom-site.com/ru/shop/"}
    ]
  }
}
```
