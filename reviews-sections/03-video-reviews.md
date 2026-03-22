# Блок 3: VideoReviews — Видео-отзывы

**Компоненты:** `VideoReviewCard.astro`, `VideoReviewsGrid.astro`

## Поведение
- **Десктоп (md+):** в ряду 3 карточки (`gap-8`), без горизонтального скроллбара. Если видео **больше 3** — справа от заголовка круглые стрелки ← →; сдвиг `translateX` с `transition-transform duration-500`.
- **Мобильный:** одна карточка на экран, свайп влево/вправо; стрелки скрыты (`max-md:hidden`).
- **Точки:** под каруселью, `w-2 h-2 rounded-full`, активная `bg-dom-gold`, остальные `bg-dom-gold/30`. Если все помещается без прокрутки — одна точка.
- Вьюпорт: `overflow: hidden`, `scrollbar-width: none`, `::-webkit-scrollbar { display: none }`.

## Карточка (Карточка 4)
- `video-ribbon-card` + `review-filter-item`, классы: `bg-white/5 backdrop-blur-md rounded-2xl border border-dom-gold/20 p-8`, hover `hover:border-dom-gold/50 transition-all duration-300`.
- Клик по карточке — inline YouTube embed (как раньше).

## Фильтр тем
Скрытые `.hidden` карточки не участвуют в расчёте ширины; при смене фильтра индекс сбрасывается (MutationObserver).

НЕ ТРОГАЙ Footer, Navbar.
