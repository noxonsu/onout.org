# NoxonThemes Product Pipeline

Полное описание жизненного цикла продукта — от разработки до публикации на CodeCanyon.

---

## Архитектура системы

```
GitHub (noxonsu/*)
    │
    ├── GitHub Actions (build + deploy)
    │       │
    │       ├── Собирает ZIP-файл плагина
    │       ├── Деплоит демо на сервер (*.wpmix.net / *.onout.org)
    │       └── Публикует sitemap
    │
    ├── onout.org (этот репозиторий)
    │       │
    │       ├── /product/index.html        ← лендинг
    │       ├── /envato-descriptions/      ← HTML для CodeCanyon "About"
    │       └── /ci-status.html            ← дашборд со всеми ссылками
    │
    └── Envato Upload (Puppeteer скрипт)
            │
            └── Загружает ZIP на CodeCanyon + заполняет changelog
```

---

## Серверная инфраструктура

| Сервер | IP | Роль |
|--------|-----|------|
| **onout.org** (текущий) | 95.217.227.164 | Статические лендинги + Flask backend |
| **WordPress сервер** | 95.217.227.162 | Все WordPress-демо (farm/wallet/nft/definance) |
| **Reverse proxy** | 62.109.14.209 | Wildcard DNS для *.wpmix.net |

### Продуктовые поддомены (через Cloudflare 🟠)

| Поддомен | Продукт | Сервер |
|----------|---------|--------|
| wallet.wpmix.net | Multi Currency Wallet | 95.217.227.162 |
| farm.wpmix.net | FarmFactory + DAO Factory | 95.217.227.162 |
| nft.wpmix.net | NFTsy | 95.217.227.162 |
| definance.wpmix.net | DeFinance | 95.217.227.162 |
| launchpad.onout.org | IDOFactory | Cloudflare Pages |
| dex.onout.org | Unifactory DEX | Cloudflare Pages |

---

## Продукты и их маппинг

