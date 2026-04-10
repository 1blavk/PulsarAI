# Project Guidelines

## Code Style
- Use TypeScript with strict mode enabled (`noUnusedLocals`, `noUnusedParameters`)
- Component naming: PascalCase, exported as `export const`
- Props typed with `type Props = { ... }`
- Tailwind CSS for styling with custom colors: `primary` (#5565A1), `income` (#6FAF4F), `expense` (#C44A3A)
- Dark mode support: Use `dark:bg-zinc-900`, `dark:text-white` patterns
- Font: Manrope from Google Fonts
- ESLint with React hooks and refresh plugins

## Architecture
- Feature-based directory structure: `app/`, `widgets/`, `features/`, `components/ui/`, `hooks/`, `shared/lib/`, `data/`
- Props-driven components with no global state (Zustand available but unused)
- Entry point: `src/main.tsx` with HashRouter
- Utility functions in `shared/lib/` for pure functions like `formatCurrency`, `getMonthlyStats`

## Build and Test
- Install: `npm install`
- Dev server: `npm run dev` (Vite, port 5173)
- Build: `npm run build` (outputs to `dist/`)
- Preview: `npm run preview`
- Deploy: `npm run deploy` (GitHub Pages)
- No test suite configured

## Conventions
- Localization: Uzbek locale for dates and currency ("uz-Latn-UZ")
- Transaction categories in mixed Uzbek/Russian/Cyrillic
- CSS: `user-select: none` by default, custom scrollbar hide
- Mock data in `src/data/transactions.ts`
- Date filtering with monthly/daily modes

See [README.md](README.md) for setup and features.