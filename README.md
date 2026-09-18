# Airbnb Listing Page Clone

A pixel-accurate Airbnb listing detail page built from scratch for a frontend engineering assignment.
Reference property: **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"**

Live reference: `https://airbnb-clone-umber-two.vercel.app`

---

## What I Built

The project covers three interconnected views:

**1. Listing Page** — the main property detail view with:
- Airbnb-style sticky navigation header that disappears on scroll and reappears with a compact tab strip (Photos / Amenities / Reviews / Location)
- Listing title, rating, Superhost badge, and location with Share/Save controls
- Asymmetric hero gallery: one large primary image on the left, 2x2 grid on the right, with a floating "Show all photos" pill button
- Two-column desktop layout — left column for property details (description, sleeping arrangements, amenities), right column for sticky booking card
- Booking card with check-in/checkout date fields, guest selector, price breakdown, and Reserve button
- Single-column full-width sections below: reviews, stylized location map, host profile, house rules, more stays nearby, and footer

**2. Photo Tour** — opens at `/photos` route when clicking "Show all photos":
- Sticky top bar: back arrow, centered "Photo tour" title, Share and Save actions
- Top room thumbnail gallery for quick navigation between room types
- Per-room sections with room title, amenity subtitle, in-section navigation pill strip
- Asymmetric two-column photo layout (left column stacked thumbnails, right column wide showcase photo)
- Click-through to Lightbox from any photo

**3. Lightbox** — single-photo overlay modal:
- Dark backdrop, centered photo, photo counter (3 / 15)
- Previous/next floating buttons with circular wrap-around (ArrowLeft / ArrowRight)
- Escape to close, full focus trapping and background scroll lock

---

## Technology Stack

### Frontend (`frontend/`)

| Tool | Why |
|---|---|
| **React 18** | Component composition, hooks for local state |
| **TypeScript 5** | Strict types on domain models and props prevent runtime bugs |
| **Vite 6** | Fast HMR during development, clean production builds |
| **CSS Modules** | Scoped styles per component, no class name collisions |
| **Vanilla CSS variables** | Design tokens in one place — changing a color or spacing cascades everywhere |
| **No external component library** | Full control over pixel-level fidelity to match Airbnb's visual design |

I intentionally avoided Tailwind, MUI, and similar libraries because they make pixel-accurate UI replication harder — you end up fighting the utility class system or the component defaults.

### Backend (`backend/`)

| Tool | Why |
|---|---|
| **Node.js 22 + Express 4** | Minimal, fast, widely understood |
| **TypeScript 5** | Shared domain types between services; errors surface at compile time |
| **tsx** | Zero-config TypeScript execution for development (`tsx watch`) |
| **CORS** | Allows the dev frontend at port 3000 to call the API at port 5000 |

---

## Project Structure

```
task/
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── api/
│   │   │   ├── fallbackData.ts     # Local static data if backend is down
│   │   │   └── listingApi.ts       # fetch() wrappers with fallback logic
│   │   ├── components/
│   │   │   ├── booking/            # BookingCard — price breakdown, Reserve button
│   │   │   ├── common/             # Icons, ShareModal
│   │   │   ├── header/             # Top Airbnb navbar with search pill
│   │   │   ├── lightbox/           # Single-photo modal viewer
│   │   │   ├── listing/            # All listing sections (HeroGallery, ReviewsSection, etc.)
│   │   │   └── phototour/          # Full-screen /photos page
│   │   ├── hooks/
│   │   │   ├── useFocusTrap.ts     # Keeps keyboard focus inside modals (WCAG AA)
│   │   │   ├── useKeyboardNav.ts   # Arrow key + Escape handlers
│   │   │   └── useScrollLock.ts    # Locks body scroll when overlay is open
│   │   ├── styles/
│   │   │   └── index.css           # Global design tokens and CSS reset
│   │   ├── types/
│   │   │   └── listing.ts          # TypeScript interfaces: Photo, Review, Listing, etc.
│   │   ├── App.module.css
│   │   ├── App.tsx                 # Root component — routing, state, layout
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── listingController.ts    # Request parsing, response shaping
│   │   ├── data/
│   │   │   └── listingData.ts          # Static property data (15 photos, 6 reviews, etc.)
│   │   ├── routes/
│   │   │   └── listingRoutes.ts        # Route definitions for /api/listing/*
│   │   ├── services/
│   │   │   └── listingService.ts       # Business logic layer, filter by category
│   │   ├── types/
│   │   │   └── index.ts                # Shared response/domain types
│   │   ├── app.ts                      # Express app factory (middleware, routes, error handler)
│   │   └── server.ts                   # Starts server on port 5000
│   ├── package.json
│   └── tsconfig.json
│
├── architecture/
│   ├── architecture-diagram.png        # Production cloud architecture diagram
│   └── diagram.html                    # HTML source used to generate the diagram
│
├── prompt.md                           # Engineering prompts used during development
└── README.md
```

