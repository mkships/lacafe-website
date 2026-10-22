# La Café menu

A mobile-friendly, browse-only menu built with Next.js App Router, React and TypeScript. The 20 items, prices, descriptions, portions and estimated calories are transcribed from the supplied menu. Categories are grouped for easier browsing. No account or database is required.

## Run locally

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
```

The static site is generated in `out/`. Host that directory on any static host.

To preview that exact production output locally, run `npm start` after building and open `http://127.0.0.1:3001`. This uses a small Node static server; `next start` does not serve a static export.

Routes: `app/page.tsx` handles `/` (home), and `app/menu/page.tsx` handles `/menu` (menu browsing). Internal navigation uses `next/link`.

The two data arrays, `categories` and `menu`, live in `lib/menu.ts`. Edit menu items there. Edit branding in `app/globals.css`: the principal logo colours are `#7B3225` and `#FDFCF7`. The branding assets used by the app are in `public/`.

## Theme conventions

The `:root` block in `app/globals.css` is the source for shared design tokens. The logo's coffee-red is `--color-primary`; its cream is `--color-background`. Related surfaces, text, borders and states are derived with `color-mix()` so they stay coordinated when an anchor changes. Sage remains a supporting accent for High Protein badges.

Use the existing semantic variables in new components and CSS modules. Add shared colours to `:root` rather than hardcoding them in component styles. Typography uses `--font-sans` (Inter) and `--font-serif` (Libre Caslon Display). Shared spacing, radii, shadows and motion settings also live in `:root`; layout-specific dimensions stay with their components. Reduced-motion overrides stay with the styles they affect.

Google Fonts enhance the typography when online; system font fallbacks work without them. Calorie estimates come from the reference PDF. Ingredients and allergen information have not been invented. This app has no ordering or payment flow.

## Menu photos

All 20 menu items reference local 480px WebP photos in `public/dish-photos/`. These are sized for the menu cards, including high-density screens. Original full-resolution images, review sheets and generation prompts are archived separately and are intentionally excluded from this repository. The header uses a smaller lossless WebP wordmark.

## Footer links

The menu footer lives in `app/ui/Footer.tsx`. The homepage has a simple story and logo in `app/ui/HomeHero.tsx`, followed by ordering actions, and omits the footer to avoid repeating them. Both use the shared `app/ui/OrderButton.tsx` component. Set the restaurant's Swiggy and Zomato listing URLs in `lib/contact.ts`; those buttons stay disabled while their URLs are empty. The WhatsApp button uses `https://wa.me/919908974794`. All three use local brand SVGs from Simple Icons (see `public/brands/README.md`).

## Customer reviews

The homepage's `app/ui/WallOfLove.tsx` carousel appears after the hero. Edit the four customer reviews in `lib/reviews.ts`. It highlights the centre card on desktop and shows one card at a time below 760px. Reviews rotate every eight seconds while visible, with arrows, selectors, touch swipes and a play/pause control. Rotation pauses on hover or keyboard focus; manual navigation stops autoplay until play is selected again. Reduced-motion preferences disable automatic rotation and slide transitions.
