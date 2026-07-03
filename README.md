# TicketFlow

> An IT support ticketing system — built full stack while learning React deeply.
> Users log support tickets; agents and admins manage, assign, and resolve them.

*(Rename this if you land on a different project name — just keep it consistent across the repo, folder name, and any deployment.)*

---

## Features

- Domain-restricted registration (only approved email domains can sign up, e.g. `@example.edu.za`)
- Role-based access: **User**, **Agent**, **Admin**
- Create, view, and track support tickets (status, priority, category)
- Comment threads on tickets, with internal (agent-only) notes
- Agent assignment and status workflow
- Admin panel for user role management
- Search, filter, and sort on the ticket list

## Tech Stack

**Frontend**
- React (Vite)
- React Router
- Context API for auth state

**Backend**
- Node.js + Express (ES Modules)
- JWT authentication
- bcrypt for password hashing

**Database**
- PostgreSQL (raw SQL — no ORM, by design, for deeper learning)

---

## Getting Started

### Backend
```bash
cd server
npm install
npm run dev
```
Server runs on `http://localhost:5000` (adjust as needed).

### Frontend
```bash
cd client
npm install
npm run dev
```
App runs on `http://localhost:5173`.

### Environment Variables
Create a `.env` file in `/server`:
```
PORT=5000
JWT_SECRET=your_secret_here
ALLOWED_EMAIL_DOMAIN=example.edu.za
DATABASE_URL=postgres://user:password@localhost:5432/ticketflow
```

---

## API Documentation

_To be filled in as endpoints are built — see `ROADMAP.md` for planned routes._

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/api/auth/register` | Register new user (domain-restricted) | No |
| POST | `/api/auth/login` | Login, returns JWT | No |
| GET | `/api/tickets` | List tickets (filter/search/sort) | Yes |
| GET | `/api/tickets/:id` | Get single ticket | Yes |
| POST | `/api/tickets` | Create ticket | Yes |
| PATCH | `/api/tickets/:id` | Update ticket status | Yes (agent/admin) |
| PATCH | `/api/tickets/:id/assign` | Assign ticket to agent | Yes (agent/admin) |
| GET | `/api/tickets/:id/comments` | Get comments for a ticket | Yes |
| POST | `/api/tickets/:id/comments` | Add comment | Yes |
| GET | `/api/users` | List all users | Yes (admin) |
| PATCH | `/api/users/:id/role` | Change user role | Yes (admin) |

---

## Screenshots

_Coming soon as frontend is built._

---

## What I Learned

_This section is for you — as you build, jot down real takeaways: tricky bugs you solved, concepts that finally clicked (e.g. protected routes, JWT flow, SQL joins), and decisions you'd make differently next time. This section is often what makes recruiters actually read the whole README._

---

## Roadmap

See [`ROADMAP.md`](./ROADMAP.md) for the full milestone-by-milestone build plan.
