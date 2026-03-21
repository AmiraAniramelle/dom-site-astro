# Секция 3: Отзывы участников (строки 5921–6110)

**Создать файл:** src/components/method/MethodReviews.astro

## Что на экране

- Фон: bg-dom-beige с futuristic-grid
- H2: "Отзывы участников"
- Подзаголовок

**Видео-отзывы:**
- H3: "Студийные видео-отзывы"
- 4 карточки видео (placeholder с кнопкой play):
  - Отзыв #01, #02, #03, #04 — каждый с описанием

**Истории студентов:**
- H3: "Истории студентов"
- 10 карточек-отзывов с фото, именем, городом и текстом:
  - Татьяна Шалютина (Курагино)
  - Александр Филилеев (Оренбург)
  - Елена Герчек (Анталия)
  - Марина Борисова (Омск)
  - Наталья Киселева (Казань)
  - Ирина Бакланова (Сочи)
  - Ольга Назарова (Санкт-Петербург)
  - Екатерина Соколова (Новосибирск)
  - Лариса Евдокимова (Краснодар)
  - Светлана Мельник (Минск)

**Скриншоты из Telegram:**
- H3: "Скриншоты отзывов из Telegram"
- Сетка скриншотов

## Props

```typescript
interface Props {
  title: string
  subtitle: string
  videoReviews: {
    title: string
    items: Array<{ title: string; desc: string; videoUrl?: string }>
  }
  studentStories: {
    title: string
    items: Array<{ name: string; city: string; text: string; photo: string }>
  }
  telegramScreenshots: {
    title: string
    images: Array<{ src: string; alt: string }>
  }
}
```

## После выполнения
Добавь в method.astro после MethodPathMap.