---

## How to Run

### Requirements
- Node.js v18 or higher
- npm v9 or higher

### Start the backend

```bash
cd backend
npm install
npm run dev
```

API runs at `http://localhost:5000`.

### Start the frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:3000`.

> **Note:** The frontend works even if the backend is offline. It falls back to local data in `src/api/fallbackData.ts` automatically. You will see a warning in the browser console, but the UI remains fully functional.

### Build for production

```bash
# Frontend
cd frontend && npm run build   # outputs to frontend/dist/

# Backend
cd backend && npm run build    # compiles TypeScript to backend/dist/
cd backend && npm start
```

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Health check — returns `{ status: 'ok', timestamp }` |
| `GET` | `/api/listing` | Full listing: title, host, pricing, amenities, rules, etc. |
| `GET` | `/api/listing/photos` | All 15 photos with room category, title, caption, hero flags |
| `GET` | `/api/listing/photos?category=bedroom` | Photos filtered by room category |
| `GET` | `/api/listing/reviews` | Reviews with category scores and overall rating |

---

## Key Design Decisions

### Why no React Router?

The app only has two routes: `/` (listing) and `/photos` (photo tour). Rather than pulling in React Router for two paths, I used `window.history.pushState` with a `popstate` listener. This keeps the dependency count low, the bundle smaller, and the behaviour exactly right. Browser back/forward buttons work naturally.

### Why local state in App.tsx instead of Redux or Zustand?

The application has a small, well-defined set of shared state: which overlay is open and which photo is active. Redux would require actions, reducers, selectors, and a provider wrapping just to toggle a boolean. React's built-in `useState` and prop callbacks are the right tool at this scale — readable, easy to trace, no extra indirection.

### Why not Tailwind or a component library?

Tailwind makes quick prototypes easier, but it makes pixel-accurate UI replication harder. When you need a specific `box-shadow`, `border-radius`, and `padding` combination to match Airbnb's design system, having those values in CSS Modules with custom properties is much cleaner than composing 12 utility classes. CSS Modules also keep styles scoped to each component without any runtime overhead.

### The fallback data layer

The `listingApi.ts` wraps every API call in a `try/catch`. If the backend is unreachable (offline, wrong port, network error), the functions silently return the same strongly-typed data from `fallbackData.ts`. This means the frontend works in isolation — useful for frontend-only demos, CI preview deployments, or when backend deploys are lagging behind.

### Sticky booking card vs. sticky nav

The sticky navigation tab strip (`StickyNav`) uses `position: fixed; top: 0` and only appears after the user scrolls past the hero gallery. The booking card uses `position: sticky; top: 100px` within a `height: 100%` right column. Both work simultaneously without interfering because the tab strip sits in a higher `z-index` layer and they each have separate scroll boundaries.

