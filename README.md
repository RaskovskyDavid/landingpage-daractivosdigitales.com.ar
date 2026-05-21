# DAR | Activos Digitales — Design System

## Company Overview

**DAR | Activos Digitales** is a boutique technology consultancy based in Tucumán, Argentina. Founded and led by a Senior Product Designer & Web Architect with 10+ years of experience as a Software Architect.

### Core Concept
The company reframes software from a "monthly expense" into a **capital asset** — a durable investment that belongs to the client. This is the central philosophical and marketing proposition.

### Unique Value Proposition
- Custom software engineering and AI solutions for leading businesses in Tucumán
- Subscription model with **guaranteed source code ownership transfer** by contract
- Clients own their infrastructure, not rent it

### Target Clients
Owners and financial directors of established businesses in the Tucumán region: banking, insurance, agro-industrial, paper manufacturing, food processing.

### Known Clients / Trust Partners
- Banco Galicia
- Papelera Tucumán
- Complejo Alimenticio San Salvador
- New Alliance Insurance Brokers

---

## Products / Surfaces

### 1. Landing Page (Primary Surface)
A single-page marketing website targeting business owners and finance managers. Converts visitors into consultation leads.

**Sections:**
- Nav Bar (Logo, Servicios, Modelo de Propiedad, Trayectoria, CTA)
- Hero (H1 + subtext + dual CTAs)
- Social Proof Marquee (client logos/names)
- Pain Point section ("¿Software o Gasto?")
- Services (3 columns)
- Rent-to-Own Model (highlighted section)
- About (founder bio)
- Footer

**Source:** Provided brief (no codebase or Figma attached)

---

## Sources

- **Brief:** Provided inline in conversation (no Figma, no codebase attached)
- **Fonts:** Google Fonts (Plus Jakarta Sans as primary — see FONT NOTE below)
- **Icons:** Lucide Icons via CDN
- **No external design files were provided**

> ⚠️ **FONT NOTE:** The brief suggests Inter or Montserrat. We've chosen **Plus Jakarta Sans** as it offers more geometric character and premium feel appropriate for the QuantumBlack/McKinsey-inspired style. Flag raised to user — see Fonts section below.

---

## CONTENT FUNDAMENTALS

### Language
- **Primary language:** Spanish (Argentina)
- Copy is professional, direct, and authoritative — written for business owners and CFOs
- No colloquialisms or slang; formal register throughout
- Occasional English technical terms used naturally (e.g. "RAG", ".NET", "Azure")

### Tone
- **Confident, not arrogant** — speaks as a trusted peer, not a salesperson
- **Technically credible** — uses precise vocabulary (arquitectura, infraestructura, patrimonio)
- **Urgency without pressure** — frames the status quo as costly, not the product as miraculous
- No emojis. No exclamation points in headlines.

### Casing
- **Sentence case** for body text and CTAs
- **Title Case** for section headers (Spanish-style, first word only capitalized)
- Brand name always written as: **DAR | Activos Digitales** (vertical bar separator, spaces around it)

### Voice Principles
- **"Usted"** form (formal second person), not "tú/vos"
- Speaks *to* the business owner: "Usted es el dueño de su infraestructura"
- Avoids tech-vendor clichés ("solución integral", "escalable", etc.)
- Favors economic and asset metaphors: *patrimonio*, *activo*, *capital*, *inversión*

### Key Copy Examples
- H1: "Transforme su información en su activo más rentable."
- Pain: "No puede permitirse tirar dinero en soluciones que no le pertenecen."
- Model: "Usted es el dueño de su infraestructura."
- Footer tagline: "DAR: Ingeniería que no falla."
- CTA: "Agendar charla técnica" (not "Contactar")

### Emoji & Special Characters
- **No emoji** — ever
- The **|** pipe character is used as a brand separator in the logo
- **·** (middot) may be used as a list separator in dense contexts

---

## VISUAL FOUNDATIONS

### Color System
- **Navy Deep** `#0A2540` — primary brand dark, backgrounds, nav
- **White** `#FFFFFF` — primary background, text on dark
- **Cyan Electric** `#00D4FF` — accent, highlights, CTAs, dividers
- **Cyan Muted** `#0099CC` — hover states for cyan elements
- **Navy Mid** `#0D3060` — secondary dark for cards/sections
- **Navy Light** `#1A4A7A` — tertiary, borders on dark bg
- **Slate** `#6B8AAE` — secondary text on dark backgrounds
- **Off-White** `#F5F8FA` — light section backgrounds
- **Text Dark** `#0A2540` — body text on light backgrounds
- **Text Muted** `#4A6280` — secondary text on light backgrounds

### Typography
- **Display / H1:** Plus Jakarta Sans, 700 weight, tight tracking (-0.02em), large (64–80px on desktop)
- **H2:** Plus Jakarta Sans, 600, tracking -0.01em, 40–48px
- **H3:** Plus Jakarta Sans, 600, 24–28px
- **Body:** Plus Jakarta Sans, 400, 17–18px, line-height 1.65
- **Caption/Label:** Plus Jakarta Sans, 500, 12–14px, letter-spacing 0.08em, uppercase for labels
- **Code/Tech:** JetBrains Mono, 400, used sparingly for technical values

### Spacing System
- Base unit: **8px**
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px
- Section padding: 96–128px vertical
- Max content width: 1200px, centered

