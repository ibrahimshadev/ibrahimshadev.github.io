# Image Prompts — The Ibrahimsha Times

## Style Guide

### Overall Approach: Era-Blended Vintage
Each image matched to a vintage era that best fits its subject, unified by:
- **Aged paper base** — yellowish/cream, slightly distressed
- **Monochrome illustration** — fine crosshatch line work, engraving style
- **Selective spot color** — not full color, just accents
- **No modern elements** — everything reimagined through period-appropriate metaphors

### Color Rules
| Image Type | Accent Colors |
|-----------|--------------|
| Hero + Cards (editorial) | Burgundy (#7a1f1a) spot accents — matching the site's primary color |
| Voxly (special edition) | Warm rustic palette — burnt sienna, aged gold, dusty red |

---

## Image 1: Hero

- **File:** `images/hero.webp`
- **Aspect Ratio:** 4:3
- **Era:** 1890s broadsheet engraving
- **Color:** Burgundy spot accents

### Prompt
A Victorian-era engineer at an ornate drafting table in a lamp-lit study. Behind him, a wall-mounted map showing routes between India, Singapore, and beyond, with route lines highlighted. On the desk: architectural blueprints of mechanical systems, an open ledger, an ink well, and a compass. The scene rendered in fine crosshatch line engraving style on aged yellowish paper. Subtle burgundy tint on the map routes and key mechanical elements. No modern technology — everything reimagined as 1890s equivalents.

### Context
- Headline: "BACKEND ARCHITECT REPORTS FOR DUTY; Senior Engineer Ships AI Systems Remotely From Southern India"
- Caption: "The remote workstation from which production deployments are orchestrated across Singapore and India."
- Metaphor: Drafting table = system architecture, maps = international deployment reach

---

## Image 2: Voxly Banner

- **File:** `images/voxly-banner.webp`
- **Aspect Ratio:** 16:9
- **Era:** 1930s art deco radio advertisement poster
- **Color:** Warm rustic (burnt sienna, aged gold, dusty red)

### Prompt
Bold art deco advertisement poster on aged cream paper. A stylized 1930s standing microphone at center, radiating geometric sound waves outward. Large bold text "VOXLY" in art deco typeface across the top. Below the microphone: "VOICE TO TEXT" in a decorative banner ribbon. Ornate geometric art deco borders framing the composition. Warm rustic color palette — burnt sienna, aged gold, and dusty red accents. Paper texture is slightly distressed with age spots. Style of a 1930s radio station advertisement or vintage movie poster announcement.

### Context
- Headline: "Engineer Open-Sources Voice-to-Text Desktop App"
- Caption: "Artist's rendition of the announcement, in the style of a 1940s Hollywood news reel."
- Metaphor: 1930s radio ad = voice technology, art deco poster = "special edition" showpiece

---

## Image 3: Card 1 — AI Pipeline (01Digital)

- **File:** `images/card1-ai-pipeline.webp`
- **Aspect Ratio:** 16:9
- **Era:** 1900s–1920s technical illustration
- **Color:** Burgundy spot accents

### Prompt
A grand Victorian analytical engine room rendered as a detailed technical engraving. Five interconnected stages of a mechanical pipeline flowing left to right — brass gears, steam tubes, processing chambers, and pneumatic data tubes connecting each stage. Small human operators at each station tending the machinery. Above: data flowing through overhead pneumatic tubes like a postal sorting system. Fine crosshatch illustration on aged yellowed paper. Burgundy spot color on the five stage labels and key mechanical joints. Style of a 19th-century industrial encyclopedia illustration.

### Context
- Headline: "Lead Engineer Deploys 5-Stage AI Pipeline"
- Caption: "Multi-agent RAG pipeline dashboard"
- Company: 01Digital, Singapore
- Metaphor: Victorian analytical engine = AI/ML pipeline, 5 mechanical stages = 5-stage RAG pipeline, pneumatic tubes = data flow

---

## Image 4: Card 2 — Cybersecurity (S2T)

- **File:** `images/card2-cybersecurity.webp`
- **Aspect Ratio:** 3:4 (portrait)
- **Era:** 1900s–1920s technical illustration
- **Color:** Burgundy spot accents

### Prompt
A Victorian intelligence war room rendered in detailed crosshatch engraving style. A figure in period dress seated at a large oak desk, operating cipher wheels and examining code books. On the wall behind: a large map with pins and string connections forming an investigation web. A telegraph machine on a side table, tape spooling out. Stacks of intercepted dispatches and sealed documents. A magnifying glass hovering over a document on the desk. Fine line engraving on aged paper. Burgundy spot color on the map pins, cipher wheel highlights, and key document seals. Style of a Victorian-era spy thriller illustration.

### Context
- Headline: "Cybersecurity Firm Builds OSINT Platform at Scale"
- Caption: "OSINT intelligence platform"
- Company: S2T Cyberspace, Singapore
- Metaphor: Cipher machines = encryption, telegraph intercepts = data interception, investigation board with strings = OSINT analysis graph

---

## Image 5: Card 3 — Network Testing (HCL)

- **File:** `images/card3-network-testing.webp`
- **Aspect Ratio:** ~3:1 (wide panoramic strip, displayed at h-48)
- **Era:** 1900s–1920s technical illustration
- **Color:** Burgundy spot accents

### Prompt
A wide panoramic Victorian-era telephone exchange testing facility rendered as a detailed crosshatch engraving. Engineers in waistcoats and rolled sleeves at testing stations along a long workbench. Behind them: a massive wall of cable connections, switchboard panels, and routing matrices stretching across the frame. In the foreground: mechanical testing gauges, voltage meters with needles, and a clipboard with checkmark results. Fine crosshatch line work on aged yellowed paper. Burgundy spot color on the gauge needles, test pass indicators, and key cable junctions. Style of a panoramic industrial illustration from an early 1900s engineering journal.

### Context
- Headline: "Network Testing Framework Serves 5,000 Engineers Worldwide"
- Caption: "Testing Pipeline Output"
- Company: HCL Technologies
- Metaphor: Telephone exchange = network infrastructure, switchboard testing = automated test framework, 5000 connections = 5000 engineers worldwide

---

## Generation Notes

- Use nanobanana MCP tool for generation
- Output to `/home/ibrahim/work/landing/ibrahimshadev/images/` with original filenames
- Convert to webp format after generation if needed
- The hero image has CSS `grayscale contrast-125` applied — the burgundy accents may show through depending on the effect. Consider this when finalizing.
- Card 2 has CSS `grayscale brightness-110 contrast-125` — same consideration.
- Card 1 has CSS `grayscale` — same consideration.
- Card 3 has CSS `grayscale` — same consideration.
- Only the Voxly banner has NO grayscale CSS filter, so its warm rustic colors will display as-is.
