# CodeCanyon Descriptions — Pipeline

Папка с HTML-описаниями для всех продуктов на CodeCanyon + инструменты для их обновления.

## Файлы

```
envato-descriptions/
├── README.md                  # Этот файл — пайплайн
├── wallet.html                # MCW Wallet (item 23532064)
├── farming.html               # FarmFactory (item 29987071)
├── definance.html             # DeFinance (item 29099232)
├── dao-factory.html           # DAO Factory WP (item 35608699)
├── dao-widget.html            # DAO Widget JS (item 35358807)
├── launchpad.html             # IDOFactory (item 39882380)
├── predictionmarket.html      # Prediction Market (не на CC)
├── upload-agent.html          # Страница задач для браузер-агента
└── banners/                   # PNG-баннеры для описаний
    ├── wallet-update-2026.png
    ├── farming-update-2026.png
    ├── definance-update-2026.png
    ├── dao-factory-update-2026.png
    ├── dao-widget-update-2026.png
    └── launchpad-update-2026.png
```

Все файлы доступны публично по URL: `https://onout.org/envato-descriptions/...`

---

## Пайплайн обновления описаний

### Шаг 1 — Проверка ссылок и картинок

Запускаем проверку всех URL из HTML-файлов:

```bash
# Все изображения wallet
for url in \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-1.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-2.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-3.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-4.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-5.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-6.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-7.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-8.1.png"; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' --max-time 8 "$url") $url"
done

# Все демо-сайты
for url in \
  "https://wallet.wpmix.net/" \
  "https://farm.wpmix.net/" \
  "https://farm.wpmix.net/daofactory/" \
  "https://definance.wpmix.net/" \
  "https://launchpad.onout.org/" \
  "https://dao.onout.org/" \
  "https://nointernal.wpmix.net/"; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' --max-time 8 -L "$url") $url"
done
```

Ожидаемый результат: все `200`. Если `404` или `000` — фиксить ссылку в соответствующем HTML.

### Шаг 2 — Редактирование HTML описаний

Каждый файл — это чистый HTML без `<html>`/`<body>` тегов (так принимает CodeCanyon).

Структура файла:
```
[Строки поддержки — email, telegram, knowledge base]
[Баннер обновления — <img src="https://onout.org/envato-descriptions/banners/...">]
[<h2> заголовок продукта]
[<p> описание + Live Demo ссылки]
[<h2>Key Features / <h2>How it works / <h2>Supported Networks]
[SEE also: — перекрёстные ссылки на другие продукты]
[<h2>Changelog — опционально]
```

### Шаг 3 — Генерация баннеров (при изменении)

Баннеры генерируются через Puppeteer (headless Chrome). Скрипт генерации:

```bash
node /tmp/gen_banners.mjs
```

Или использовать скилл `update-cc-descriptions` (см. ниже).

**Параметры баннера:**
- Размер: 590×186px @2x (физически 1180×372px)
- Формат: PNG
- Хостинг: `https://onout.org/envato-descriptions/banners/`
- Шаблон скрипта: `/tmp/gen_banners.mjs` (регенерировать из секции ниже при необходимости)

**Акцентные цвета по продукту:**
| Продукт | Цвет |
|---------|------|
| Wallet | `#F7931A` (Bitcoin Orange) |
| FarmFactory | `#00D395` (DeFi Green) |
| DeFinance | `#FF007A` (Uniswap Pink) |
| DAO Factory | `#7B3FE4` (Purple) |
| DAO Widget | `#7B3FE4` (Purple) |
| IDOFactory | `#F59E0B` (Amber) |

**Шаблон Puppeteer скрипта для баннера:**

```javascript
import puppeteer from '/root/.nvm/versions/node/v22.21.1/lib/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: 'new',
});
const page = await browser.newPage();
await page.setViewport({ width: 590, height: 186, deviceScaleFactor: 2 });
await page.setContent(HTML_STRING, { waitUntil: 'networkidle0' });
await page.screenshot({
  path: '/var/www/onout.org/envato-descriptions/banners/PRODUCT-update-YEAR.png',
  clip: { x: 0, y: 0, width: 590, height: 186 }
});
await browser.close();
```

### Шаг 4 — Загрузка на CodeCanyon (через браузер-агент)

Открыть страницу задач:
```
https://onout.org/envato-descriptions/upload-agent.html
```

Страница содержит:
- 6 карточек по одной на каждый продукт
- Готовый HTML для копирования
- Прямые ссылки на редактирование каждого item на CodeCanyon
- Прогресс-бар с сохранением в localStorage

**Инструкция для браузер-агента:**
1. Зайди на `https://onout.org/envato-descriptions/upload-agent.html`
2. Для каждой карточки: нажми **Copy HTML to Clipboard**
3. Открой **Edit URL** из карточки
4. В поле **Description** → переключись в режим **HTML/Source**
5. Выдели всё, вставь скопированный HTML
6. Нажми **Save** / **Submit**
7. Вернись, отметь карточку **Done**

**Item IDs на CodeCanyon:**
| Продукт | Item ID | Edit URL |
|---------|---------|----------|
| MCW Wallet | 23532064 | https://codecanyon.net/item/edit/23532064 |
| FarmFactory | 29987071 | https://codecanyon.net/item/edit/29987071 |
| DeFinance | 29099232 | https://codecanyon.net/item/edit/29099232 |
| DAO Factory WP | 35608699 | https://codecanyon.net/item/edit/35608699 |
| DAO Widget JS | 35358807 | https://codecanyon.net/item/edit/35358807 |
| IDOFactory | 39882380 | https://codecanyon.net/item/edit/39882380 |

---

## Когда обновлять

| Событие | Что делать |
|---------|-----------|
| Вышло обновление продукта | Добавить `<h2>Changelog vX.Y</h2>` в соответствующий HTML |
| Сломалась ссылка/картинка | Шаг 1 (проверка) → исправить в HTML → Шаг 4 (загрузка) |
| Новый год / ребрендинг | Шаг 3 (новые баннеры) → Шаг 4 (загрузка) |
| Новый продукт на CodeCanyon | Создать новый `product.html` по шаблону + карточку в `upload-agent.html` |
| Изменились demo URLs | Найти в HTML + исправить + Шаг 4 |

---

## Использование скилла

```
/update-cc-descriptions
```

Или попросить Claude:
- "обнови описания на кодканьоне"
- "проверь ссылки в envato-descriptions"
- "создай новый баннер для wallet"
- "добавь changelog в farming"

---

**Последнее обновление:** 2026-03-05
**Баннеры:** wallet, farming, definance, dao-factory, dao-widget, launchpad — Update 2026
