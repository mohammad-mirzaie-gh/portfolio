# Mohammad Mirzaie — Portfolio

Personal portfolio site for Mohammad Mirzaie — Software Developer & Biomedical Engineering student.

Live: [mohammad-mirzaie.vercel.app](https://mohammad-mirzaie.vercel.app)

![Portfolio cover](public/banner.png)

## Tech stack

- **[Next.js 16](https://nextjs.org)** — App Router, Turbopack, React Compiler
- **[React 19](https://react.dev)**
- **TypeScript** (strict mode)
- **[Tailwind CSS 4](https://tailwindcss.com)**
- **[Motion](https://motion.dev)** (`motion/react`) — scroll/mount reveal animations
- **[GSAP](https://gsap.com)** — the floating hero logo
- **[Lucide](https://lucide.dev)** / **[React Icons](https://react-icons.github.io/react-icons/)** — icons

## Architecture: server-first by default

The previous version of this project had `"use client"` at the top of almost
every file, including the page itself — turning the entire app into a giant
client bundle for no real reason. It has been rebuilt around one rule:

> **A component is a Server Component unless it has a concrete reason not to be.**

Concretely:

- `app/page.tsx` and every layout/section/header/footer component render
  entirely on the server. They contain no hooks, no event handlers, and no
  browser APIs.
- Interactivity and animation are isolated in a small number of **client
  leaves**, each with a single, narrow responsibility:

  | Component | Why it's a client component |
  |---|---|
  | `components/motion/Reveal.tsx` | Wraps `motion/react` for scroll/mount fade-in animations. Server components pass their JSX in as `children`, so only this wrapper ships as client JS. |
  | `components/text/BlurText.tsx` | Uses `IntersectionObserver` + animated text segments. |
  | `components/animation/LogoAnimation.tsx` | Drives a GSAP tween on mount. |
  | `components/box/SpotlightCard.tsx` | Tracks the mouse position to drive a CSS spotlight effect. |
  | `components/box/ExpendedBox.tsx` | Measures content height and toggles an expand/collapse state. |
  | `components/text/HoveredText.tsx` | A reusable `Tooltip` primitive that tracks pointer/touch position. |

Everything else — `MainHeader`, `MainNavbar`, `MainBanner`, `MainFooter`,
`MainSection`, `Skills` (the About section) — is a plain Server Component
that renders static markup and composes the client leaves above. This keeps
the JavaScript sent to the browser limited to what actually needs to run
there, which is the whole point of the App Router's RSC model.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** `ogl` and `@use-gesture/react` were removed from
> `package.json` in this cleanup — they were installed but never imported
> anywhere in `src/`. Run `npm install` once after pulling this change so
> your local `node_modules` (and lockfile) drop them too.

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx           # Home page (Server Component)
│   ├── not-found.tsx      # Custom 404
│   ├── robots.ts          # robots.txt
│   ├── sitemap.ts         # sitemap.xml
│   ├── globals.css        # Tailwind theme tokens + base styles
│   └── index.css          # Component-specific CSS (shiny text, spotlight)
├── components/
│   ├── animation/         # LogoAnimation (GSAP, client)
│   ├── banner/             # MainBanner (hero section)
│   ├── box/                 # SpotlightCard, ExpendedBox (client)
│   ├── footer/             # MainFooter
│   ├── header/             # MainHeader
│   ├── motion/              # Reveal — shared animation wrapper (client)
│   ├── navbar/              # MainNavbar
│   ├── section/             # MainSection, Skills (About Me)
│   └── text/                 # BlurText, ShinyText, HoveredText/Tooltip
└── lib/
    └── utils/CnT.ts         # `cn()` — clsx + tailwind-merge helper
```

## What changed in this pass

Beyond the server/client rearchitecture above, this cleanup fixed a
number of real bugs and rough edges found while reviewing the codebase:

- **Broken import**: the About section imported `motion` from
  `framer-motion`, a package that was never a direct dependency (it only
  existed nested inside `motion`'s own dependency tree). Everything now
  imports consistently from `motion/react`.
- **Missing `"use client"` directives** on several components that used
  hooks, DOM refs, or `motion/react` (`MainBanner`, `BlurText`,
  `SpotlightCard`, `ExpendedBox`) — these would have failed at build/runtime
  under the App Router's Server Component rules.
- **Invalid nesting**: a `<button>` was nested inside a `<Link>` (`<a>`) in
  the hero CTA — invalid per the HTML spec and confusing for assistive
  technology. The link is now styled directly.
- **GSAP memory leak**: the hero logo's floating animation was never torn
  down on unmount, so remounts (fast refresh, navigation) stacked
  duplicate infinite tweens. It's now cleaned up properly.
- **Leftover debug code**: a stray `console.log` and a piece of dead state
  it depended on were removed from the `Tooltip` component.
- **`ExpendedBox` always showed "Show More"**, even when the content
  already fit inside the collapsed height, and never re-measured on
  resize. It now measures the content and only renders the toggle when
  it's actually needed.
- **Non-semantic markup**: skill tags were rendered as `<button>` elements
  that did nothing when clicked. They're now a proper `<ul>`/`<li>` list.
- **External links** (GitHub, LinkedIn, Telegram) previously opened in the
  same tab with no `rel` attribute. They now use
  `target="_blank" rel="noopener noreferrer"`.
- **Dead code removal**: ~250 lines of unused CSS for a logo-loop marquee
  and a 3D "sphere gallery" that were never wired into any component, plus
  the `ogl` and `@use-gesture/react` dependencies they belonged to.
- **`#project` nav link** pointed at an empty, invisible `<section>` and was
  commented out in the navbar. It now has real placeholder content and the
  nav link is restored.
- **Next.js metadata**: `viewport` and `themeColor` were declared inside
  `metadata`, which is deprecated and produces a runtime warning; they now
  live in their own `viewport` export. Added `metadataBase` (needed for
  correct absolute Open Graph image URLs), a proper `en_US` OG locale
  (it was previously the invalid value `"Iran"`), `robots.ts`, and
  `sitemap.ts`.
- **Accessibility**: added `aria-label`s to icon-only links, `aria-hidden`
  on decorative icons, `aria-expanded` on the expand/collapse toggle, and
  a `prefers-reduced-motion` fallback for the hero logo float and the
  shiny-text shimmer.
- **Cleaner asset imports**: `@/../public/logo.webp` was replaced with a
  dedicated `@public/*` path alias.

## Deployment

The project deploys as-is to [Vercel](https://vercel.com/new) — connect the
repository and it will detect the Next.js App Router project automatically.

## License

This is a personal portfolio. Feel free to use the code structure as a
reference, but please don't reuse the personal content, resume, or images.
