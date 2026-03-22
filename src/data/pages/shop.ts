/**
 * Страница «Магазин» — shop-sections/00-RULES-shop.md, 01–03 (hero, brand card, page)
 */

export type ShopBrandCardData = {
  title: string;
  paragraphs: string[];
  image: { src: string; alt: string };
  primaryCta: { text: string; url: string };
  secondaryCta: { text: string; url: string };
};

export const shopPageData = {
  seo: {
    title: 'Магазин DOM — Мерч MIROZDANIE и DOM | Стиль метода',
    description:
      'Лимитированные коллекции MIROZDANIE и DOM: худи, футболки, аксессуары. Стильные вещи для жизни в ритме метода.',
    canonicalUrl: '/ru/shop/',
  },
  hero: {
    eyebrow: 'DOM STORE',
    title: 'Магазин DOM',
    subtitle:
      'Внутри магазина DOM представлены два бренда: MIROZDANIE и DOM. Стильные вещи для ежедневной практики, вдохновения и жизни в ритме метода.',
  },
  brands: [
    {
      title: 'Бренды магазина: MIROZDANIE и DOM',
      paragraphs: [
        'В магазине DOM вы найдете лимитированные коллекции MIROZDANIE и DOM: худи, футболки, аксессуары и другие элементы фирменного стиля, которые поддерживают философию двух брендов.',
        'Коллекции обновляются. Чтобы получить актуальные позиции и ссылки на покупку, выберите нужный формат ниже.',
      ],
      image: {
        src: '/dom-assets/DOM расширенная версия 2 градиент.png',
        alt: 'Мерч MIROZDANIE и DOM',
      },
      primaryCta: {
        text: 'Получить ссылку на магазин',
        url: 'https://t.me/itbrain_support?text=%D0%A5%D0%BE%D1%87%D1%83%20%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83%20%D0%BD%D0%B0%20%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20MIROZDANIE%20%D1%81%20%D0%BC%D0%B5%D1%80%D1%87%D0%B5%D0%BC',
      },
      secondaryCta: {
        text: 'Запросить каталог',
        url: 'https://t.me/itbrain_support?text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B0%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%20%D0%BC%D0%B5%D1%80%D1%87%D0%B0%20MIROZDANIE',
      },
    },
  ] satisfies readonly ShopBrandCardData[],
} as const;
