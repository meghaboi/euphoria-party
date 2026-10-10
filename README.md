# Euphoria Party — Hyderabad

Next.js (App Router, JS, Tailwind v4). Powered by telugu.social (footer + details only — the organizer is separate).

```bash
npm run dev      # http://localhost:3000
npm run build
```

## Fill these in — `lib/event.js`
`date`, `venue`, `ticketUrl`, `presentedBy` are `null` placeholders. The page shows "Announcing soon"
until they're set; setting `ticketUrl` switches the tickets section to a live "Get tickets" button.
Highlight / run-of-show copy is also placeholder — check it matches the real event.

## Imagery — `public/images/`
`stage.jpg` (hero dither veil) and `disco-ball.jpg` (Pixel Sculpt) are procedurally rendered stand-ins
(`node scripts/generate-images.mjs`). Drop real art over the same filenames; nothing else changes.

## Effects
- `components/AeroShards.jsx` — WebGPU shard backdrop; `components/Backdrop.jsx` morphs it per section
  (`data-scene` / `data-flow` attributes on each `<section>`). Falls back to a CSS aurora without WebGPU.
- `components/DitherVeil.jsx` — hero image reveal (WebGL2, ogl).
- `components/PixelSculpt.jsx` — own implementation (three.js) of the Pixel Sculpt idea, since the React Bits Pro
  component is license-gated. To use the real one: set `REACTBITS_LICENSE_KEY`, configure the registry per
  https://pro.reactbits.dev/docs/installation, run `npx shadcn@latest add @reactbits-starter/pixel-sculpt-tw`,
  and swap the import in `components/SculptSection.jsx`.
