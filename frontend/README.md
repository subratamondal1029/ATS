# ATS Frontend

An Applicant Tracking System (ATS) frontend built with React, TypeScript, Vite, and TailwindCSS. This UI provides candidate pipeline views, stage time tracking, process bottleneck indicators, and weekly summaries, along with standard ATS capabilities.

## Designs

- Dashboard 1: https://tinyurl.com/28m6j4tp
- Kanban + Dashboard: https://www.figma.com/community/file/1579567791995079299
- Dashboard design 2: https://www.figma.com/community/file/1530261325896087183

## Features

- Candidate management pages (list, details, profile)
- Kanban board for process management with drag-and-drop
- Resume upload and parsing (hybrid keyword/rule/ML methods)
- Job postings management and application workflow
- Interview scheduling and email integrations
- Analytics for stage time tracking and bottlenecks

## Tech Stack

- React + TypeScript
- Vite (dev server and build)
- TailwindCSS
- ESLint + TypeScript ESLint

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
cd frontend
npm install
npm run dev
```

### Build & Preview

```bash
cd frontend
npm run build
npm run preview
```

## Project Structure

```
frontend/
├─ package.json
├─ public/
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ index.css
   ├─ components/
   ├─ pages/
   ├─ hooks/
   └─ lib/
```

## Linting & Formatting

- ESLint: `eslint`, `@eslint/js`, `typescript-eslint`, `globals`
- Formatting: Prettier (root has `prettier` and `prettier:check` scripts)

Example minimal `eslint.config.js` (adjust per project needs):

```js
// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    files: ["**/*.{ts,tsx}"],
  },
];
```

## Environment & Integrations

- API base URL and auth provider keys should be configured via environment files (e.g., `.env`) or a config module.
- Integrations: Email service, authentication providers (OAuth/SSO).

## Security & Compliance

- Follow general data protection measures for storage and access.

## License

ISC (see repository license).
