# Секция 1: Hero

**Источник:** source-DOM.html, строки 5190–5227

**Создать файл:** src/components/sections/HeroSection.astro

## Что на экране
- Бейдж с золотой иконкой DOM и текстом "DOM · институт внутренней трансформации и системного мышления · Анна Хефорс"
- Заголовок H1: "Верни себе опору. Жизнь - это система, которую можно выстроить."
- Подзаголовок: "Метод DOM - архитектура зрелой жизни..."
- Две кнопки: "НАЧАТЬ СВОЙ ПУТЬ" (золотая) и "ОТКРЫТЬ СТРУКТУРУ МЕТОДА" (контурная)
- Справа: портрет Анны в скруглённой рамке с карточкой-визиткой DOM внизу

## Props

```typescript
interface Props {
  badge: { icon: string; text: string }
  title: string
  lead: string
  primaryCta: { text: string; url: string }
  secondaryCta: { text: string; url: string }
  portrait: { src: string; alt: string }
  logo: { src: string; alt: string }
}
```

## Данные для src/data/pages/home.ts

```typescript
export const homePageData = {
  hero: {
    badge: {
      icon: '/dom-assets/dom-symbol-gold.svg',
      text: 'DOM · институт внутренней трансформации и системного мышления · Анна Хефорс'
    },
    title: 'Верни себе опору. Жизнь - это система, которую можно выстроить.',
    lead: 'Метод DOM - архитектура зрелой жизни: шесть граней единой системы, которая соединяет внешнюю реализацию и внутреннюю честность.',
    primaryCta: { text: 'Начать свой путь', url: '/ru/path/' },
    secondaryCta: { text: 'Открыть структуру метода', url: '/ru/method/' },
    portrait: { src: '/dom-assets/anna-portrait.png', alt: 'Анна Хефорс — автор метода DOM' },
    logo: { src: '/dom-assets/dom-logo-home-gold-bg.jpg', alt: 'DOM Systemic Method by Anna Hefors' }
  }
}
```

## Важно
- Это ЕДИНСТВЕННЫЙ <h1> на всей главной странице.
- onclick="navigateTo('path')" → <a href="/ru/path/">
- onclick="navigateTo('method')" → <a href="/ru/method/">

## После выполнения
Обнови src/pages/ru/index.astro — импортируй HeroSection и homePageData, передай данные через props.
