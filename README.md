# Revizone

A Persian (RTL) website for **movie, TV series and game reviews**, with analytical articles, critic panels and an admin dashboard.

> **Project status:** the client (React) is complete. The server has not been built yet, so sign-in, users and critic reviews are currently stored **for demo purposes in the browser's `localStorage`**.

---

## Features

- Home page, movie / series / game listings (with genre filters), articles and an "About us" page
- A review page for every movie, series and game (one shared template, filled from `data/media.js`)
- Article pages and search
- Light and dark themes (the user's choice is remembered)
- Responsive layout with a slide-out menu on mobile
- Login and registration (users can request to become a critic)
- Critic panels for movies, series and games: write reviews, save drafts and submit them for approval
- Admin dashboard: users, reviews, critics per category, approve or reject reviews, edit and delete

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19 |
| Build / dev server | Vite |
| Routing | react-router-dom |
| Styling | Custom CSS (`styles/`) and Tailwind (enabled in `index.css`) |
| Fonts & icons | Vazirmatn and Inter (Google Fonts), Font Awesome (CDN) |
| Server (planned) | Node.js |

## Getting started

Requirement: Node.js

```bash
cd client
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project structure

```
Revizone-Remake/
├── client/
│   ├── public/
│   │   ├── images/            # posters and images
│   │   └── logo.png
│   └── src/
│       ├── App.jsx            # routes
│       ├── main.jsx
│       ├── index.css          # Tailwind + styles/base.css
│       ├── layout/            # Header, Drawer, Footer, MainLayout
│       ├── pages/             # Home, Movies, Series, Games, Articles, ...
│       ├── cards/             # reusable cards (TopItem, GenreCard, ...)
│       ├── components/
│       │   ├── common/        # Hero, SectionTitle, ScrollToTop, ProtectedRoute
│       │   └── panel/         # dashboard and critic panel components
│       ├── context/           # AuthContext (login and roles)
│       ├── hooks/             # useTheme, useReviews
│       ├── data/              # media.js, articles.js
│       ├── content/articles/  # full article bodies
│       └── styles/            # base, panel, media-review, article, not-found
└── server/                    # still empty
```

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/` | Home | Everyone |
| `/movies`, `/series`, `/games` | Listing for each category | Everyone |
| `/movies/:slug`, `/series/:slug`, `/games/:slug` | Review of one movie, series or game | Everyone |
| `/articles`, `/articles/:slug` | Articles | Everyone |
| `/search?q=...` | Search | Everyone |
| `/about` | About us | Everyone |
| `/login`, `/register` | Login and registration | Everyone |
| `/critic/film`, `/critic/series`, `/critic/game` | Critic panel | The critic of that category, and admins |
| `/admin` | Admin dashboard | Admins only |

## Roles and review workflow

Roles: **Admin**, **Film critic**, **Series critic**, **Game critic** and **User**.

1. When registering, a user can request to become a critic.
2. The admin approves or rejects the request from the dashboard's Overview tab (or changes the role from the Users tab).
3. The critic writes a review and either saves it as a draft or submits it for approval.
4. The admin publishes or rejects the review, and can edit it before publishing.

### Demo accounts

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@revizone.ir | admin123 |
| Film critic | film@revizone.ir | film123 |
| Series critic | series@revizone.ir | series123 |
| Game critic | game@revizone.ir | game123 |

> ⚠️ **For development only.** Passwords are kept unencrypted in `localStorage`, and anyone can read them with the browser's dev tools. Before a public release, sign-in and data storage must move to a server.

## Adding content

- **New movie, series or game:** add an item to the `media` array in `client/src/data/media.js` (`slug`, `kind`, `title`, `poster`, ...) and put its image in `public/images`. The review page is generated automatically. To show it in the listings, also add it to that category's page (`Movies.jsx`, `Series.jsx` or `Games.jsx`).
- **New article:** write the body as a component in `src/content/articles/` and register it in `src/data/articles.js`.

### Placeholder content

These 10 items don't have real content yet and need to be completed in `media.js` (they are marked with `placeholder: true`):

- Games: Hollow Knight, The Witcher 3
- Movies: Dune: Part Two, Oppenheimer, Poor Things
- Series: Frankenstein, IT: Welcome to Derry, Pluribus, Predator: Badlands, The Witcher

Once the real content is written, remove `placeholder: true` from the item.

## Roadmap

- [ ] Build the Node.js server (Express) and a database
- [ ] Secure sign-in (hashed passwords and JWT or sessions) instead of the demo version
- [ ] Move critic reviews from `localStorage` to an API
- [ ] Show critics' published reviews on each title's page
- [ ] Fill in the placeholder content

## License

This project is released under the license in the [`LICENSE`](./LICENSE) file.
