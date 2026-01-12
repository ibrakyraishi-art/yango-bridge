# 🚀 Yango Play Bridge

**Одностраничный сайт** для перенаправления пользователей из Google Ads в приложение Yango Play через AppsFlyer с сохранением всех параметров атрибуции.

---

## 🎯 Как это работает

### Схема:
```
Google Ads (UTM) → Этот сайт → AppsFlyer → Yango Play App
```

### Преобразование параметров:

| Google Ads (UTM)         | AppsFlyer           |
| ------------------------ | ------------------- |
| `utm_source=google`      | `pid=google`        |
| `utm_campaign=summer`    | `c=summer`          |
| `utm_term=yango+play`    | `af_keywords=...`   |
| `utm_content=adgroup_1`  | `af_adset=...`      |
| `gclid=abc123`           | `af_ad=abc123`      |

---

## ⚙️ Настройка

### 1. Получи AppsFlyer OneLink
- Зайди в AppsFlyer Dashboard
- Создай OneLink для Yango Play
- Скопируй ссылку

### 2. Вставь в код
Открой `app/page.tsx` (строка 15):
```typescript
const oneLinkBase = 'https://yango.onelink.me/XXXXX' // Замени на свою
```

### 3. Настрой Google Ads
Final URL:
```
https://твойсайт.com/?utm_source=google_ads&utm_campaign={campaignid}&utm_term={keyword}&utm_content={adgroupid}&gclid={gclid}
```

---

## 🚀 Деплой на Vercel

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/твой-аккаунт/yango-bridge.git
git push -u origin main
```

Затем подключи репозиторий в Vercel Dashboard.

---

## 📊 Тестирование

Открой:
```
https://твойсайт.com/?utm_source=google_ads&utm_campaign=test&utm_term=yango
```

Внизу страницы увидишь сгенерированную AppsFlyer ссылку!

---

## 🎨 Особенности

- ✅ Красивый дизайн в стиле Yango Play
- ✅ Анимации и градиенты
- ✅ Адаптивный дизайн (mobile-first)
- ✅ Автоматическое преобразование UTM → AppsFlyer
- ✅ Debug-режим (показывает сгенерированную ссылку)

---

## 📞 Поддержка

Если что-то не работает — проверь консоль браузера (F12) и сгенерированную ссылку внизу страницы.
