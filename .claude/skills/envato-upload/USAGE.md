# Быстрый старт

## 1. Установка

```bash
cd /var/www/onout.org/.claude/skills/envato-upload/scripts
npm install
```

## 2. Первый запуск - тест логина

```bash
npm run test-login
```

Скрипт:
1. Откроет браузер
2. Попросит ввести 2FA код (если включен)
3. Сохранит сессию на 24 часа

## 3. Загрузка плагина

```bash
# Интерактивный выбор плагина
npm run envato-upload

# Или сразу указать
npm run envato-upload -- --plugin farmfactory
```

Скрипт:
1. Найдет последний ZIP файл
2. Сгенерирует changelog из git commits
3. Покажет превью
4. Спросит подтверждение
5. Загрузит на Envato

## 4. Тестовый запуск (без загрузки)

```bash
npm run envato-upload -- --plugin farmfactory --dry-run
```

## Примеры

### Генерировать только changelog

```bash
./generate-changelog.sh /root/farmfactory 2.26.0227
```

### Указать свой ZIP файл

```bash
npm run envato-upload -- \
  --plugin farmfactory \
  --zip /path/to/farmfactory-v2.26.0227.zip
```

### Автоматически submit (без подтверждения)

```bash
npm run envato-upload -- --plugin farmfactory --auto-submit
```

## Что нужно доделать

### Добавить Envato Item ID

**Автоматически (рекомендуется):**

```bash
npm run envato-list-items
```

Скрипт:
1. Залогинится в Envato
2. Покажет все твои плагины с ID
3. Сохранит в `envato-items.json`
4. Предложит готовые mapping для `plugin-config.json`

**Вручную:**

Редактируй `plugin-config.json`:

```json
{
  "farmfactory": {
    "itemId": "12345678",  // ← твой item ID
    ...
  }
}
```

Найти Item ID:
1. Зайди на https://author.envato.com/items
2. Кликни на плагин
3. URL будет: `https://author.envato.com/edit/12345678`
4. `12345678` - это item ID

### Дописать функцию загрузки

В `upload-to-envato.js` функция `uploadToEnvato()` - placeholder.

Нужно добавить:
1. Навигацию к странице редактирования
2. Клик на "Update Item & Tags"
3. Загрузку ZIP
4. Заполнение changelog
5. Submit

Это требует изучения Envato UI селекторов.

## Troubleshooting

### Сессия истекла

```bash
rm .envato-session
npm run test-login
```

### Не находит ZIP

```bash
# Проверь где лежат ZIP файлы
ls /home/farmFactory/web/farm.wpmix.net/public_html/updates/

# Или укажи вручную
npm run envato-upload -- --zip /полный/путь/к/файлу.zip
```

### Ошибка логина

```bash
# Включи debug и смотри скриншоты
DEBUG=true npm run test-login
ls screenshots/
```