### Backgrounds
- **Dark sections:** `#0A2540` solid, sometimes with subtle grid/dot overlay at 4% opacity
- **Light sections:** `#F5F8FA` or pure white
- **No gradients** (except one hero accent gradient behind the headline)
- **Abstract data-flow graphics** (node graphs, architecture diagrams) as decorative SVG — never stock photos
- No photographs of people (except a professional headshot in About section)

### Cards
- On dark bg: `background: rgba(255,255,255,0.04)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 12px`
- On light bg: `background: #FFFFFF`, `box-shadow: 0 2px 24px rgba(10,37,64,0.08)`, `border-radius: 12px`
- No colored left-border accents (anti-pattern explicitly avoided)

### Borders & Dividers
- Hairline: `1px solid rgba(255,255,255,0.08)` on dark
- Hairline: `1px solid rgba(10,37,64,0.10)` on light
- Cyan accent divider: `2px solid #00D4FF` used sparingly (section intros, feature callouts)

### Corner Radii
- `4px` — tags, badges, inline code
- `8px` — buttons, inputs
- `12px` — cards, modals
- `24px` — pill badges, marquee chips

### Shadows
- `none` on dark bg cards (border + transparency instead)
- Subtle: `0 2px 12px rgba(10,37,64,0.06)`
- Medium: `0 4px 24px rgba(10,37,64,0.12)`
- Elevated: `0 8px 48px rgba(10,37,64,0.18)`

### Animation
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — fast out, elastic feel (Stripe-inspired)
- **Duration:** 200ms hover, 400ms entrance, 600ms hero
- **Entrance:** fade-up (translateY 20px → 0, opacity 0 → 1)
- **No bounces** — restrained, corporate
- Marquee: continuous horizontal scroll, `linear` timing

### Hover States
- Buttons: background darkens/lightens 10%, `transform: translateY(-1px)`, shadow increases
- Links: `color: #00D4FF`, underline appears
- Cards: `border-color` brightens slightly, subtle `translateY(-2px)`
- Nav links: opacity 0.6 → 1

### Press States
- Buttons: `transform: scale(0.98)`, shadow reduces

### Transparency & Blur
- Nav (sticky on scroll): `backdrop-filter: blur(20px)`, `background: rgba(10,37,64,0.85)`
- Modal overlays: `background: rgba(10,37,64,0.6)`, `backdrop-filter: blur(8px)`

### Imagery
- **No stock photos of robots, servers, or generic tech**
- Abstract SVG: node graphs, data flow diagrams, architecture topology drawings
- Imagery color vibe: **cool blue-cyan**, monochromatic on dark navy
- Founder photo: **black and white preferred**, or desaturated to match palette

### Layout Rules
- Nav: fixed top, full-width, z-index 100
- Max content width: 1200px (1fr padding on sides)
- Mobile breakpoint: 768px
- Section rhythm: alternating dark/light backgrounds

---

## ICONOGRAPHY

### Approach
Lucide Icons (stroke-based, 1.5px stroke weight, 24px default size). Clean, geometric, no fill icons.

### Usage Rules
- Icon size: 20px in body context, 24px in feature cards, 32px in hero callouts
- Stroke: 1.5px always
- Color: `#00D4FF` (cyan) for feature icons on dark backgrounds; `#0A2540` for icons on light backgrounds
- Never used decoratively — only to reinforce copy meaning

### Icon Mapping
- Memoria Institucional (IA): `brain` or `database`
- Sistemas Críticos: `server` or `shield`
- Consultoría de Eficiencia: `bar-chart-2` or `trending-up`
- Code ownership: `git-branch`
- Subscription model: `refresh-cw`
- Contact/CTA: `calendar`
- LinkedIn: `linkedin` (Lucide brand icons)

### No custom icon font. No emoji. No PNG icons.

---

## File Index

```
README.md                         ← This file (full design system documentation)
SKILL.md                          ← Agent skill definition
colors_and_type.css               ← CSS design tokens (colors, typography, spacing)
assets/
  logo.svg                        ← DAR | Activos Digitales wordmark
  logo-light.svg                  ← White version for dark backgrounds
  node-graph.svg                  ← Abstract data flow / node illustration
  architecture.svg                ← Abstract architecture diagram illustration
preview/
  colors-brand.html               ← Brand color swatches
  colors-semantic.html            ← Semantic color usage
  type-display.html               ← Display type specimens
  type-body.html                  ← Body type + scale
  type-labels.html                ← Labels, captions, code
  spacing-tokens.html             ← Spacing scale tokens
  spacing-radius-shadow.html      ← Radii, shadows, borders
  components-buttons.html         ← Button variants and states
  components-cards.html           ← Card variants
  components-nav.html             ← Navigation bar
  components-badges.html          ← Badges, tags, chips
  components-sections.html        ← Section headers and dividers
  brand-logo.html                 ← Logo lockups
  brand-marquee.html              ← Client trust marquee
  brand-illustrations.html        ← Abstract graphic motifs
ui_kits/
  landing/
    README.md                     ← Landing page UI kit notes
    index.html                    ← Full landing page prototype
    Nav.jsx                       ← Navigation component
    Hero.jsx                      ← Hero section
    SocialProof.jsx               ← Client marquee
    PainPoint.jsx                 ← Pain point section
    Services.jsx                  ← Services 3-col grid
    Model.jsx                     ← Rent-to-own model section
    About.jsx                     ← Founder bio section
    Footer.jsx                    ← Footer
```
