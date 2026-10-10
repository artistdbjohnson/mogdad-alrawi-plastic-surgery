# Design meeting — Mogdad Alrawi Plastic Surgery (Path A pitch)
Date: Sat 2026-10-10 (ad hoc, Doug asked) · **UK geo day** · Studio lead: Grok (sole GitHub writer) · Source: https://www.mogdadalrawiplasticsurgery.co.uk/ (Squarespace) · Repo: artistdbjohnson/mogdad-alrawi-plastic-surgery · Pitch: https://mogdad-alrawi-plastic-surgery.vercel.app
Client: Mr Mogdad Alrawi — Consultant Plastic, Reconstructive & Cosmetic Surgeon, Newcastle upon Tyne / Gateshead (RVI · Cobalt Hospital, Ramsay Health · TSS Independent House). UK queue #6 (`factory-audit/2026-09-18-uk-local-sme-targets.md`). Independent consultant, not a chain. Client not contacted.
Seats: Reed (taste) · Axiom (innovation) · Ash (score / cheap-fail) · Nia · Lux · Prism · Mira · Kit · Wren · Glyph · Tasker · Vale · Jules.

## Domain line
```
Domain: UI/UX — factory transplant (pitch).
Craft shelf: [Motionsites seed: max-reed-portfolio] (+ twist: "Gallery label" open — the client's own marble torso on black with a museum wall label, then the label clears upward).
Resource search: full sweep below — shipped: none of the component kits (own CSS); look-only refs recorded.
Color search: colorable.jxnblk.com contrast pass on a marble/Tyne-night palette written ourselves.
Tool pass: Motionsites max-reed-portfolio (chassis) · footer.design (colophon footer, rebuilt) · Mobbin consult-booking flows (look only).
Inspiration vote: visualjournal.it — editorial/branding register for a museum-label type system (look only).
Motion shelf: prompt-motion.com — attitude "a still object, one light, patience" (look only); our own CSS keyframes.
Vibe-coding shelf: full sweep below — Minimal Gallery (LOOK) won the vote for restraint; no USE item shipped.
Expensive: Carrara marble + the Tyne at night. Cormorant Garamond display, Manrope UI, square corners, wide rests, the client’s own photography only (served from the client’s own Squarespace CDN originals through next/image — no copies committed).
Locks: EN default (UK) + PT twin · dark|light (persisted).
Stack: React + Tailwind + Next.js 15.5.27 + GitHub + Vercel.
```

## Brand lock (live site, exact)
- Name "Mogdad Alrawi Plastic Surgery"; no logo file published (Squarespace text title) → typographic wordmark, nothing invented.
- Pages/slugs kept: `/` (+ `/home` → `/` 308), `/services`, `/about`, `/contact`, `/appointments`. vercel.json `{ "cleanUrls": true, "trailingSlash": false }`.
- Contact: 07380 741080 · info@alrawiplasticsurgery.com · LinkedIn. All hospital/association/review links exactly as on /about (TSS, Ramsay, RVI, BAAPS, BAPRAS, PHIN, GMC 6063454, Top Doctors, RealSelf).
- Copy: exact English from all five pages; European Portuguese twin. Only fixes: "Ramsey Health" → "Ramsay Health" (the client's own link text and the hospital's name), "TSS Independant House" → "Independent". "Book now" → /appointments as on the live site.
- Contact form: the live Squarespace form is not reproduced as a working endpoint; ours shows a "not sent — call or email" note (pitch-safe, Torneiro precedent).

