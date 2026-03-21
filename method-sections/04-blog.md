# Секция 4: Блог DOM (строки 6116–6176)

**Создать файл:** src/components/method/MethodBlog.astro

## Что на экране

- Фон: bg-white с futuristic-grid
- H2: "Блог DOM"
- Подзаголовок
- Сетка карточек статей блога (берутся из Content Collection blog)
- Каждая карточка: обложка, категория, тип контента, заголовок, excerpt, дата, время чтения
- Ссылки на статьи: /ru/blog/{slug}/
- CTA: "Читать все статьи" → /ru/blog/

## Props

```typescript
interface Props {
  title: string
  subtitle: string
  cta: { text: string; url: string }
  // Статьи подтягиваются из Content Collection в method.astro
  // и передаются как prop
  posts: Array<{
    slug: string; title: string; excerpt: string;
    category: string; contentType: string;
    date: string; readingTime: number; cover: string
  }>
}
```

## Особенность
Статьи блога берутся из Content Collection (src/content/blog/).
В method.astro сделай:
```
const allPosts = await getCollection('blog')
const latestPosts = allPosts.slice(0, 6)
```
И передай в компонент.

## После выполнения
Добавь в method.astro после MethodReviews. 
Это последняя секция страницы «О методе».
