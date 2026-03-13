# Секция 7: Programs — «Выбери свой путь домой»

**Источник:** source-DOM.html, строки 5436–5458

**Создать файл:** src/components/sections/ProgramsSection.astro

## Что на экране
- Подзаголовок: "ПРОГРАММЫ DOM"
- Заголовок H2: "Выбери свой путь домой"
- Подпись: "Выбери направление — и мы покажем программы именно для тебя."
- Фильтры-кнопки: Все программы (активная, золотая), Деньги, Отношения, Ментальное здоровье, Душа, Осознанность, Мировоззрение
- Карусель карточек продуктов (4 видимых + стрелки): каждая карточка — фото, бейдж категории, бейдж "ФЛАГМАН" (если есть), тип программы, название, формат, ссылка "ПОДРОБНЕЕ →"
- Точки пагинации
- Кнопка: "ОТКРЫТЬ ВСЮ КАРТУ ПУТИ" → /ru/path/

## Props
```typescript
interface Props {
  eyebrow: string
  title: string
  subtitle: string
  filters: Array<{ id: string; label: string }>
  programs: Array<{
    id: string; title: string; category: string; type: string;
    format: string; image: string; isFlagship: boolean; url: string
  }>
  cta: { text: string; url: string }
}
```

## Особенность
Карусель и фильтрация управляются JavaScript. Найди JS-логику в source-DOM.html (data-home-programs, data-home-program-carousel) и перенеси в <script>.
Ссылки на продукты: <a href="/ru/products/{slug}/">

## Данные
Добавь в homePageData.programs. Данные программ найди в JS source-DOM.html.

## После выполнения
Добавь компонент в src/pages/ru/index.astro в правильном порядке (секция 7 из 12). Импортируй данные из homePageData. Проверь визуально.