One important detail: the body uses `overflow-x: clip` instead of `overflow-x: hidden`. Using `hidden` creates a new scroll container on the element, which silently breaks `position: sticky` on all descendants. `clip` clips overflow without creating a scroll container, so sticky works correctly everywhere.

### Accessibility hooks

Three custom hooks handle modal accessibility:
- **`useScrollLock`** — saves the current `body.style.overflow`, sets it to `'hidden'`, and restores it on cleanup. Prevents the page from scrolling underneath an open overlay.
- **`useFocusTrap`** — on mount, saves `document.activeElement`, moves focus into the modal's first interactive element, intercepts `Tab`/`Shift+Tab` to cycle within the modal, and restores focus to the original element on unmount. This is the WCAG 2.1 AA requirement for dialog patterns.
- **`useKeyboardNav`** — listens globally for `ArrowLeft`, `ArrowRight`, `Escape` and fires the appropriate callback. Events are ignored when an input or textarea is focused.

### Photo Tour URL routing

Clicking "Show all photos" calls `history.pushState({}, '', '/photos')` and updates a `currentPath` state variable. Pressing Escape or the back arrow calls `history.pushState({}, '', '/')`. A `popstate` listener on `window` keeps the React state in sync when the user uses native browser navigation (back/forward buttons). Direct navigation to `http://localhost:3000/photos` works because `App.tsx` reads `window.location.pathname` on initialization.

---

## Production Architecture

The `architecture/architecture-diagram.png` file documents how this prototype would scale to handle production-level traffic.

Key evolution points from prototype to production:

- **Edge layer:** Cloudflare or AWS CloudFront for DDoS protection, SSL termination, and CDN-cached static assets and WebP images at edge PoPs globally
- **API Gateway:** Kong or AWS API Gateway for JWT authentication, token-bucket rate limiting, and protocol translation before requests hit application services
- **Microservices:** The single Express server decomposes into independently autoscaling services — Listing, Booking/Reservation, Media Transcoding, Reviews — each running as containerized pods on Kubernetes (EKS)
- **Caching:** Redis cluster for hot listing data, pricing calendars, and rate limit counters; sub-millisecond reads for frequently accessed endpoints
- **Database:** Aurora PostgreSQL primary (ACID booking transactions) with multi-region read replicas via PgBouncer connection pooling. Read replicas absorb 95%+ of query load
- **Search:** OpenSearch with geo-distance spatial indexing for map-based listing discovery and faceted filters
- **Object storage:** S3 + async transcoding workers producing responsive WebP/AVIF photo variants per device breakpoint, cached at CloudFront origin
- **Async processing:** Kafka event streams for booking confirmations, host payouts, email/push notification fanout — decoupled from the synchronous request path
- **Observability:** Datadog APM distributed tracing, Prometheus metrics, ELK centralized logging, PagerDuty alerting

---

## Optimization Opportunities

### Frontend

**Bundle size**
- Lucide React is imported for a few icons; most icons in the project are already inline SVGs. Removing the lucide dependency entirely and replacing the remaining few with inline SVGs would save ~15 KB from the bundle.
- The `/photos` photo tour is currently rendered inline. Wrapping it in `React.lazy()` and `Suspense` would code-split it out of the initial bundle since it is only needed on demand.
- Consider switching from Google Fonts CDN to self-hosted font files in `public/fonts/` to remove the external DNS lookup and round-trip on first load.

**Images**
- All Unsplash image URLs currently request JPEG. Adding `&fm=webp` to the query string delivers WebP in supported browsers, reducing image size by around 25-35%.
- Adding `srcset` and `sizes` attributes on the hero gallery images would let the browser select an appropriately sized image for the viewport rather than always loading a 1600px wide source.
- The photo tour renders all room images eagerly. Only the first visible room section needs `loading="eager"` — the rest should use `loading="lazy"`.

