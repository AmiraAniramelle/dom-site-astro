# Секция 12: Final CTA — «Начни путь к себе сегодня»

**Источник:** source-DOM.html, строки 5666–5696

**Создать файл:** src/components/sections/FinalCtaSection.astro

## Что на экране
- Большая карточка на бежевом фоне
- Слева: портрет Анны + подпись "АННА КАМАЛЛАЯ ХЕФОРС" + "ОСНОВАТЕЛЬ МЕТОДА DOM"
- Справа: заголовок H2 "НАЧНИ ПУТЬ К СЕБЕ СЕГОДНЯ." (визуально крупный, как H1 в оригинале, но семантически H2)
- Подзаголовок: "Трансформация начинается с одного решения. Оставь заявку — и мы подберём твою точку входа в систему DOM."
- Лид-форма: поля Имя, Электронная почта, Telegram
- Кнопка: "ОТПРАВИТЬ ЗАЯВКУ"
- Дисклеймер: "Данные в безопасности. Ответим в течение 24 часов."

## Props
```typescript
interface Props {
  title: string
  subtitle: string
  image: { src: string; alt: string }
  imageCaption: { name: string; role: string }
  form: {
    fields: Array<{ name: string; placeholder: string; type: string }>
    submitText: string
    disclaimer: string
    endpoint?: string
  }
}
```

## Важно
- В оригинале заголовок — <h1>. Замени на <h2> с теми же CSS-классами.
- Форму сделай как HTML <form> с method="POST". Добавь атрибут data-netlify="true" для будущей интеграции с Netlify Forms. Пока action="#".

## Данные
Добавь в homePageData.finalCta.

## После выполнения
Добавь компонент в src/pages/ru/index.astro в правильном порядке (секция 12 из 12). Импортируй данные из homePageData. Проверь визуально.
