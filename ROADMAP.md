# Roadmap — TicketFlow

> IT Support Ticketing System — Full Stack (React + Express + PostgreSQL)
> Rename the project above if you land on a different name.

Milestones are sequenced to ping-pong between backend and frontend, so React concepts are always learned against a real, working API rather than mock/theoretical data.

Check items off as you complete them. Estimates are a pacing guide, not a deadline — go by "is it working," not the clock.

---

## Milestone 1 — Project Setup + Git
- [ ] Initialize backend (`npm init`, Express, ES Modules)
- [ ] `.gitignore` (node_modules, .env, dist, .DS_Store)
- [ ] Git init, first commit, push to GitHub
- [ ] README skeleton committed
- [ ] `npm run dev` working with nodemon

**Est: 1 day**

## Milestone 2 — Auth Backend
- [ ] User data shape (mock array for now)
- [ ] `POST /api/auth/register` — email domain validation, bcrypt hash password
- [ ] `POST /api/auth/login` — verify password, issue JWT
- [ ] Auth middleware (verify JWT on protected routes)
- [ ] Role middleware stub (user / agent / admin)
- [ ] Tested with Postman/Insomnia

**Est: 2–3 days**

## Milestone 3 — React: Auth Frontend
- [ ] Vite + React Router setup
- [ ] Routes: `/login`, `/register`, `/dashboard`
- [ ] Register form → calls real API, handles domain-rejection error
- [ ] Login form → stores JWT, redirects to dashboard
- [ ] Auth Context (global auth state)
- [ ] `ProtectedRoute` component (self-built, not a library)

**Est: 3–4 days**

## Milestone 4 — Tickets Backend
- [ ] Ticket data shape (mock array)
- [ ] `GET /api/tickets` (list, with query params for filter/search)
- [ ] `GET /api/tickets/:id`
- [ ] `POST /api/tickets`
- [ ] Repository pattern kept clean (routes → service/repository → data)

**Est: 2 days**

## Milestone 5 — React: Tickets List/Create
- [ ] Ticket list page — fetch, render, loading/error states
- [ ] Create ticket form — controlled inputs, validation
- [ ] Basic filter/search UI (client-side first)

**Est: 3–4 days**

## Milestone 6 — Tickets Backend (cont.)
- [ ] `PATCH /api/tickets/:id` — update status
- [ ] `PATCH /api/tickets/:id/assign` — assign agent
- [ ] Role checks (only agent/admin can assign/change status)

**Est: 1–2 days**

## Milestone 7 — React: Ticket Detail
- [ ] `/tickets/:id` route, `useParams`
- [ ] Status update UI (role-conditional)
- [ ] Assign-to-agent UI (role-conditional)

**Est: 3 days**

## Milestone 8 — Comments Backend
- [ ] Comment data shape
- [ ] `GET /api/tickets/:id/comments`
- [ ] `POST /api/tickets/:id/comments` — handle `isInternal` flag

**Est: 1–2 days**

## Milestone 9 — React: Comments
- [ ] Comment thread on ticket detail page
- [ ] Post comment form
- [ ] Hide internal notes from non-agent/admin users

**Est: 2 days**

## Milestone 10 — Admin Backend
- [ ] `GET /api/users` (admin only)
- [ ] `PATCH /api/users/:id/role` — promote user to agent

**Est: 1–2 days**

## Milestone 11 — React: Admin Panel
- [ ] Admin-only route (role-protected)
- [ ] Manage users table
- [ ] Promote-to-agent action

**Est: 2–3 days**

## Milestone 12 — PostgreSQL Migration
- [ ] Design schema (users, tickets, comments, categories)
- [ ] Set up local Postgres + connection (`pg` package)
- [ ] Migrate repository functions from mock arrays to SQL queries
- [ ] Re-test all endpoints against real DB

**Est: 2–4 days**

## Milestone 13 — Polish
- [ ] Loading/empty/error states everywhere
- [ ] Server-side search/filter/sort on ticket list
- [ ] Responsive styling
- [ ] Pagination on ticket list

**Est: 3–5 days**

## Milestone 14 — Deploy + Documentation
- [ ] Deploy backend (Render/Railway)
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Finish README (screenshots, API docs, "what I learned")

**Est: 2 days**

---

**Total: ~4–6 weeks** at a steady part-time pace.