**Runtime**
- The calendar section renders a static grid on every render. If it were connected to live availability data, wrapping the date computation in `useMemo` would prevent recalculation on every parent re-render.
- The reviews rating bars animate on mount. Wrapping them in an `IntersectionObserver` would defer the animation until the section is actually scrolled into view, which also slightly reduces CPU work on initial load.
- If the listing detail page ever needed to support multiple listings (search results click-through), the photo fetch should use React Query or SWR for caching responses and avoiding duplicate network calls.

**CSS**
- The global design tokens in `index.css` could be audited for unused variables — tokens that were defined during early iterations and never ended up being used in components.
- Adding a `preconnect` hint in `index.html` for the Unsplash image CDN would reduce latency on the first hero image request.

---

### Backend

**Performance**
- All listing data is currently read from in-memory static objects on every request. If the data source moves to a database, adding a simple in-process cache (a `Map` with a TTL timestamp) would prevent redundant database round-trips for the same listing ID within a short window.
- Adding the `compression` Express middleware would gzip or brotli compress JSON responses, reducing payload size by roughly 60-70% for the listing endpoint.
- The `/api/listing/photos?category=` filter currently loads all photos into memory and then filters in JavaScript. If the photo count grew significantly, pushing the filter into a SQL `WHERE` clause would be far more efficient.

**Reliability**
- Adding request validation middleware using `zod` or `express-validator` would catch invalid query parameters (like `?category=` being an empty string or containing special characters) before they reach the service layer.
- Structured logging with `pino` instead of `console.error` would produce JSON log lines that are parseable by CloudWatch, Datadog, or any other log aggregation system. `console.error` strings are hard to query and alert on.
- Adding request ID middleware (`uuid` per request, attached to `res.locals`) would allow tracing a single request through controller → service → data layer in logs.

**Scalability**
- Moving listing data from a static TypeScript object to PostgreSQL (with Prisma or Drizzle ORM) would enable real filtering, pagination, full-text search, and multi-listing support without loading everything into memory.
- Adding `ETag` response headers based on a hash of the listing data would allow clients to send `If-None-Match` and receive `304 Not Modified` when the data has not changed, saving bandwidth on repeat visits.
- The current Express server is a single process. Adding a Node.js cluster mode (`node:cluster`) or running multiple container replicas behind a load balancer would remove the single-process bottleneck.

**Security**
- The CORS policy is currently `origin: '*'` which is fine for local development but must be scoped to specific frontend domains before any deployment.
- Adding `express-rate-limit` middleware per IP would protect against scraping and brute-force attempts on the API.
- Setting security headers with `helmet` would add `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, and CSP headers with zero configuration effort.

---

## Self-Review Checklist

- [x] Frontend and backend in separate directories with independent `package.json` and `tsconfig.json`
- [x] 0 TypeScript errors (`tsc --noEmit`) on both frontend and backend
- [x] Listing page matches reference layout, spacing, and typography
- [x] Hero gallery: 50% primary + 2x2 grid, hover states, floating "Show all photos" button
- [x] Clicking "Show all photos" navigates to `/photos` route with URL update
- [x] Browser back button from `/photos` returns to `/` listing view
- [x] Photo Tour: sticky header, room thumbnail gallery, per-room amenity subtitle, room nav strip, asymmetric photo layout
- [x] Lightbox: dark backdrop, photo counter, prev/next with wrap-around, Escape to close
- [x] Keyboard navigation (ArrowLeft, ArrowRight, Escape) working
- [x] Body scroll locked when any overlay is open
- [x] Focus restored to triggering element when overlays close
- [x] Sticky booking card visible throughout 2-column detail scroll
- [x] StickyNav with Photos/Amenities/Reviews/Location tabs appears on scroll
- [x] Stylized location map with coastline, green regions, house pin, search button, zoom controls
- [x] Production architecture diagram in `architecture/architecture-diagram.png`
- [x] Frontend fallback data works if backend is offline
- [x] `prompt.md` and `README.md` present at project root
