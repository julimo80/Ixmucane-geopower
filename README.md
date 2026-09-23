# Ixmucané GeoPower

Marketing site for Ixmucané GeoPower — geothermal reservoir simulation and
full-lifecycle development services (AI favorability mapping, geologic
modelling, well targeting/design, reservoir simulation, well testing and
PTS/ABI logging) across Guatemala and Latin America.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

## Editing real content

The page is data-driven. To replace placeholder content, edit the JSON files
in `src/data/` — no need to touch the `.astro` component files unless you're
changing layout:

| File | Controls |
|---|---|
| `src/data/site.json` | Site name, tagline, nav, hero copy, stat strip, contact email/heading, footer note |
| `src/data/flagship.json` | The "AI Favorability Mapping" flagship service card and map caption |
| `src/data/services.json` | The 7 remaining numbered services (02–08) |
| `src/data/technology.json` | The Technology deep-dive heading + 4 capability items |
| `src/data/caseStudies.json` | Case study cards — set `"draft": false` once a case study is client-confirmed and ready to publish (the "Draft" badge and the yellow draft-note banner in `src/components/CaseStudies.astro` are there because none of these are confirmed yet) |
| `src/data/team.json` | Team & publications section |

Two graphics are hand-drawn SVG rather than data-driven, since they're
illustrative diagrams, not prose:
- `src/components/Hero.astro` — the reservoir cross-section
- `src/components/FavorabilityMap.astro` — the favorability heatmap concept graphic (currently illustrative, not derived from real analysis — see `flagship.json`'s `mapCaption`)

## Local development

This machine's default Node (v20) is older than Astro needs. On NeSI, load a
newer Node module first:

```bash
module load nodejs/24.17.0-GCCcore-15.2.0
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Deployment

Connect this GitHub repo to [Vercel](https://vercel.com), [Netlify](https://netlify.com)
or [Cloudflare Pages](https://pages.cloudflare.com) — any of them auto-detect
Astro, run `npm run build`, and redeploy on every push to `main`. No server
config needed since the site is fully static.
