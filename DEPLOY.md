# Деплой сайта DOM в интернет

Проект собирается в статику (`npm run build` → папка `dist/`). Ниже — два простых бесплатных варианта.

### Обложки блога (WebP)

После добавления новых PNG/JPEG в `public/images/blog/covers/` запустите:

```bash
npm run blog:optimize-covers
```

Скрипт создаёт `.webp` (ширина до 800px, quality 80%) и обновляет пути в `src/content/blog/*.md`. Исходные растровые файлы можно удалить вручную после проверки, чтобы уменьшить репозиторий.

---

## 1. Vercel (рекомендуется)

1. Зарегистрируйтесь на [vercel.com](https://vercel.com) (через GitHub).
2. Нажмите **Add New Project** и импортируйте репозиторий с этим проектом (или загрузите через Vercel CLI).
3. Параметры оставьте по умолчанию:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Нажмите **Deploy**. Через 1–2 минуты сайт получит ссылку вида `https://ваш-проект.vercel.app`.

**Домен:** в настройках проекта → **Domains** можно добавить свой домен или поддомен.

**Деплой из терминала (если проект в Git):**

```bash
npx vercel
```

Следуйте подсказкам и привяжите проект к аккаунту Vercel.

---

## 2. Netlify

1. Зарегистрируйтесь на [netlify.com](https://netlify.com).
2. **Add new site** → **Import an existing project** → выберите Git-репозиторий или загрузите папку `dist` (Drag and drop).
3. Если подключаете Git:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Запустите деплой. Сайт появится по адресу вида `https://случайное-имя.netlify.app`.

**Свой домен:** Site settings → **Domain management** → Add custom domain.

---

## 3. Перед первым деплоем

- Убедитесь, что сборка проходит локально:
  ```bash
  npm run build
  npm run preview
  ```
- В браузере откройте `http://localhost:4321` (или тот порт, что покажет `preview`) и проверьте страницы.

---

## 4. Свой домен

После деплоя на Vercel или Netlify в настройках проекта укажите свой домен. Хостинг подскажет, какие DNS-записи добавить у регистратора (обычно A/CNAME или CNAME). После обновления DNS сайт будет открываться по вашему домену.
