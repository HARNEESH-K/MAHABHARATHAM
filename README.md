# 🏹 Mahabharata – The 18 Parvas Quest

A full-stack educational quiz game on the 18 Parvas of the Mahabharata: story summaries, 180 questions,
sequential unlocking, achievements, leaderboard, YouTube references, and an admin panel.

**Stack:** React 18 + Vite + Tailwind · Express · JWT auth · MongoDB (optional) with built-in JSON-file fallback.

## Deploy on Render (no other steps)
1. Push this folder to a GitHub repo.
2. Render → **New → Blueprint** → pick the repo → **Apply**.
   (Or **New → Web Service** → pick the repo → leave defaults: build `npm install`, start `npm start`.)
3. Wait for the build. On first start the database is seeded automatically.

Admin login: email `admin@mahabharata.quest`; the password is the generated `ADMIN_PASSWORD`
value in Render → your service → **Environment**.
Demo player: `warrior@mahabharata.quest` / `Warrior@2026`.

### Permanent data (optional)
Without a database the app stores data in a JSON file, which Render's free tier erases on every restart/redeploy.
For permanent users and scores, create a free MongoDB Atlas cluster and add an env var
`MONGODB_URI=mongodb+srv://...` in Render. The app seeds it automatically.

## Run locally
```bash
npm install          # installs backend + frontend and builds the UI
npm start            # http://localhost:5000
# or for live-reload development:
npm run dev          # frontend on 5173, backend on 5000
```
Copy `.env.example` to `backend/.env` to customise settings.

## Environment variables
| Name | Purpose |
|---|---|
| `JWT_SECRET` | Token signing secret (generated on Render) |
| `MONGODB_URI` | Optional MongoDB connection string |
| `ADMIN_NAME` / `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Admin account created on first seed |
| `CLIENT_URL` | Only needed if the frontend is hosted on a different domain |
