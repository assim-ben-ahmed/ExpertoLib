# Expert Auto Book

Expert Auto Book is a web application prototype built during a hackathon to streamline vehicle expertise appointment booking and tracking.

This project was developed collaboratively by a team of **4 people** (me + **3 teammates**) during the hackathon.

## Project Overview

The app connects two user roles:

- `owner`: vehicle owners who need to book an expertise appointment
- `expert`: automotive experts who manage their schedule and follow case progress

It includes role-based dashboards, appointment booking flows, and status tracking with a modern responsive UI.

## Key Features

- Authentication flow with sign-in and sign-up
- Role-based redirection (`owner` vs `expert`)
- Protected routes for authenticated pages
- Expert discovery cards with availability and ratings
- Appointment booking workflow
- Appointment confirmation page
- Owner dashboard with KPIs, notifications, and timeline
- Expert dashboard with agenda and case metrics
- Toast notifications and reusable UI component system

## Screenshots

Add your interface screenshots in this section when ready.

Suggested image folder:

- `docs/screenshots/`

You can replace the placeholders below with your final images.

### Sign In

```markdown
![Sign In Page](docs/screenshots/sign-in.png)
```

### Owner Dashboard

```markdown
![Owner Dashboard](docs/screenshots/owner-dashboard.png)
```

### Book Appointment

```markdown
![Book Appointment](docs/screenshots/book-appointment.png)
```

### Appointment Confirmation

```markdown
![Appointment Confirmation](docs/screenshots/appointment-confirmation.png)
```

### Expert Dashboard

```markdown
![Expert Dashboard](docs/screenshots/expert-dashboard.png)
```

## Tech Stack

- React 18 + TypeScript
- Vite 5
- React Router DOM
- TanStack React Query
- Tailwind CSS
- Radix UI components
- Vitest + Testing Library
- Playwright (configured)

## Getting Started

### Prerequisites

- Node.js 18+ (Node 22 works)
- npm 9+

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

If you need LAN access:

```bash
npm run dev -- --host
```

Default local URL:

- `http://localhost:8080/`

## Available Scripts

- `npm run dev`: start development server
- `npm run build`: create production build
- `npm run build:dev`: create development-mode build
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint
- `npm run test`: run tests once with Vitest
- `npm run test:watch`: run tests in watch mode

## Authentication and Demo Behavior

This is currently a front-end prototype using mock authentication:

- Logging in with an email containing `expert` signs in as an expert user
- Any other email signs in as an owner user
- Session persistence uses `localStorage` (`expertolib_user` key)

## Routes

- `/`: sign in
- `/signup`: sign up
- `/dashboard`: owner dashboard (protected)
- `/book`: booking flow (protected)
- `/appointment/:id`: appointment confirmation (protected)
- `/expert`: expert dashboard (protected)

## Project Structure

```text
src/
	components/        Reusable UI and feature components
	contexts/          Global app contexts (authentication)
	data/              Mock data for experts, appointments, KPIs
	hooks/             Custom React hooks
	lib/               Utility helpers
	pages/             Route-level pages
	test/              Test setup and examples
```

## Current Scope and Limitations

- Uses mock data (no real backend/API yet)
- Auth is simulated on the client side
- No production persistence layer

## Next Steps

- Connect to a real backend (auth, appointments, experts)
- Add form validation and server-side error handling
- Expand automated test coverage (unit + e2e)
- Add CI pipeline for lint/test/build checks

## License

This project was created for educational and hackathon purposes.