## Lock #13 — full-shelf sweep, item by item
### Shelf A — Resource USE list
| Item | Looked for | Decision |
|---|---|---|
| shadcn/ui (MIT) | Sheet for the phone menu, Dialog | Rejected — the menu is a 40-line own component; no dependency needed |
| Magic UI free | Text reveal, number ticker | Rejected — ticker = fake-stat energy; reveals are own CSS |
| Motion Primitives free | In-view, text effect | Rejected — same job done by `.rv` IntersectionObserver |
| Uiverse | Buttons / inputs | Rejected — community styles read template; square ink buttons written ourselves |
| mapcn | Hospital map | Rejected — three hospitals are links to their own profiles; a map adds weight, tiles need a provider |
| MicroKit | Hover micro-interaction | Rejected — arrow nudge is own CSS |
| Liquid Glass (glass.samasante.com) | Glass nav | Rejected — glass reads tech, not marble; nav uses a plain paper frost |
| CSS Text Effects | Display headline effect | Rejected — Expensive lock: no text effects on a surgeon's name |
| Anime.js | Opening timeline | Rejected — opening is CSS-only so it can never block the page |
| Kitbitz (CC0) | Anatomy line drawings | Rejected — illustration would cheapen real photography |
| 3Dicons free | Procedure icons | Rejected — icons-only healthcare grid is a craft-floor fail |
| 21st.dev | Bento card | Rejected — the bento is the Motionsites seed, rebuilt |
| designmd.ai | Clinic DESIGN.md | Rejected — none with a clear licence fits |
| kage.design | Prompt for editorial medical | Read, adapted in our words (museum-label caption register) |
| easyui.site / great-ui.com / paceui.com | Sections | Rejected — template rhythm |
| Aceternity UI free | Card hover / spotlight | Rejected — effect-heavy; Expensive lock |
| UIAble Community | Footer block | Rejected — footer rebuilt from footer.design reference |
| Kinetics | Scroll motion | Rejected — one motion attitude only (opening) |
| Circle Loaders (CC0) | Loader | Rejected — no loader; static pages |
### Shelf B — Prompt/Reference + Reference-only + Do-not-ship
| Item | Decision |
|---|---|
| jiro.build (free) | Read a "luxury clinic" prompt; adapted only the idea of credentials as a timeline (our words) |
| vibeprompts.dev | Read landing prompts; nothing taken |
| minimal.gallery | **LOOK — voted** (see Vibe-coding) |
| styles.refero.design | Looked at serif + grotesk pairings; confirmed Cormorant + Manrope direction |
| component.gallery | Checked accessible disclosure/menu patterns → Esc closes sheet, focusable controls ≥44px |
| appshot.gallery | Nothing for a desktop-led clinic site |
| navbar.gallery | Left wordmark / centred 3 links / right tools — taken |
| cta.gallery | One ink "Book now" only — taken (no second accent CTA) |
| designbookmark.com / cuedesign.space | Browsed; no shippable item |
| vantaui.com | Rejected — shipping needs a paid plan |
| gradientbuttons.colorion.co | Rejected — no gradients on buttons |
| scrolltide.co, dev.cards, colir.space, studio.zoxilsi.cc | Do-not-ship — not opened for assets |
### Color shelf
| Item | Decision |
|---|---|
| colorable.jxnblk.com | **USED** — contrast: ink #1B1D20 on marble #F3F0EB = 14.9:1; muted #5C5E63 on marble = 5.7:1; night-ink #ECE8E1 on #0F1217 = 15.4:1; dark accent #B9C6D2 on #111418 = 10.6:1; dark muted #A6A8AD on #111418 = 7.8:1 (all AA+) |
| shadergradient.co | Rejected — moving gradient is off-register |
| backgrounds.supply gradient-lab | Rejected — no decorative gradients (only legibility scrims over photos) |
| tabbied.com patterns | Rejected — pattern fights marble |
| colorflow.ls.graphics / gradientsaas | Rejected — matte surfaces only |
| ramps.studio | Looked at a cold-grey ramp; our marble/stone/vein ramp written ourselves |
### Tool shelf
| Item | Decision |
|---|---|
| motionsites.ai | **Craft vote** — free seed `max-reed-portfolio` |
| prompt-motion.com | Motion shelf (below) |
| footer.design | Colophon footer (wordmark + post-nominals, three link columns, one attribution line), rebuilt |
| mobbin.com | Consult-booking flows: one clear "Book now" path to the hours page — look only |
| aistudio.google.com | Not used (not a production host) |
| rize.io | Not part of a client build |
### Inspiration shelf (one vote)
| Shelf | Votes |
|---|---|
| **visualjournal.it** — editorial/branding register: museum-label captions, numerals as content, wide margins | **9** (Reed, Nia, Lux, Prism, Axiom, Wren, Glyph, Jules, Ash) |
| brandguidelines.net — wordmark clear-space | 2 (Kit, Tasker) — applied anyway: wordmark keeps cap-height clear space |
| recent.design / noiced.com / posts.design / deck.gallery / logosystem.co | 2 (Mira, Vale) / 0 — no lesson for a surgeon's site |
Look only; nothing copied.
### Prompt Motion (look only)
Attitude voted: a single object under one light, revealed slowly, no bounce, one move per beat. Implemented as the "Gallery label" opening (torso rises 18px from dim, label lines settle 0.25s apart, overlay clears upward via clip-path at 2.7s) and calm 1s plate reveals. No clips rehosted, no prompt pasted. `prefers-reduced-motion` → no opening, no reveals.
### Vibe-coding 25 (one item per tier considered; vote)
USE tier: every USE item was looked at in Shelf A above — none shipped (each reason logged). ADAPT tier: Jiro / Kage prompts read, ideas re-written in our words, nothing committed. LOOK tier: **Minimal Gallery — voted** (restraint: one serif, one grotesk, hairlines, no ornaments); Refero Styles used for the type pairing check. OUT tier: no Pro / premium / membership item touched.

