# Блок 1: Hero — Анна Камаллая Хефорс (строки 6185–6229)

**Создать:** src/components/about/AboutHero.astro

## Что на экране
- Карточка с золотистым градиентом: bg-[linear-gradient(150deg,#fff7e8_0%,#f5e2bc_58%,#f1d8aa_100%)]
- Слева: H1 "Анна Камаллая Хефорс", описание, две кнопки
- Справа: портрет в скруглённой рамке
- Под карточкой: 4 stat-карточки в ряд (300 000+, 8+, 2, 6)

## Props
```typescript
interface Props {
  title: string
  description: string
  primaryCta: { text: string; url: string }
  secondaryCta: { text: string; url: string }
  portrait: { src: string; alt: string }
  stats: Array<{ value: string; label: string }>
}
```

## Точные классы карточки hero:
class="about-light-card rounded-[2.6rem] p-7 md:p-10 bg-[linear-gradient(150deg,#fff7e8_0%,#f5e2bc_58%,#f1d8aa_100%)]"

## Точные классы stat-карточек:
class="about-stat-card fade-in rounded-2xl p-5 md:p-6 border border-dom-gold/45 bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(246,234,205,0.92))] shadow-[0_10px_24px_rgba(126,91,35,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(126,91,35,0.2)]"

НЕ ТРОГАЙ Footer, Navbar.
