# TicketFlow

> An IT support ticketing system — built full stack while learning React deeply.
> Users log support tickets; agents and admins manage, assign, and resolve them.


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

Architecture & Design Patterns

Layered architecture: routes → middleware → controllers → services → repositories, each with a single responsibility
Repository pattern: isolating data access so swapping mock data for PostgreSQL later won't touch business logic or routes
Why business rules (domain checks, duplicate checks, password matching) belong in the service layer, not the repository — repositories should stay "dumb" and only handle storage

Security Concepts

Never send password hashes back in API responses, even hashed ones
Password hashing with bcrypt — hash before storage, compare on login (never store or compare plain text)
JWT payload design: only include what's needed for identity + authorization (id, role) — never include PII or data that can go stale (email, name), since the token can't be updated once issued and lives for its full expiry
User enumeration prevention: using the same generic error message for "user not found" and "wrong password," and for "email already registered," so attackers can't probe which emails exist in your system
Rate limiting to prevent abuse/spam on sensitive endpoints like registration
Fail loudly on missing server configuration (ALLOWED_EMAIL_DOMAIN, JWT_SECRET) rather than silently misbehaving
Input validation at multiple layers: required fields, domain whitelisting, password strength requirements, department whitelisting

Data Integrity

Email normalization (.trim().toLowerCase()) to prevent duplicate accounts differing only by case
Explicit field destructuring in repository functions so unexpected/malicious fields can't sneak into stored objects
Keeping ID generation and default field values (role, createdAt) centralized in the repository, not scattered across every caller

Tooling & Workflow

Git commit discipline: small, logical, well-labeled commits (Conventional Commits style) that tell a story of incremental progress
Postman for manually testing edge cases before considering a feature "done" — not just the happy path, but failure modes too
Using .env for configuration/secrets, and guarding against missing required env vars

---

## Roadmap

See [`ROADMAP.md`](./ROADMAP.md) for the full milestone-by-milestone build plan.
