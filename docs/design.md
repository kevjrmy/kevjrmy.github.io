# Design

The look and feel the site is aiming for. The tokens themselves are in `src/index.css`; this file is the intent behind them.

## Direction

- Inspiration: laravel.com and nextjs.org. Clean, modern, professional.
- Minimalist and elegant, with a warm and welcoming tone.
- Soft colors, generous whitespace, friendly and readable typography.
- Light theme only.
- Red is the single accent (`--clr-dark-red`, `--clr-medium-red`, `--clr-light-red`), on neutral greys.
- Typeface: Instrument Sans, self-hosted from `public/fonts/`.
- The hero terminal (`CliPrompt`) uses the Catppuccin Mocha palette and is the one deliberately dark element.

## Animation

Conservative by default: subtle signals, not theatrical entrances.

- The hero typewriter is the one on-load attention effect. Hero text only fades in (opacity, 300ms, no slide, no delay) so it does not compete.
- Scroll reveals use a one-shot `IntersectionObserver` that adds a class. Stagger comes from a `--card-delay` custom property set inline per card.
- Prefer CSS animations over JS-driven ones.
- Everything must respect `prefers-reduced-motion`. The global rule in `index.css` covers durations; elements that start hidden need their own visible fallback.

## Implementation habits

- Prefer CSS-only and pseudo-element solutions over extra DOM nodes. The hero grid background is a single `::before` with an SVG data URI and a composed mask.
- Mobile-first: write the small-screen layout, then widen at 640px, 768px, and 1024px.

## Avoid

- Stock photos.
- Long paragraphs above the fold.
- More than one primary CTA visible at once.
- Listing every technology known: pick the 5 or 6 that matter most.
