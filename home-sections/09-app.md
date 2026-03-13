# Секция 9: App — «DOM всегда с тобой»

**Источник:** source-DOM.html, строки 5496–5540

**Создать файл:** src/components/sections/AppSection.astro

## Что на экране
- Большая карточка на тёплом фоне
- Две бегущие ленты с золотыми карточками функций (верхняя и нижняя): "Музыка внимания", "Цели и намерения", "Сон и восстановление", "Фокус на день", "Трекер состояния", "Дыхательные практики", "Антистресс", "Ритм благодарности", "Путь DOM" и т.д.
- Мокап телефона с логотипом DOM по центру поверх лент
- Подзаголовок: "ПРИЛОЖЕНИЕ DOM · IOS / ANDROID"
- Заголовок H2: "DOM ВСЕГДА С ТОБОЙ"
- Описание: "Аудиосессии, нейроинструменты и практики..."
- Две кнопки: "УЗНАТЬ ПОДРОБНЕЕ" (золотая) и "ПЕРЕЙТИ НА САЙТ ПРИЛОЖЕНИЯ" (контурная)
- Два блока с QR-кодами: iOS / App Store и Android / Google Play

## Props
```typescript
interface Props {
  eyebrow: string
  title: string
  description: string
  featureCards: Array<{ title: string; icon?: string }>
  phoneMockup: { src: string; alt: string }
  primaryCta: { text: string; url: string }
  secondaryCta: { text: string; url: string }
  stores: Array<{ platform: string; label: string; url: string; qrImage: string }>
}
```

## Особенность
Бегущие ленты анимированы CSS/JS (data-home-app-track-top, data-home-app-track-bottom). Перенеси логику в <script>.

## Данные
Добавь в homePageData.app.

## После выполнения
Добавь компонент в src/pages/ru/index.astro в правильном порядке (секция 9 из 12). Импортируй данные из homePageData. Проверь визуально.
