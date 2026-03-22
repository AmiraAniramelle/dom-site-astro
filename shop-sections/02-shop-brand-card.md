# Блок 2: ShopBrandCard — Карточка бренда (переиспользуемый компонент)

**Создать:** src/components/shop/ShopBrandCard.astro

ОДИН компонент для каждого бренда. Сейчас один (MIROZDANIE + DOM),
но в будущем можно добавить ещё. Рендерить через цикл из массива.

## Что на экране
- Большая тёплая карточка с золотой рамкой
- Слева: картинка бренда в тёмной рамке с золотым свечением
- Справа: H2, два параграфа, две кнопки

## Точные классы из оригинала:

Карточка обёртка:
class="rounded-[2.4rem] p-7 md:p-10 border border-dom-gold/28 
bg-[linear-gradient(140deg,rgba(255,250,238,0.95),rgba(247,232,199,0.72))] 
shadow-[0_24px_56px_rgba(126,91,35,0.18)] mb-10"

Сетка: class="grid grid-cols-1 md:grid-cols-12 gap-7 items-center"

Картинка (слева): class="md:col-span-5"
Рамка картинки:
class="aspect-[4/3] rounded-[1.6rem] overflow-hidden border border-dom-gold/30 
shadow-[0_14px_34px_rgba(90,63,25,0.2)] 
bg-[linear-gradient(130deg,rgba(42,33,21,0.94),rgba(74,54,26,0.88))] relative"
Img: class="w-full h-full object-contain p-8 opacity-95"
Свечение: class="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(217,179,114,0.35),transparent_45%)]"

Текст (справа): class="md:col-span-7"
H2: class="font-messiri text-4xl text-dom-graphite mb-4"
Параграф 1: class="font-montserrat text-dom-graphite/82 leading-relaxed mb-4"
Параграф 2: class="font-montserrat text-dom-graphite/78 leading-relaxed mb-6"
Кнопки: class="flex flex-col sm:flex-row gap-3"

Кнопка 1 (главная): Кнопка 5 из дизайн-системы (внешняя ссылка)
Кнопка 2 (второстепенная): Кнопка 2 из дизайн-системы с золотым hover

Обе кнопки: target="_blank" rel="noopener noreferrer"

## Props
```typescript
interface Props {
  title: string
  paragraphs: string[]
  image: { src: string; alt: string }
  primaryCta: { text: string; url: string }
  secondaryCta: { text: string; url: string }
}
```

## Данные для shop.ts:
```typescript
brands: [
  {
    title: 'Бренды магазина: MIROZDANIE и DOM',
    paragraphs: [
      'В магазине DOM вы найдете лимитированные коллекции MIROZDANIE и DOM: худи, футболки, аксессуары и другие элементы фирменного стиля, которые поддерживают философию двух брендов.',
      'Коллекции обновляются. Чтобы получить актуальные позиции и ссылки на покупку, выберите нужный формат ниже.'
    ],
    image: {
      src: '/dom-assets/DOM расширенная версия 2 градиент.png',
      alt: 'Мерч MIROZDANIE и DOM'
    },
    primaryCta: {
      text: 'Получить ссылку на магазин',
      url: 'https://t.me/itbrain_support?text=Хочу%20ссылку%20на%20магазин%20MIROZDANIE%20с%20мерчем'
    },
    secondaryCta: {
      text: 'Запросить каталог',
      url: 'https://t.me/itbrain_support?text=Хочу%20актуальный%20каталог%20мерча%20MIROZDANIE'
    },
  }
]
```

## В shop.astro рендерить через цикл:
```astro
{shopPageData.brands.map(brand => (
  <ShopBrandCard {...brand} />
))}
```

Добавить новый бренд = добавить объект в массив brands.

НЕ ТРОГАЙ Footer, Navbar.
