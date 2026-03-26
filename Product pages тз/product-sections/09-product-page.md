# Блок 9: Шаблон страницы [slug].astro

**Создать:** src/pages/ru/products/[slug].astro

```astro
---
import { getCollection } from 'astro:content'
import BaseLayout from '../../../layouts/BaseLayout.astro'
import ProductHero from '../../../components/products/ProductHero.astro'
import ProductShowcase from '../../../components/products/ProductShowcase.astro'
import ProductMission from '../../../components/products/ProductMission.astro'
import ProductForWhom from '../../../components/products/ProductForWhom.astro'
import ProductResults from '../../../components/products/ProductResults.astro'
import ProductReviews from '../../../components/products/ProductReviews.astro'
import ProductFAQ from '../../../components/products/ProductFAQ.astro'
import ProductEnroll from '../../../components/products/ProductEnroll.astro'
import { createPageMeta } from '../../../data/seo/defaults'

export async function getStaticPaths() {
  const products = await getCollection('products')
  return products.map(product => ({
    params: { slug: product.data.slug },
    props: { product },
  }))
}

const { product } = Astro.props
const p = product.data
const meta = createPageMeta({
  title: p.title + ' | Программы DOM',
  description: p.shortDesc,
  canonicalUrl: `/ru/products/${p.slug}/`,
})

const directionUrls = {
  'path-money': '/ru/path/money/',
  'path-relations': '/ru/path/relations/',
  'path-mental': '/ru/path/mental/',
  'path-soul': '/ru/path/soul/',
  'path-awareness': '/ru/path/awareness/',
  'path-worldview': '/ru/path/worldview/',
}
---
<BaseLayout meta={meta}>
  <section class="product-page-shell min-h-screen pt-12 pb-32">
    <div class="max-w-5xl mx-auto px-4">
      <ProductHero
        title={p.title}
        tag={p.tag}
        shortDesc={p.shortDesc}
        backLink={{ text: '← Назад к направлению', url: directionUrls[p.backLink] || '/ru/path/' }}
      />
      <ProductShowcase
        title={p.title}
        modulesCount={p.modules?.length || 1}
        format="Онлайн"
        access="Сразу после заявки"
      />
      <ProductMission mission={p.mission} whyImportant={p.whyImportant} />
      {p.forWhom?.length > 0 && <ProductForWhom items={p.forWhom} />}
      <ProductResults results={p.results} modules={p.modules} />
      {p.reviews?.length > 0 && <ProductReviews reviews={p.reviews} />}
      {p.faq?.length > 0 && <ProductFAQ items={p.faq} />}
      <ProductEnroll
        title={p.title}
        shortDesc={p.shortDesc}
        price={p.price}
        tag={p.tag}
        productSlug={p.slug}
      />
    </div>
  </section>
</BaseLayout>
```

## Schema.org:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "title",
  "description": "shortDesc",
  "offers": {
    "@type": "Offer",
    "price": "цена из price",
    "priceCurrency": "RUB"
  }
}
```

## Хлебные крошки sr-only:
Главная → Карта пути → Направление → Название продукта

НЕ ТРОГАЙ Footer, Navbar.
