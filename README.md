# TZ-3205-team-frontend

### Описание проекта

Проект представляет клиентскую часть приложения для поиска пользователей. Является результатом выполнения технического задания для команды [3205.team](https://3205.team/)

### Запуск проекта

Для запуска проекта необходимы:

- Docker
- docker-compose

Команда для запуска:

```sh
docker-compose up --build -d
```

## Выбор backend части

У приложения есть две версии backend части:

- [Express](https://github.com/Olegyesterdays/TZ-3205-team-backend)
- [Express + PostgreSQL](https://github.com/Olegyesterdays/TZ-3205-team-backend-v2)

Для переключения между ними нужно зайти в `src/services/api.js` и изменить `baseURL`

- Express - `http://localhost:4000/api/users`
- Express + PostgreSQL - `http://localhost:3000/api/users`

По умолчанию приложение работает с Express
