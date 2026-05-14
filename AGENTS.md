# AGENTS

## Purpose
This repo is a React + TypeScript + Vite + Tailwind v4 bingo app and workshop lab. The main goal is to keep changes small, idiomatic, and aligned with the existing app structure and learning flow.

## Key commands
- `npm install` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — build production app
- `npm run lint` — run ESLint
- `npm run test` — run Vitest

## Architecture
- `src/main.tsx` — app bootstrap
- `src/App.tsx` — root UI switch for start/game state
- `src/hooks/useBingoGame.ts` — game state, actions, and bingo flow
- `src/components/` — presentational components and screen layout
- `src/utils/bingoLogic.ts` — pure bingo board generation, toggling, and winning detection
- `src/utils/bingoLogic.test.ts` — unit tests for game logic
- `src/index.css` — Tailwind v4 CSS import and theme tokens
- `vite.config.ts` — Vite config with React, Tailwind, and GitHub Pages base path support

## Styling and conventions
- Tailwind v4 is used via `@tailwindcss/vite` and `@import 'tailwindcss'` in `src/index.css`
- Theme tokens are defined with `@theme` in CSS, not with a `tailwind.config.js`
- Prefer component-based React code, functional hooks, and simple state updates
- Keep game behavior in hooks/utility functions and UI in individual components

## Important notes
- The app is designed for workshop-style learning; avoid large architectural refactors unless they clearly improve clarity or correctness
- `vite.config.ts` uses `process.env.VITE_REPO_NAME` to compute `base` for GitHub Pages deployment. Preserve that behavior when changing app routing or asset paths
- Existing `.github/instructions/frontend-design.instructions.md` and `.github/instructions/tailwind-4.instructions.md` contain higher-level frontend design and Tailwind v4 guidance. Consult them for UI work, especially for styling decisions

## When editing
- Use the existing `src/components/` directory for visual/UI changes
- Keep pure logic in `src/utils/` and `src/hooks/`
- Add tests for logic changes in `src/utils/bingoLogic.test.ts`
- Run lint/build/test locally before finalizing changes

## Useful docs
- `README.md` — project overview and run instructions
- `workshop/GUIDE.md` — lab guide context for repo purpose
