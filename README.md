# Backend Quest — Software Interview Academy

Recovered from the existing `backend-quest-swipe` Railway production service on 2026-10-29. Original swipe UI and existing lessons are preserved; seven in-depth software interview lessons have been added.

## Run

Install [Bun](https://bun.sh/) and run:

```sh
bun src/server.js
```

Open `http://localhost:3000`. `GET /healthz` responds `ok` and `GET /lessons` returns the course JSON. No database, secrets, or environment variables are needed except Railway's `PORT`.

## Deploy

Use the **existing** Railway service `backend-quest-swipe` and connect this repository's `master` branch. Set the service's Start Command to `bun src/server.js`, Healthcheck Path to `/healthz`, and remove the old base64 `./run.sh ...` command. Do not create another Railway service.

## Content

Edit `data/course.json` to change lessons. Preserve existing `id` values to retain browser-saved completion/bookmarks. The UI maintains progress in each browser's localStorage (it is not synced between devices).

## Interview module additions

Railway 502 debugging, Go cancellation, PostgreSQL EXPLAIN, API idempotency, cache design, object-level authorization, and secure AI tool calling.
