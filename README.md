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

### Sign In

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c0918067-c6e7-4c1f-bcb0-77e59323ee81" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/747c8164-8603-4560-9202-e98eac6857cb" />

### Owner Dashboard

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2710ccf2-d011-45dd-8ae6-adf12b286b66" />

### Book Appointment

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d6dcde18-3d05-4b18-8d2c-fc5d8ac6f74e" />

### Appointment Confirmation

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/03853dbe-98dc-43f6-8f49-3ef22fbee626" />

### Expert Dashboard

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/386e3df1-7281-4b64-9c5d-3c42dc721f4b" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/803e4d92-f1d5-45e9-9afd-5d794d9da656" />

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
