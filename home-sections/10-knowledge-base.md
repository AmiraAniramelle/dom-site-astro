# Секция 10: Knowledge Base — «База знаний»

**Источник:** source-DOM.html, строки 5542–5586

**Создать файл:** src/components/sections/KnowledgeBaseSection.astro

## Что на экране
- Заголовок H2: "База знаний"
- 3 карточки-категории в ряд, каждая содержит:
  - Заголовок H3 категории ("Порядки системы и взрослая позиция", "Роли в паре и семейной системе", "Финансовые сценарии и рост")
  - Описание
  - Ссылки на статьи блога

## Props
```typescript
interface Props {
  title: string
  categories: Array<{
    title: string
    description: string
    articles: Array<{ title: string; url: string }>
  }>
}
```

## Данные
Добавь в homePageData.knowledgeBase. Ссылки на статьи: <a href="/ru/blog/{slug}/">

## После выполнения
Добавь компонент в src/pages/ru/index.astro в правильном порядке (секция 10 из 12). Импортируй данные из homePageData. Проверь визуально.
