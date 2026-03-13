# Секция 8: Reviews — «Истории трансформации через DOM»

**Источник:** source-DOM.html, строки 5460–5494

**Создать файл:** src/components/sections/ReviewsSection.astro

## Что на экране
- Подзаголовок: "ОТЗЫВЫ"
- Заголовок H2: "Истории трансформации через DOM"
- 3 большие карточки отзывов: фото, имя (H3), профессия + город, текст отзыва, ссылка "ЧИТАТЬ ПОЛНОСТЬЮ"
- Кнопка: "ЧИТАТЬ ВСЕ ИСТОРИИ" → /ru/reviews/
- Текст: "ТЫСЯЧИ УЧАСТНИКОВ ПРОХОДЯТ ТРАНСФОРМАЦИЮ С DOM"
- Бегущая строка с мини-карточками участников: фото, имя, город, короткий результат
- Модальное окно для полного отзыва (появляется по клику на "ЧИТАТЬ ПОЛНОСТЬЮ")

## Props
```typescript
interface Props {
  eyebrow: string
  title: string
  reviews: Array<{
    name: string; role: string; city: string;
    text: string; fullText: string; photo: string
  }>
  cta: { text: string; url: string }
  flowTitle: string
  flowCards: Array<{ name: string; city: string; result: string; photo: string }>
}
```

## Особенность
Модальное окно и бегущая строка управляются JS. Перенеси логику в <script>.

## Данные
Добавь в homePageData.reviews. Найди массив отзывов в JS source-DOM.html.

## После выполнения
Добавь компонент в src/pages/ru/index.astro в правильном порядке (секция 8 из 12). Импортируй данные из homePageData. Проверь визуально.
