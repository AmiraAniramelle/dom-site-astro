# Блок 3: Сборка страницы shop.astro

**Обновить:** src/pages/ru/shop.astro

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro'
import ShopHero from '../../components/shop/ShopHero.astro'
import ShopBrandCard from '../../components/shop/ShopBrandCard.astro'
import { shopPageData } from '../../data/pages/shop'
import { createPageMeta } from '../../data/seo/defaults'

const meta = createPageMeta(shopPageData.seo)
---
<BaseLayout meta={meta}>
  <section class="bg-white min-h-screen pt-20 pb-24">
    <div class="max-w-6xl mx-auto px-4">
      <ShopHero {...shopPageData.hero} />
      {shopPageData.brands.map(brand => (
        <ShopBrandCard {...brand} />
      ))}
    </div>
  </section>
</BaseLayout>
```

## Хлебные крошки: sr-only (Главная → Магазин)

## Мобильная версия (@media max-width: 768px):
- H1: clamp(1.8rem, 8vw, 2.4rem)
- Карточка бренда: одна колонка, картинка сверху
- Кнопки: flex-col, w-full
- Карточка: p-5, rounded-2xl

НЕ ТРОГАЙ Footer, Navbar.
