# Блок 4: Занять место в программе (строки 5887–5915)

**Создать:** src/components/path/PathEnroll.astro

## Что на экране
- H2: "Занять место в программе"
- Описание
- Форма или CTA для записи
- Возможно форма GetCourse (как на главной) или 
  простая кнопка-ссылка

## Props
```typescript
interface Props {
  title: string
  description: string
  cta?: { text: string; url: string }
  // или форма GetCourse — тогда embedCode: string
}
```

## Данные для path.ts
```typescript
enroll: {
  title: 'Занять место в программе',
  description: '...',  // скопируй из source-DOM.html
  cta: { text: '...', url: '...' },
}
```

## Мобильная версия
- text-align: center
- Кнопка: w-full
- padding компактный

## После выполнения
Добавь в path/index.astro после PathInternalHouse.
Это последний блок страницы «Карта пути».

Финальная структура path/index.astro:
```
<BaseLayout meta={...}>
  <PathHero {...pathPageData.hero} />
  <PathExternalHouse {...pathPageData.externalHouse} />
  <PathInternalHouse mirror={pathPageData.mirror} {...pathPageData.internalHouse} />
  <PathEnroll {...pathPageData.enroll} />
</BaseLayout>
```
