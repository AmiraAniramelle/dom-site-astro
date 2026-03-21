# Блок 3: Зеркало домов + Внутренний DOM

**Компоненты:** `src/components/path/PathMirror.astro`, `src/components/path/PathInternalHouse.astro`  
**Данные:** `src/data/pages/path.ts` → `mirror`, `internalHouse`

---

## Финальное состояние (сохранено)

### PathMirror
- Линия + chip «Любовь» (две строки из `path.ts`).
- Отступ до карточки «Внутренний DOM»: **`mb-8`** (32px).

### PathInternalHouse — карточка внутри бежевого фона
- **Не** full-bleed: обёртка `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, внутри карточка `rounded-3xl p-10 md:p-20`.
- **Фон и золото как у подвала по виду**, но **без связки с футером в коде** (отдельные классы в `global.css`):
  - **`.path-internal-house-card`** — те же значения, что у `<footer>` в `footer-and-final-cta.css`: градиент `130deg, #0f0d0a → #201911`, паттерн `pattern-rings.png`, `background-size: cover, 380px`, рамка `rgba(217, 179, 114, 0.32)`.
  - **`.path-internal-house-gold-text`** — те же значения, что у `footer h4`: градиент + `сусальное золото.png`, `background-clip: text`.
- Eyebrow: `text-dom-gold/85`, подпись как у ссылок в подвале: `text-dom-beige/78`.
- Внутренние три карточки D/O/M: полупрозрачные, как раньше (`bg-white/5`, blur, границы золотом).

### Отступ до блока «Занять место»
- У карточки внутреннего дома: **`mb-10`** (40px).
- У `PathEnroll` **нет** верхнего `mt-16` — только этот зазор.

### Что не трогать
- Footer, Navbar — отдельно; классы внутреннего дома **дублируют** значения подвала, не импортируют его.

---

## Данные `path.ts` (актуально)

```typescript
mirror: {
  title: string
  subtitle: string
},
internalHouse: {
  eyebrow: string
  title: string
  subtitle: string
  items: Array<{
    letter: string
    name: string
    description: string
    url: string
    hasBridge?: boolean
    buttonText: string
  }>
}
```

Ссылки: `/ru/path/soul/`, `/ru/path/awareness/`, `/ru/path/worldview/`.

---

## Внутренние карточки (классы)

Карточка-ссылка: `bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-dom-gold/20 hover:bg-white/10 hover:border-dom-gold/50 transition-all duration-300 flex flex-col items-center text-center group …`

Кнопка «Подробнее»: рамка как у подвала `rgba(217, 179, 114, 0.32)`, `text-dom-gold`, `hover:bg-dom-gold hover:text-white`.

---

## Подключение на странице

В `src/pages/ru/path/index.astro`: после `PathExternalHouse` идут `PathMirror`, затем `PathInternalHouse`.
