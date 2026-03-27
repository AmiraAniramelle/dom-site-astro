/**
 * Кнопки по DOM-Design-System.md §3 — единый стандарт для страниц продуктов и др.
 * Все интерактивные элементы: transition-all duration-300 (или transition-colors duration-300 для типа 4).
 */

/** Кнопка 1: главная CTA — DOM-Design-System §3 (кнопка 1) + TZ-BusinessMission-FullAudit §5 */
export const domButtonPrimary =
  'block w-full rounded-xl bg-gold-gradient py-4 px-8 text-center font-montserrat text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_28px_rgba(217,179,114,0.36)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(217,179,114,0.45)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dom-gold/50 focus-visible:ring-offset-2 md:w-auto';

/** Кнопка 2: второстепенная — §3 + §14 */
export const domButtonSecondary =
  'block w-full rounded-xl border border-dom-graphite/20 py-3 px-8 text-center font-montserrat text-[13px] font-semibold uppercase tracking-[0.08em] text-dom-graphite transition-all duration-300 hover:border-dom-gold/50 hover:bg-dom-gold/10 hover:text-dom-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dom-gold/45 focus-visible:ring-offset-2 md:w-auto md:text-xs';

/**
 * Кнопка 3: контурная на тёмном фоне
 * (если нужна альтернатива заливке на dom-dark-shell)
 */
export const domButtonOutlineOnDark =
  'block w-full rounded border border-dom-gold/50 py-3 px-6 text-center font-montserrat text-[13px] font-medium text-dom-gold transition-all duration-300 hover:bg-dom-gold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dom-gold/60 focus-visible:ring-offset-2 md:w-auto md:text-sm';

/** Кнопка 4: текстовая ссылка — §3 (text-sm) */
export const domButtonTextLink =
  'inline-flex items-center font-montserrat text-[13px] font-bold uppercase tracking-wider text-dom-gold-dark transition-colors duration-300 hover:text-dom-graphite md:text-sm';

/** Ссылки в юридическом тексте форм (золото → графит при hover, DS §2) */
export const domLinkProductLegal =
  'font-montserrat font-medium text-dom-gold-dark underline underline-offset-2 transition-colors duration-300 hover:text-dom-graphite';
