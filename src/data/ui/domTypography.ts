/**
 * Типографика DOM-Design-System.md §14 + TZ-BusinessMission-FullAudit.md §6 (единые ступени).
 * Заголовки: font-messiri; текст: font-montserrat.
 */

/** H1 — §14 / аудит: text-5xl md:text-7xl */
export const dsH1 =
  'font-messiri text-5xl leading-[1.05] tracking-tight text-dom-graphite md:text-7xl';

/** H2 — text-4xl md:text-5xl */
export const dsH2 =
  'font-messiri text-4xl leading-tight text-dom-graphite md:text-5xl';

/** H3 — text-3xl md:text-4xl */
export const dsH3 =
  'font-messiri text-3xl leading-snug text-dom-graphite md:text-4xl';

/** H4 */
export const dsH4 =
  'font-messiri text-2xl leading-snug text-dom-graphite md:text-3xl';

/**
 * Основной текст — text-base md:text-lg
 */
export const dsBody =
  'font-montserrat text-base leading-relaxed text-dom-graphite/80 md:text-lg';

export const dsBodyLight =
  'font-montserrat text-base font-light leading-relaxed text-dom-graphite/80 md:text-lg';

/** §6 eyebrow (светлый фон) */
export const dsEyebrow =
  'font-montserrat text-[11px] uppercase tracking-[0.12em] text-dom-gold-dark md:text-xs';

/** §6 на тёмном фоне */
export const dsEyebrowOnDark =
  'font-montserrat text-[11px] uppercase tracking-[0.12em] text-dom-gold/85 md:text-xs';

/** Подписи к мета-полоске — §6 eyebrow + §14 текст значений */
export const dsMetaLabel =
  'mb-1.5 text-center font-montserrat text-[11px] uppercase tracking-[0.12em] text-dom-gold-dark md:text-xs';

export const dsMetaValue =
  'text-center font-montserrat text-sm font-semibold leading-snug text-dom-graphite md:text-base lg:text-lg';

/** Крупная цена / число — шкала как у H2 */
export const dsPriceDisplay =
  'font-messiri text-4xl leading-none text-dom-graphite md:text-5xl';
