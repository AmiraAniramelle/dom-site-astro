# Секция 3: Manifest — «DOM — это когда ты наконец возвращаешься домой»

**Источник:** source-DOM.html, строки 5254–5290

**Создать файл:** src/components/sections/ManifestSection.astro

## Что на экране
- Слева: большая фотография (озеро в горах с причалом) + карточка с логотипом "DOM SYSTEMIC METHOD" внизу фото
- Справа сверху: "МАНИФЕСТ DOM"
- Заголовок H2: "DOM — ЭТО КОГДА ТЫ НАКОНЕЦ ВОЗВРАЩАЕШЬСЯ ДОМОЙ." (слово "ДОМОЙ" золотым цветом)
- Текст: "Нас учат бежать вперёд — но почти никто не объясняет, как при этом остаться целым внутри. DOM — это пространство, где внешнее и внутреннее наконец совпадают."
- Подпись с линиями: "Анна Камаллая Хефорс"

## Props

```typescript
interface Props {
  eyebrow: string
  title: string
  highlightWord: string
  text: string
  authorSignature: string
  image: { src: string; alt: string }
  logoCard: { src: string; alt: string }
}
```

## Данные
Добавь в homePageData.manifest с текстами из оригинала.

## После выполнения
Добавь ManifestSection в index.astro после IntentSlider.
