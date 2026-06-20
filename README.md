# Pouya Mashhadi Mohammad Reza — Portfolio
# pouyammr.github.io

A personal portfolio site built with the Next.js App Router, TypeScript, and Tailwind CSS v4.

The design frames a front-end career as a "career route map" — a nod to the
Mapbox GL JS / Leaflet work in the stack — with the work history laid out as
waypoints along a route.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css`, no `tailwind.config.js` needed)
- **next/font** for self-hosted Google Fonts (Fraunces, Work Sans, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** `next/font` downloads font files from Google Fonts at build time.
> Make sure you have a normal internet connection the first time you run
> `npm run dev` or `npm run build` — after that, the fonts are cached locally.

## Project structure

```
app/
  layout.tsx       # root layout, fonts, metadata
  page.tsx          # assembles the page from the sections below
  globals.css        # Tailwind import + design tokens (@theme) + a few
                       # small utility classes for things pure utilities
                       # don't cover well (contour background, dashed
                       # route line, conic-gradient ring)
components/
  Nav.tsx            # sticky top nav (server component)
  Hero.tsx           # intro, portrait, status line (server component)
  Stack.tsx          # skills grouped as a map legend (server component)
  JourneyRoute.tsx   # work history timeline (client — scroll-reveal)
  FieldNotes.tsx     # languages, working style, interests (server component)
  Contact.tsx        # footer, contact links, live Tehran clock (client)
  LegendIcon.tsx      # small SVG icons for each skill category
  Chip.tsx            # reusable pill/tag component
lib/
  data.ts            # all content lives here — typed arrays for skills,
                       # work history, languages, interests, and contact info
public/
  portrait.jpg        # profile photo
```

## Editing content

Everything text-based — skills, job history, bullet points, languages,
interests, and contact links — lives in `lib/data.ts`. You shouldn't need to
touch any component file just to update content.

## Notes on a couple of implementation choices

- **`JourneyRoute.tsx`** reveals each waypoint card with a fade-up as you
  scroll, but the cards are visible by default and only get hidden by JS
  immediately before paint (`useLayoutEffect`) if `IntersectionObserver` is
  available. If JS fails to load for any reason, nothing on the page is ever
  permanently hidden.
- **`Contact.tsx`** uses `useSyncExternalStore` (rather than
  `useState` + `useEffect`) for the live Tehran clock — it's the React-
  recommended pattern for subscribing to a value that changes outside of
  React's control, and it avoids a server/client hydration mismatch for free.
- GitHub/LinkedIn URLs in `lib/data.ts` are inferred from the `@pouyammr`
  handles — double check `contactCoords` in `lib/data.ts` if those aren't
  the right links.

## Deploying

This is a stock Next.js App Router project, so it deploys as-is to Vercel,
or anywhere else that supports Next.js (`npm run build && npm run start`,
or a platform adapter).