## Craft vote — Motionsites `max-reed-portfolio` (LOCKED)
Unused by any prior build. Applied before layout: header statement row (big title left, one sentence right) → "Discover the excellence in our clinic"; the 3-col bento → (1) tall "Background" card over night media with a year/role timeline → the surgeon's real dated credentials 1999–2022, (2) "Client voice" card → exact patient quotes, reader-chosen, no auto-advance, (3) portrait card → the client's real photo of Mr Alrawi, (4) tall card → the three hospitals + free consultation hours. Rejected from the seed: dark-only theme, Inter, rounded-2xl cards, sparkle icons, "10M+" stat card (no fake stats), liquid-glass pill.

## Opening vote — LOCKED: "Gallery label"
Must differ from all prior ships (Farmington poster · Boho Ken Burns · BRA splash · LP crest · Batley quiet type · Franklin stamp · Quinta poster · Adamthwaite scroll-reveal · Forsyth curtain · Oralvide stamp · City Skin badges · Axis stamp · Lane aperture · Espacio lexicon · Cary contour · Torneiro tiles · Tower House Ascent).
| Option | Votes |
|---|---|
| Splash video | 0 — no client video; generated surgery footage would mislead |
| Still poster / quiet type / scroll-reveal | 0 — owned by earlier ships |
| **Gallery label** — client's marble torso on black + museum wall label (name, role, Newcastle since 2012, post-nominals), label clears upward | **13** |
Spec: CSS-only, ≤3.6 s, once per session (`ma-open-seen`), skipped on hash, reduced motion, return visit, click/tap/any key; ends in `visibility:hidden` even if JS never hydrates.

## Expensive material
Carrara marble (the client's own torso photograph) + the Tyne at night (the client's own bridge photographs). Matte paper surfaces, square corners, hairline rules, no icons, no emoji, no gradients except photo scrims. Cormorant Garamond 500/600 (roman only, no italic headers) + Manrope. Rests clamp(84px,12vh,168px).

## Identity / staff
The live site publishes one real portrait of Mr Alrawi → used as-is (844 px source capped to ≤ 30vw/34vw plates). No identity-preserving generation was run (Grok Imagine/Firefly not exposed to this run); no invented faces, no before/after imagery.

## Axiom twists (3)
1. Gallery label opening (above). 2. Credentials as a timeline in the Background card (every year from /about). 3. Services as a numbered index (01–05 groups, every procedure listed, deep-linkable `/services#breast` …).
Reed kills: icon grids, review carousel auto-advance, fake ratings (PHIN numbers not on client site → not shown), stock clinic people. **Reed: PASS.**

## Gauntlet log
Round 1 (harsh) — found and fixed: (1) "Book now" leaked into the phone nav (`.btn` display overrode `.nav-book`) → scoped selector; (2) wordmark wrapped to three lines on phones → nowrap + phone size; (3) `/_next/image` 400s (Next 15.5 `images.qualities`) → declared [75, 80]; (4) portrait caption rendered at the top of the card (specificity) → fixed; (5) explore band copy over a bright sky at phone width → copy moved below the plate under 1100px; (6) favicon 404 → icon added; (7) opening torso too small at 1440 → sized from viewport height.
Round 2 — 1440 + 390 (iPhone UA, touch, @2x): no horizontal scroll on any route, zero console/network errors, menu opens/closes (Esc), EN|PT + dark|light persist without flash, `next build` + `next lint` clean.
Round 3 — deployed URL re-checked (see build log).
**Ash: 10/10 · Reed: PASS · Hallmark gates PASS · Expensive: PASS.**
Honest residuals: portrait source is 844 px; torso source is 557 × 807 (held to ≤ 44vh); phone checks are Chrome emulation, not a real iPhone.
