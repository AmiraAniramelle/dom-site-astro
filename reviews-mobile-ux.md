# ТЗ: Мобильная версия страницы «Отзывы»

> Прочитай DOM-Design-System.md.
> НЕ МЕНЯТЬ ДЕСКТОП. НЕ ТРОГАЙ Footer, Navbar.
> ВСЕ изменения ТОЛЬКО внутри @media (max-width: 768px).

---

## Hero

- H1: clamp(1.8rem, 8vw, 2.4rem), text-align: center
- Eyebrow: 11px, text-align: center
- Золотая линия: w-16
- Подзаголовок: 14px, text-align: center

---

## Фильтры-чипы

СЕЙЧАС: горизонтальный ряд — на мобильном не влезает.

СДЕЛАТЬ:
- Горизонтальный скролл: overflow-x: auto, flex-nowrap
- Скрыть скроллбар: scrollbar-width: none, -webkit-scrollbar display: none
- Каждый чип: white-space: nowrap, padding: 8px 14px, font-size: 12px
- SVG иконки: w-4 h-4 (уменьшить)
- Статус "Сейчас показаны:": font-size: 10px
- Подсказка "Смотреть отзывы по теме": font-size: 11px

---

## Видео-отзывы

- Заголовок H2: clamp(1.5rem, 7vw, 2rem), text-align: center
- Карточки: одна колонка, gap: 12px
- Превью видео: aspect-video, w-full, rounded-xl
- Кнопка play: w-12 h-12 (уменьшить)
- Заголовок карточки: font-size: 1rem
- Описание: font-size: 13px

---

## Истории студентов

- Заголовок H2: clamp(1.5rem, 7vw, 2rem), text-align: center
- Карточки: одна колонка, gap: 12px
- Каждая карточка:
  * Фото: w-12 h-12 rounded-full (маленькое, рядом с именем)
  * Имя: font-size: 1rem
  * Город: font-size: 10px
  * Highlight (цитата): font-size: 14px, font-weight: 600, mb-2
  * Текст: font-size: 13px, line-height: 1.6
  * Если текст длинный — показать первые 3 строки,
    кнопка "Читать полностью" раскрывает остальное
- Padding карточки: 16px
- border-bottom: 1px solid rgba(217,179,114,0.15) 
  вместо карточки-обёртки (чище на мобильном)

---

## Скриншоты Telegram

- Заголовок H2: clamp(1.5rem, 7vw, 2rem), text-align: center
- Сетка: grid-cols-2, gap: 8px (два скриншота в ряд)
- Каждый скриншот: rounded-xl, w-full
- Подпись: font-size: 10px
- По клику: открывается увеличенная версия (если есть лайтбокс)

---

## Пустое состояние

- text-align: center, font-size: 14px, py-6

---

## CTA "Смотреть больше отзывов"

- w-full, py-3
- mt-8, mb-4

---

## Общие правила мобильного

- px-4 (16px) боковые отступы
- Между блоками (видео → истории → Telegram): mb-8
- Шрифт заголовков: font-messiri
- Шрифт текста: font-montserrat
- overflow-wrap: break-word на заголовках
- Никакого горизонтального скролла кроме фильтров-чипов

НЕ МЕНЯТЬ ДЕСКТОП. НЕ ТРОГАЙ Footer, Navbar.
