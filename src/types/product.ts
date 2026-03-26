export interface ProductForWhom {
  title: string;
  desc: string;
}

export interface ProductModule {
  name: string;
  desc: string;
}

export interface ProductReview {
  text: string;
  author: string;
}

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductHeroMedia {
  src: string;
  alt: string;
}

export interface ProductHeroVideoPreview {
  thumbnail: string;
  videoUrl: string;
  alt: string;
}

export interface ProductHeroStat {
  icon?: string;
  text: string;
}

export interface ProductHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  tagline: string;
  quote: string;
  backLink: string;
  videoPreview?: ProductHeroVideoPreview;
  heroImage?: ProductHeroMedia;
  stats: ProductHeroStat[];
}
