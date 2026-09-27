# Refinehaus Clinic — Homepage Prototype

Single-file React homepage prototype for Refinehaus Clinic (Nakhon Ratchasima, Thailand), a doctor-led boutique aesthetic clinic.

## How it works

`index.html` is fully self-contained — no build step, no `npm install` needed. Open it directly in a browser.

It loads React, ReactDOM, and Babel Standalone from CDN (cdnjs), plus Tailwind CSS from its Play CDN. The JSX app lives inline in a `<script type="text/babel">` tag at the bottom of the file and is transpiled in-browser by Babel at load time. Fonts (Cormorant Garamond, Manrope, IBM Plex Sans Thai, Krub) load from Google Fonts.

To preview locally, just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Editing in Claude Code

Everything — layout, components, copy, styling — lives in this one file:

- `<style>` block near the top: CSS custom properties for the color palette (`--c-cream`, `--c-olive`, etc.), plus all custom component classes (buttons, cards, placeholders, carousels, animations).
- `tailwind.config` script block: extends Tailwind with the brand color names and custom breakpoints (`sm`/`md`/`lg`).
- `<script type="text/babel">` block: the React app. Each homepage section is its own component (`Hero`, `ConcernCards`, `ExpertiseSection`, `TechnologySection`, `DoctorSection`, `ApproachTimeline`, `ResultsSection`, `KnowledgeSection`, `ClinicExperience`, `LocationSection`, `FinalCTA`, `Footer`, plus `Header` / `MobileMenu` / `MobileStickyCTA`). Content for repeatable sections (concerns, expertise cards, tech, doctors, timeline steps, case studies, articles, clinic photos) lives in `const` arrays near the top of the script, above the component that renders them.

Images are all placeholders — `<Ph label="..." />` renders a labeled placeholder box describing the recommended real photo. The two logo images (`WORDMARK_OLIVE`, `WORDMARK_CREAM`) are embedded as base64 `data:` URIs near the top of the script.

## Brand colors

| Name | Hex |
|---|---|
| Cream (primary bg) | `#F4F0E7` |
| Cream 2 (alt bg) | `#F7F4ED` |
| Olive (primary) | `#465447` |
| Olive Dark | `#39483D` |
| Sage (secondary) | `#A7B09E` |
| Taupe (accent) | `#C9BAA5` |
| Charcoal (text) | `#353631` |
| Muted (secondary text) | `#6F7069` |

## Known placeholders to fill in with real data

- Doctor photos and both doctors' info are filled in, but all other photography is placeholder.
- Clinic address, phone number, LINE ID, and social links (footer + Visit section) are placeholders.
- Clinic license number and operator name (footer) are placeholders.
- The "โปรโมชั่น" nav item currently links to the Knowledge section — there's no dedicated promotions section built yet.
