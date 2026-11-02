# MIRA — Architectural Domestic Intelligence
> **Pure Form. Silent Intelligence. / نقاء الشكل. هدوء الذكاء.**
> Designed in Arabia. Refined for the World. / صُمم في الجزيرة العربية. أُتقن للعالم.

MIRA is a luxury domestic appliance brand inspired by Apple-grade minimalism, monolithic geometry, and cultural warmth. This interactive web application delivers an immersive, keynote-style scrollytelling shopping experience with instantaneous dual currency toggling (USD and SAR), bidirectional localization (English LTR and Arabic RTL), and a guaranteed-approval Apple Pay virtual card checkout flow.

---

## Official Product Catalog & Dual Pricing

| # | Product Name | Architectural Role | USD Price | SAR Price | Key Finishes |
|---|--------------|---------------------|-----------|-----------|--------------|
| 1 | **MIRA HOME** | Smart Home Orchestration & Central Hub | **$149 USD** | **558.75 SAR** | Matte Charcoal / Pristine White |
| 2 | **MIRA FRIDGE** | Intelligent Cold Sanctuary & Expiration AI | **$3,299 USD** | **12,371.25 SAR** | Pure White / Titanium Crate |
| 3 | **MIRA MINI FRIDGE** | Master Suite & Bedside Cold Preservation | **$599 USD** | **2,246.25 SAR** | Matte Charcoal / Pristine White |
| 4 | **MIRA OVEN** | Precision Thermal Gourmet & Induction Surface | **$899 USD** | **3,371.25 SAR** | Matte Charcoal / Pristine White |
| 5 | **MIRA BREW** | Artisanal Extraction & Thermodynamic Pour | **$399 USD** | **1,496.25 SAR** | Matte Charcoal / Pristine White |
| 6 | **MIRA AIR** | Atmospheric Purification & Silent Laminar Flow | **$799 USD** | **2,996.25 SAR** | Floor Tower / Wall Mount |
| 7 | **MIRA WASH** | Ultrasonic Hydrodynamic Fabric Sanctuary | **$949 USD** | **3,558.75 SAR** | Matte Charcoal / Pristine White |

---

## Key Features & User Experience

1. **Apple-Inspired Aesthetic & Minimalism**:
   - Deep contrast monochrome palette (`#FFFFFF`, `#1D1D1F`, `#F5F5F7`, `#121214`).
   - Clean neo-grotesque typography: `Inter` for English, `Cairo` & `IBM Plex Sans Arabic` for Arabic.
   - Glassmorphic floating header with `backdrop-filter: blur(20px)`.
   - Generous breathing space, subtle hairline dividers, and zero visual clutter.

2. **Apple Keynote Scrollytelling Showcase**:
   - High-impact monolithic hero featuring the flagship **MIRA HOME** with interactive colorway switching and interactive hotspots for the circular OLED display and solid walnut base.
   - Interactive scrollytelling keynote stage exploring all seven instruments with architectural storytelling, finish swappers, and technical specifications.
   - Architectural Catalog Grid featuring dual finish switches and an **Unboxing Peek** mode revealing the collector's wooden pallet and unboxing crates.

3. **Bilingual Localization & Dynamic Dual Currency**:
   - Language Switcher: Full English (LTR) and Arabic (RTL) flipping with native typography and layout mirroring.
   - Currency Switcher: Instant reactive formatting between USD ($) and SAR (ر.س) across hero tags, keynote stage, catalog cards, checkout drawer, and receipts.

4. **Apple Pay Style Virtual Card Payment Flow (Always Approved)**:
   - Minimal slide-over checkout drawer with real-time interactive titanium virtual card visualizer (chip, wireless wave, cardholder mirror, 16-digit grouping, and network detection for MADA / VISA / Mastercard).
   - Instant mock authorization sequence with a sleek progressive handshake indicator.
   - Guaranteed success screen ("Transaction Approved / تم قبول العملية بنجاح") displaying order reference ID, selected instrument, finish, exact amount paid, authorization code, and timestamp.
   - One-click **Download Virtual Receipt** button generating an official plain-text virtual receipt file.

---

## How to Run Locally

### Option 1: Direct Browser Execution (Zero Dependencies)
Simply double-click or open `index.html` in any modern web browser (Safari, Chrome, Firefox, Edge). No server or build process required.

### Option 2: Local Development Server via npm
If you prefer running via npm:
```bash
# Start a local static server
npm run dev

# Or using Python 3
npm run serve
```
Then navigate to `http://localhost:3000`.

---

## Project Directory Structure

```
mira-luxury-appliances/
├── index.html                  # Main application markup
├── style.css                   # Minimalist Apple-inspired stylesheet
├── app.js                      # Application state, dual pricing, i18n, & payment flow
├── package.json                # Project configuration & npm scripts
├── README.md                   # Complete documentation
└── assets/
    └── images/                 # Mapped high-resolution product imagery & crates
        ├── mira-home-charcoal.jpg
        ├── mira-home-white.jpg
        ├── mira-home-wall.jpg
        ├── mira-fridge-white.jpg
        ├── mira-fridge-box-charcoal.jpg
        ├── mira-fridge-box-white.jpg
        ├── mira-mini-fridge-charcoal.jpg
        ├── mira-mini-fridge-white.jpg
        ├── mira-oven-charcoal.jpg
        ├── mira-oven-white.jpg
        ├── mira-brew-charcoal.jpg
        ├── mira-brew-white.jpg
        ├── mira-air-tower-charcoal.jpg
        ├── mira-air-tower-white.jpg
        ├── mira-wash-charcoal.jpg
        └── mira-wash-white.jpg
```

© 2026 MIRA Technologies LLC. All rights reserved.
