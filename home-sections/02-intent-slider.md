# Секция 2: Intent Slider — «Для тех, кто хочет большего»

**Источник:** source-DOM.html, строки 5228–5252

**Создать файл:** src/components/sections/IntentSlider.astro

## Что на экране
- Подзаголовок: "ЭТО ДЛЯ ТЕБЯ"
- Заголовок H2: "Для тех, кто хочет большего"
- Подпись: "Выбери свое направление — и мы покажем твой путь в DOM."
- Карусель из 5+ карточек с фото и текстом ("Я хочу выстроить ДЕНЬГИ И СВОБОДУ", "Я хочу глубже В ОТНОШЕНИЯ", "Я хочу раскрыть СВОЁ СЕРДЦЕ", "Я хочу жить ИЗ СВОЕГО МЕСТА", "Я хочу найти СЕБЯ НАСТОЯЩЕГО")
- Стрелки навигации слева и справа
- Точки пагинации внизу
- Центральная карточка крупнее остальных

## Props

```typescript
interface Props {
  eyebrow: string
  title: string
  subtitle: string
  cards: Array<{
    id: string
    image: string
    topText: string
    boldText: string
    url: string
  }>
}
```

## Данные
Добавь в homePageData.intent. Найди массив данных карточек в JS-блоке source-DOM.html (ищи intent, INTENT или home-intent после строки 9000).

## Особенность
Карусель управляется JavaScript. Найди JS-логику слайдера в source-DOM.html и перенеси в <script> тег внутри компонента. Каждая карточка — ссылка на соответствующее направление (/ru/path/money/, /ru/path/relations/ и т.д.).

## После выполнения
Добавь IntentSlider в index.astro после HeroSection.
