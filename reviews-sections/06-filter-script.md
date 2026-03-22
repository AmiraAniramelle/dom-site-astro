# Блок 6: JS фильтрация отзывов

**Добавить в:** reviews.astro — <script> тег

## Логика
Одинаковая для всех 3 блоков (видео, истории, Telegram):
1. Клик по фильтру-чипу
2. Все review-filter-item с совпадающим data-review-category — показать
3. Все остальные — скрыть
4. Обновить статус "Сейчас показаны: {название фильтра}"
5. Если ни одного отзыва — показать "По выбранному фильтру пока нет отзывов"
6. Фильтр "all" — показать всё
7. Секции с `data-review-section` (видео / истории / Telegram): если в секции нет ни одной видимой карточки — скрыть всю секцию вместе с заголовком (`hidden` на контейнере)

## data-review-category может содержать несколько значений через запятую:
data-review-category="parents,book"
Значит этот отзыв показывается при фильтре "parents" И при "book".

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-reviews-root]')
  if (!root) return

  const chips = root.querySelectorAll('.review-filter-control')
  const items = root.querySelectorAll('.review-filter-item')
  const status = root.querySelector('[data-review-filter-status]')
  const empty = root.querySelector('[data-reviews-empty]')

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter
      
      chips.forEach(c => c.classList.remove('active'))
      chip.classList.add('active')

      let visibleCount = 0
      items.forEach(item => {
        const cats = (item.dataset.reviewCategory || '').split(',')
        const show = filter === 'all' || cats.includes(filter)
        item.style.display = show ? '' : 'none'
        if (show) visibleCount++
      })

      if (status) {
        status.textContent = filter === 'all'
          ? 'Сейчас показаны: все темы'
          : `Сейчас показаны: ${chip.querySelector('span')?.textContent || filter}`
      }
      if (empty) empty.classList.toggle('hidden', visibleCount > 0)
    })
  })
})
```

## Также: чтение URL параметра
При загрузке, если URL содержит ?filter=money, 
автоматически активировать соответствующий чип.

НЕ ТРОГАЙ Footer, Navbar.
