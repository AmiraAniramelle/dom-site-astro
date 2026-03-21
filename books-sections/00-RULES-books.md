# Правила для страницы «Книги автора»

> Файл-источник: source-DOM/source-DOM.html, строки 6600–6716
> Страница: src/pages/ru/books.astro
> Данные: src/data/pages/books.ts (экспорт booksPageData)

## Правила
1. Визуально идентично оригиналу. Классы копировать как есть.
2. CMS-READY: все тексты, картинки, ссылки — через props.
3. SEO: один H1 на страницу (в hero). Остальные H2.
4. Ссылки: onclick → <a href>. Внешние ссылки (Ozon, Amazon): rel="noopener noreferrer" target="_blank"
5. Без zoom, ellipsis, overflow хаков, орнаментов.
6. Картинки: обычные <img> с alt, width, height, loading="lazy".
7. Хлебные крошки: sr-only.
8. НЕ ТРОГАЙ Footer, Navbar.

## SEO мета-теги:
- title: "Книги Камаллаи Хефорс — Гармония в семье, Расшифровка генома человечности | DOM"
- description: "Авторские книги метода DOM: практическое руководство по отношениям и духовно-научный синтез. Купить на Ozon и Amazon."
- canonicalUrl: "/ru/books/"

## Schema.org:
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Книги Камаллаи Хефорс",
  "description": "Авторские книги метода DOM",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dom-site.com/ru/"},
      {"@type": "ListItem", "position": 2, "name": "Книги автора", "item": "https://dom-site.com/ru/books/"}
    ]
  }
}
```

Также для каждой книги добавь Schema.org Book:
```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Гармония в семье",
  "author": {"@type": "Person", "name": "Анна Камаллая Хефорс"},
  "url": "https://www.ozon.ru/..."
}
```
