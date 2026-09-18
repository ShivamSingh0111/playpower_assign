# Development Prompts & Engineering Decisions

This file documents the AI-assisted prompts I used while building this Airbnb listing page assignment. I used AI as a development tool to explore approaches, review code, and catch issues but the decisions, integration, and debugging were all mine.

I want to be transparent about where AI helped and where I drove the work myself, because I think that is a more honest representation than either claiming zero AI use or pretending the AI wrote everything.

---

## 1. Understanding the Reference

### What I asked

> "Look at this Airbnb listing page (https://airbnb-clone-umber-two.vercel.app) and help me understand the layout structure. What are the main sections, what does the two-column grid look like, and how does the sticky booking card behave on scroll? I want to build this from scratch without copying any code."

### Why I asked it

Before touching any code I needed a clear picture of what I was building. The reference site had a lot going on — multiple sticky elements, a full-screen photo view, a lightbox — and I wanted to make sure I understood how they related to each other before I committed to a component structure.

### What I took from it

- Identified three distinct views: the main listing page, the full-screen photo tour (opens at `/photos`), and the lightbox single-photo viewer
- Understood that the booking card is `position: sticky` inside a right column, not a fixed overlay
- Confirmed the photo tour should update the browser URL so the back button works naturally

---

## 2. Planning the Component Structure

### What I asked

> "I want to build a React + TypeScript frontend with a Node.js + Express backend. Help me figure out what components I actually need. I don't want to over-engineer it — just a clean split where each component has one clear job. Also, when would I actually need a global state library here versus just React state?"

### Why I asked it

I had a rough idea of the components from looking at the reference, but I wanted to sanity-check my thinking before writing a bunch of code I might need to restructure later.

### What I decided

- Kept all overlay state (`isPhotoTourOpen`, `isLightboxOpen`, `lightboxIndex`) at the `App.tsx` level since those are the only things shared across components
- No Redux or Zustand — the state is simple enough that prop callbacks work fine and adding a store would just add boilerplate
- Backend handles listing data, photos, and reviews through three separate endpoints; frontend has a fallback if the backend is unreachable

---

## 3. Building the Base Layout

### What I asked

> "Help me think through the CSS design tokens I need. Colors, spacing, border radii, shadows , Airbnb's visual style but my own implementation. Also help me with the two-column desktop grid and how to make the sticky booking card work alongside a sticky navigation bar."

### Why I asked it

Getting the design tokens right first saves a lot of rework later. I wanted a system where changing one variable propagates everywhere instead of hunting down hardcoded values spread across files.

### What I built

- `index.css` with CSS variables for brand color (`#ff385c`), neutrals, radii, shadows, and transitions
- Two-column grid using `minmax(0, 1fr)` for the details column and `370px` fixed for the booking card column
- `overflow-x: clip` on the body instead of `overflow-x: hidden` — this matters because `hidden` creates a new scroll container which silently breaks `position: sticky` on all descendant elements

---

## 4. Photo Tour and Lightbox

### What I asked

> "I need the photo tour to open at the `/photos` URL without a full page reload — back button should take you back to the listing. What is the cleanest way to handle this without adding React Router for just two routes?"

### Why I asked it

I did not want to pull in React Router for literally two paths. But I also wanted the URL to update properly so it feels like a real navigation and browser history works correctly.

### What I implemented

Used `window.history.pushState` to update the URL and a `popstate` listener to sync React state when the user navigates with the browser back/forward buttons. The photo tour renders when `currentPath === '/photos'`. Direct navigation to `http://localhost:3000/photos` works because `App.tsx` reads `window.location.pathname` as the initial state value.

Lightbox navigation uses modular arithmetic for wrap-around: `(currentIndex + 1) % photos.length` and `(currentIndex - 1 + photos.length) % photos.length`. This handles edge cases at the first and last photo without any conditional logic.

---

## 5. Accessibility Review

### What I asked

> "Review what I have so far for accessibility issues, specifically around the Lightbox and Photo Tour overlays. I want to make sure keyboard users can navigate them and focus does not escape into the background."

### Why I asked it

Accessibility is easy to deprioritize when you are focused on getting the layout right. I knew modals need focus trapping and scroll locking but wanted a checklist to make sure I had not missed anything.

### What I built based on the review

- `useScrollLock` — saves `body.style.overflow`, sets it to `hidden` while a modal is open, restores it on cleanup so it does not corrupt styles globally
- `useFocusTrap` — on open: saves the currently focused element, moves focus into the first interactive element in the modal; on close: returns focus to the original element; intercepts Tab/Shift+Tab to keep focus inside
- `useKeyboardNav` — listens globally for `ArrowLeft`, `ArrowRight`, `Escape`, ignores events when an input or textarea is focused
- Added `role="dialog"`, `aria-modal="true"`, and visible `:focus-visible` ring styles on interactive elements

---

## 6. Visual Fidelity Pass

### What I asked

> "Here are screenshots of the reference and my current implementation. Point out the specific visual differences — spacing, typography, gallery proportions — so I can make targeted fixes."

### Why I asked it

I had the structure working but some proportions were off. Going through a screenshot comparison systematically is faster than switching between two browser windows trying to spot differences.

### What I corrected

- Tightened the header search pill (48px height, double-layer drop shadow, thin separator lines between fields)
- Fixed the hero gallery — primary image takes 50% of the total width, 2×2 secondary grid on the right
- Moved the "Show all photos" pill button to the bottom-right corner of the gallery
- `object-fit: cover` in the gallery (crops to fill the cell) and `object-fit: contain` in the lightbox (shows the complete photo without cropping)

---

## 7. Code Review Before Submission

### What I asked

> "Do a quick review of the codebase for anything obviously wrong — unused imports, event listeners without cleanup, error handling gaps, anything sloppy before I submit."

### Why I asked it

A pre-submission review always catches something. I was specifically worried about memory leaks from event listeners and whether the backend error handling was solid.

### What got fixed

- Confirmed all `useEffect` event listeners return cleanup functions
- Added the fallback data layer in `listingApi.ts` — if the backend is unreachable, the frontend loads local static data silently rather than crashing
- Removed unused imports left over from earlier iterations
- Verified `tsc --noEmit` passes clean on both frontend and backend

---

## Final Note

Every AI suggestion went through my own review before it went into the code. I rewrote parts that did not fit, made all the architectural decisions myself, and debugged every issue that came up. The AI was useful for exploring options quickly and catching things I might have overlooked — essentially acting as a second opinion rather than doing the work for me.
