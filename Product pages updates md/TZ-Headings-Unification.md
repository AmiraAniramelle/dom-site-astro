# ТЗ: Единые заголовки — убрать все кастомные модификаторы

> **КОРЕНЬ ПРОБЛЕМЫ:** Каждый компонент берёт `dsH2` и добавляет свои `uppercase`, `tracking-[0.04em]`, `tracking-[0.06em]`, `tracking-[0.08em]`. Cinzel (font-messiri) в uppercase с трекингом выглядит в 1.5–2 раза крупнее. Плюс разный tracking в разных блоках = заголовки визуально разного размера.
>
> **РЕШЕНИЕ:** Убрать ВСЕ кастомные модификаторы. Заголовки = ТОЛЬКО `dsH2` или `dsH3`, без добавок.

---

## 0. Перед началом

```bash
git add -A && git commit -m "checkpoint before heading-unification"
```

---

## Правило

**Заголовок = токен из domTypography.ts и НИЧЕГО БОЛЬШЕ.**

```
✅ class:list={['mb-8 text-center', dsH2]}
❌ class:list={['mb-8 text-center uppercase tracking-[0.06em]', dsH2]}
```

Никаких `uppercase`, `tracking-[...]`, `leading-tight`, `leading-snug`, `font-normal`, `font-bold` после токена. Всё это уже задано внутри `dsH2` / `dsH3`.

---

## Конкретные исправления

### 1. BusinessMissionMainMistake.astro (строка 34)

**Сейчас:**
```
class:list={['mx-auto mb-8 max-w-[52rem] text-center tracking-[0.04em] md:mb-10', dsH2]}
```

**Заменить на:**
```
class:list={['mx-auto mb-8 max-w-[52rem] text-center md:mb-10', dsH2]}
```

Убрано: `tracking-[0.04em]`

---

### 2. BusinessMissionSystemWork.astro (строка 26)

**Сейчас:**
```
class:list={['mx-auto mb-5 w-full text-center uppercase leading-tight tracking-[0.06em] md:mb-7', dsH2]}
```

**Заменить на:**
```
class:list={['mx-auto mb-5 w-full text-center md:mb-7', dsH2]}
```

Убрано: `uppercase`, `leading-tight`, `tracking-[0.06em]`

---

### 3. BusinessMissionCourseAudience.astro (строка 31)

**Сейчас:**
```
class:list={['mb-8 text-center uppercase leading-tight tracking-[0.08em] md:mb-10', dsH2]}
```

**Заменить на:**
```
class:list={['mb-8 text-center md:mb-10', dsH2]}
```

Убрано: `uppercase`, `leading-tight`, `tracking-[0.08em]`

---

### 4. BusinessMissionFormatResults.astro (строка 41)

**Сейчас:**
```
class:list={['mb-5 uppercase tracking-[0.04em] md:mb-6', dsH2]}
```

**Заменить на:**
```
class:list={['mb-5 md:mb-6', dsH2]}
```

Убрано: `uppercase`, `tracking-[0.04em]`

---

### 5. BusinessMissionFormatResults.astro (строка 86) — H3

**Сейчас:**
```
class:list={['mb-5 font-normal uppercase leading-snug tracking-[0.06em] md:mb-6', dsH3]}
```

**Заменить на:**
```
class:list={['mb-5 md:mb-6', dsH3]}
```

Убрано: `font-normal`, `uppercase`, `leading-snug`, `tracking-[0.06em]`

---

### 6. BusinessMissionCourseAudience.astro (строки 40 и 79) — H3

**Сейчас:**
```
class:list={['mb-6 uppercase leading-snug tracking-[0.06em] md:mb-8', dsH3]}
```

**Заменить на:**
```
class:list={['mb-6 md:mb-8', dsH3]}
```

Убрано: `uppercase`, `leading-snug`, `tracking-[0.06em]`

Применить к ОБОИМ h3 (строки 40 и 79).

---

### 7. BusinessMissionEnroll.astro (строка 101) — H2

**Сейчас:**
```
class:list={['mb-6 text-center font-normal uppercase tracking-[0.06em] md:text-left', dsH2]}
```

**Заменить на:**
```
class:list={['mb-6 text-center md:text-left', dsH2]}
```

Убрано: `font-normal`, `uppercase`, `tracking-[0.06em]`

---

### 8. BusinessMissionMainMistake.astro — H3 в примерах (строка 77)

**Сейчас:**
```
class:list={['mb-2 leading-snug', dsH3]}
```

**Заменить на:**
```
class:list={['mb-2', dsH3]}
```

Убрано: `leading-snug` (уже в dsH3)

---

### 9. Поиск по ВСЕМ файлам — на случай если пропустил

```bash
grep -rn "uppercase\|tracking-\[" src/components/products/BusinessMission*.astro | grep -i "dsh\|dsH"
```

Каждое совпадение — убрать `uppercase` и `tracking-[...]` из строки с `dsH2` или `dsH3`.

Дополнительно:
```bash
grep -rn "font-normal\|font-bold" src/components/products/BusinessMission*.astro | grep -i "dsh\|dsH"
```

Убрать `font-normal` и `font-bold` рядом с токенами заголовков.

---

## После исправлений — проверка

1. Открой страницу `/ru/products/business-mission/`
2. Все H2 заголовки должны быть **одинакового размера**
3. Все H3 заголовки должны быть **одинакового размера, меньше H2**
4. Сравни с главной `/ru/` — масштаб заголовков совпадает?

---

## НЕ ТРОГАТЬ

- domTypography.ts (он правильный)
- domButtons.ts (он правильный)
- Navbar, Footer, BaseLayout, global.css
- Контент в business-mission.md
- Файлы других страниц