| Продукт | GitHub | CodeCanyon ID | Лендинг | Описание |
|---------|--------|--------------|---------|---------|
| MCW Wallet | [swaponline/MultiCurrencyWallet](https://github.com/swaponline/MultiCurrencyWallet) | 23532064 | /wallet/ | /envato-descriptions/wallet.html |
| FarmFactory | [noxonsu/farmfactory](https://github.com/noxonsu/farmfactory) | 29987071 | /farming/ | /envato-descriptions/farming.html |
| DeFinance | [noxonsu/definance](https://github.com/noxonsu/definance) | 29099232 | /dex/ | /envato-descriptions/definance.html |
| DAO Factory WP | private | 35608699 | /dao/ | /envato-descriptions/dao-factory.html |
| DAO Widget JS | [noxonsu/DAOwidget](https://github.com/noxonsu/DAOwidget) | 35358807 | /dao/ | /envato-descriptions/dao-widget.html |
| IDOFactory | [noxonsu/launchpad](https://github.com/noxonsu/launchpad) | 39882380 | /launchpad/ | /envato-descriptions/launchpad.html |
| PredictionMarket | [marsiandeployer/PolyFactory](https://github.com/marsiandeployer/PolyFactory) | — | /predictionmarket/ | /envato-descriptions/predictionmarket.html |

---

## CI/CD Пайплайн (пошагово)

### 1. Разработка → GitHub

```
push в noxonsu/farmfactory (main)
  └─► GitHub Actions: deploy.yml
        ├── npm install + build
        ├── Создаёт farmfactory-vX.X.X.zip
        ├── Загружает ZIP в /home/farmFactory/.../updates/
        └── Деплоит build/ на farm.wpmix.net
```

### 2. Обновление лендинга (этот репо)

```bash
# Редактируем лендинг / описание
git add farming/index.html envato-descriptions/farming.html
git commit -m "feat: update FarmFactory landing"
git push origin main
# ↓ автоматически триггерит GitHub Actions:
#   - generate_sitemap.yml → обновляет sitemap.xml
#   - static.yml → деплоит на GitHub Pages
# + вручную на сервере:
cd /var/www/onout.org && git pull origin main
```

### 3. Загрузка новой версии на CodeCanyon

```bash
cd /var/www/onout.org/.claude/skills/envato-upload/scripts
npm run envato-upload -- --plugin farmfactory
# Скрипт:
# 1. Логинится на Envato (кешируется на 24ч)
# 2. Находит последний ZIP в /updates/
# 3. Генерирует changelog из git-коммитов
# 4. Загружает ZIP + заполняет форму
# 5. Просит подтверждение → сабмитит на ревью
```

---

## Обновление описания на CodeCanyon

1. Открыть `/ci-status.html` → нажать **Description** рядом с нужным продуктом
2. Выделить всё `Ctrl+A`, скопировать `Ctrl+C`
3. Открыть **Edit on Envato** → вставить в поле "Description (About)"
4. Сохранить

### Редактирование описания

```bash
# Файл с описанием (HTML, копируется прямо в CodeCanyon)
nano /var/www/onout.org/envato-descriptions/farming.html

# После редактирования — коммит
git add envato-descriptions/farming.html
git commit -m "docs: update FarmFactory CodeCanyon description"
git push
```

---

## Типы версий продукта

| Тип | Деплой | Описание |
|-----|--------|----------|
| **Static** | GitHub Pages / onout.org | HTML лендинг, без бэкенда |
| **WordPress** | *.wpmix.net | WordPress плагин/виджет |
| **Claude** | Любой хостинг | Настраивается AI-агентом через `.claude/setup.md` |

---

## Как добавить новый продукт

### Чеклист (7 шагов)

#### Шаг 1 — Лендинг

```bash
mkdir -p /var/www/onout.org/newproduct/{js,css,images}
# Создать index.html по аналогии с /farming/index.html
# Обязательные элементы:
# - <meta name="description" content="...">
# - ссылка на Live Demo
# - ссылки на CodeCanyon
# - секция Features
```

#### Шаг 2 — nginx

```bash
# Открыть конфиг:
nano /etc/nginx/sites-available/onout.org

# Добавить после блока /launchpad/:
    location = /newproduct { return 301 /newproduct/; }

    location ^~ /newproduct/ {
        try_files $uri $uri/ /newproduct/index.html =404;
    }

# Перезагрузить:
sudo nginx -t && sudo systemctl reload nginx
```

#### Шаг 3 — Описание для CodeCanyon

```bash
# Создать файл описания (HTML, копируется в CodeCanyon)
cp /var/www/onout.org/envato-descriptions/launchpad.html \
   /var/www/onout.org/envato-descriptions/newproduct.html

# Отредактировать под новый продукт
nano /var/www/onout.org/envato-descriptions/newproduct.html
```

**Структура файла описания:**
```html
<strong>Ask a question!</strong> <a href="mailto:support@onout.org">...</a>
<strong>Join the community!</strong> <a href="https://discord.gg/VwKEmHEgVN">...</a>

<h2>Название продукта — краткое описание</h2>
<p>Основной текст...</p>

<h2>Key Features</h2>
- Feature 1<br>
- Feature 2<br>

<h2>QA</h2>
<strong>Question?</strong><br>
Answer<br>

SEE also: (ссылки на другие продукты)

<h2>Changelog vX.X.XXXX</h2>
<ul><li>...</li></ul>
```

#### Шаг 4 — Карточка в ci-status.html

Открыть `/var/www/onout.org/ci-status.html`, добавить карточку в `.products-grid`:

```html
<!-- NewProduct -->
<div class="product-card">
    <div class="product-header">
        <div class="product-name">
            New Product
            <span class="version-badge static">Static</span>
            <!-- или: <span class="version-badge wordpress">WP</span> -->
        </div>
        <div class="product-revenue">$0</div>
    </div>
    <div class="badge-section">
        <img src="https://github.com/noxonsu/newproduct/actions/workflows/deploy.yml/badge.svg"
             alt="Deploy Status">
    </div>
    <div class="demo-section">
        <div class="demo-title">Live Demos:</div>
        <a href="https://newproduct.onout.org" class="demo-link" target="_blank">
            <span class="status-indicator"></span>Static Demo
        </a>
    </div>
    <div class="links">
        <a href="https://github.com/noxonsu/newproduct/actions" class="link">GitHub Actions</a>
    </div>
    <div class="links-group">
        <a href="https://codecanyon.net/item/SLUG/edit/ITEM_ID" class="link edit" target="_blank">Edit on Envato</a>
        <a href="https://codecanyon.net/item/SLUG/ITEM_ID" class="link envato" target="_blank">CodeCanyon</a>
        <a href="https://onout.org/newproduct/" class="link landing" target="_blank">Landing</a>
        <a href="https://onout.org/envato-descriptions/newproduct.html" class="link description" target="_blank">Description</a>
    </div>
    <div class="changelog" id="changelog-newproduct">
        <div class="changelog-title">Changelog loading...</div>
    </div>
</div>
```

Добавить в JS-объект `repos` в конце файла:
```js
'changelog-newproduct': { owner: 'noxonsu', repo: 'newproduct' },
```

#### Шаг 5 — Envato Upload Config

```bash
nano /var/www/onout.org/.claude/skills/envato-upload/scripts/plugin-config.json

# Добавить новый продукт:
{
  "newproduct": {
    "itemId": "XXXXXXXX",
    "name": "New Product",
    "repo": "/root/newproduct",
    "zipPattern": "newproduct-*.zip",
    "zipSearchPaths": [
      "/home/newproduct/web/newproduct.wpmix.net/public_html/updates/",
      "/root/newproduct/dist/"
    ]
  }
}
```

#### Шаг 6 — Коммит и деплой

```bash
cd /var/www/onout.org
git add newproduct/ envato-descriptions/newproduct.html ci-status.html
git commit -m "feat: add NewProduct landing and description"
git push origin main

# Обновить сервер (nginx обслуживает onout.org напрямую, GitHub Pages — зеркало)
sudo git pull origin main
sudo chown -R www-data:www-data .
sudo systemctl reload nginx
```

#### Шаг 7 — Agent Version (.claude/setup.md)

```bash
# Создать папку и скопировать шаблон
mkdir -p /var/www/onout.org/newproduct/.claude
cp /var/www/onout.org/product-template/.claude/setup.md \
   /var/www/onout.org/newproduct/.claude/setup.md

# Заполнить:
# - Что делает продукт (1–2 предложения)
# - Какие параметры конфигурирует клиент (контракты, chain, branding)
# - Шаги деплоя (fork → config → build → deploy → verify)
nano /var/www/onout.org/newproduct/.claude/setup.md

# В ci-status.html добавить badge:
# <span class="version-badge claude">Claude</span>

git add newproduct/.claude/setup.md ci-status.html
git commit -m "feat: add NewProduct claude setup guide"
git push origin main
```

---

## Структура файлов продукта

```
/var/www/onout.org/
├── {product}/
│   ├── index.html                    ← лендинг
│   ├── js/
│   │   └── f.js                     ← секция-специфичный JS (без Swiper)
│   ├── css/
│   │   └── style.css
│   └── images/
│       └── *.png, *.jpg
│
├── envato-descriptions/
│   └── {product}.html               ← HTML-описание для CodeCanyon
│
└── ci-status.html                   ← дашборд (карточка продукта)
```

---

## GitHub Actions в репозитории

| Workflow | Триггер | Что делает |
|----------|---------|-----------|
| `generate_sitemap.yml` | push → main | Генерирует sitemap.xml и коммитит обратно |
| `static.yml` | push → main | Деплоит на GitHub Pages (зеркало; продакшн — nginx на 95.217.227.164) |
| `compressimages.yml` | PR с изображениями | Сжимает картинки через calibre |

> **Важно:** продакшн onout.org обслуживается nginx напрямую из `/var/www/onout.org/` (через `git pull`), а не из GitHub Pages. `static.yml` создаёт публичное зеркало, полезное для превью PR, но не является основным деплоем.

---

## Быстрые команды

```bash
# Посмотреть статус всех продуктов
open https://onout.org/ci-status.html

# Обновить сервер после push
cd /var/www/onout.org && git pull origin main && sudo chown -R www-data:www-data .

# Загрузить обновление на CodeCanyon
cd /var/www/onout.org/.claude/skills/envato-upload/scripts
npm run envato-upload -- --plugin farmfactory

# Проверить nginx конфиг
sudo nginx -t

# Посмотреть логи nginx
sudo tail -f /var/log/nginx/error.log
```

---

## Связанные документы

- [`DEPLOYMENT.md`](DEPLOYMENT.md) — деплой статики, nginx конфигурация
- [`CLAUDE.md`](CLAUDE.md) — полное описание продуктов и бизнес-модели
- [`.claude/skills/envato-upload/USAGE.md`](.claude/skills/envato-upload/USAGE.md) — загрузка на CodeCanyon
- [`ci-status.html`](ci-status.html) — дашборд с CI/CD статусами и ссылками
