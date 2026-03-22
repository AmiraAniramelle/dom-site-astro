# Скрипт выгрузки статей с Дзена

`dzen-best-articles.mjs` ходит в **внутренний** export API Дзена (тот же, что использует сайт) и сохраняет **подборку статей** в JSON.

## Зачем

- Получить список статей канала с метриками (просмотры, лайки, дата, ссылка, сниппет).
- **По умолчанию не брать материалы старше года** (`--max-age-days 365`), остальные — **все** (`--top 0`), лента `regular` (свежее сверху в ответе API).
- Автоматически проставить **`category`**, **`tags`**, **`contentType`** под фильтры сайта (`src/data/pages/blog.ts`).
- Опционально: `--by-score`, `--sort top`, `--top N`, `--min-views`.

## Запуск

**1. Выгрузка JSON**

```bash
npm run dzen:best
```

Примеры:

```bash
node scripts/dzen-best-articles.mjs
node scripts/dzen-best-articles.mjs --pages 25 --max-age-days 365
node scripts/dzen-best-articles.mjs --by-score --top 10
node scripts/dzen-best-articles.mjs --no-max-age --sort top --top 20
```

**2. Импорт черновиков в `src/content/blog/`** (те же категории/теги → фильтры на `/ru/blog/` сразу работают):

```bash
npm run dzen:import
node scripts/dzen-import-blog.mjs --force
```

Результат выгрузки по умолчанию: `scripts/output/dzen-best-articles.json` (папка в `.gitignore`).

## Параметры

| Флаг | Описание |
|------|----------|
| `--channel` | Имя канала (по умолчанию `kamallaya`) |
| `--sort top` | Популярные на стороне Дзена |
| `--sort regular` | Обычная лента / хронология |
| `--pages` | Сколько страниц подгрузить (~20–21 статья на страницу) |
| `--top` | Лимит статей; **0** = все после фильтров (по умолчанию) |
| `--max-age-days` | Не старше N дней (**365** по умолчанию) |
| `--no-max-age` | Отключить фильтр по дате |
| `--min-views` | Минимум просмотров |
| `--by-score` | Сортировка по локальной формуле `views + likes×12 + comments×20` |
| `--out` | Путь к файлу |

Переменные окружения: `DZEN_CHANNEL`, при необходимости `DZEN_UA`.

## Юридически и этически

- API не задокументирован публично; при изменениях со стороны Дзена скрипт может перестать работать.
- **Полные тексты статей** на свой сайт — только с правами автора или как цитирование по нормам права.
- Имеет смысл на сайте ставить **каноническую ссылку на Дзен** или публиковать анонс + ссылку.

## Полный текст и картинки (Playwright)

Один раз установите браузер для Playwright:

```bash
npx playwright install chromium
```

Выгрузка списка **и** скрейпинг открытых страниц статей (полный Markdown, картинки в `public/images/blog/<slug>/` — **slug = транслит заголовка** для SEO, поле `fullMarkdown` и `articleSlug` в JSON):

```bash
npm run dzen:best:full
# или
node scripts/dzen-best-articles.mjs --scrape-full
# тест на 2 статьях:
node scripts/dzen-best-articles.mjs --scrape-full --scrape-limit 2
```

Дополнительно:

| Флаг | Описание |
|------|----------|
| `--scrape-delay-ms` | Пауза между статьями (по умолчанию 600) |
| `--scrape-limit` | Только первые N статей |
| `--no-write-md` | Не писать `scripts/output/dzen-full-md/*.md` |
| `--md-out <dir>` | Свой каталог для этих `.md` |

При редиректе на SSO Дзена скрейп не сработает без авторизованного профиля — тогда откройте статью в обычном Chrome под своим аккаунтом и сохраните вручную или настройте Playwright с `userDataDir` (не автоматизировано в скрипте).

RSS канала обычно даёт только анонс, не полный HTML — в скрипте не используется.

## Обложки (импорт без полного скрейпа)

- **Обложка** из API (`coverUrl`) скачивается: `public/images/blog/covers/<slug>.*` (тот же slug, что в frontmatter поста)
- Если в JSON есть **`fullMarkdown`**, `dzen-import-blog.mjs` подставляет его в тело поста (картинки уже с локальными путями из скрейпа).

Обновить только обложки у уже созданных `.md`:

```bash
npm run dzen:covers
npm run dzen:covers -- --force
```

## Классификация под фильтры

Файл `scripts/lib/dzen-classify.mjs` — эвристика по заголовку и сниппету (ключевые слова). Если разметка промахнулась, поправьте в JSON или в готовом `.md` поля `category` и `tags` вручную (значения только из списков на сайте).

## `.md` в Astro

Скрипт `dzen-import-blog.mjs` создаёт файлы с frontmatter под `src/content.config.ts`. **Имя файла и поле `slug` — транслитерация заголовка** (читаемый URL для SEO), а не ID из URL Дзена.

Переименовать уже импортированные посты с дзеновских id на slug из заголовка:

```bash
node scripts/blog-rename-by-title.mjs --dry-run
node scripts/blog-rename-by-title.mjs
```
