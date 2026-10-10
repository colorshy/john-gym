# JOHN GYM — FIGMA EDITING & RECONSTRUCTION GUIDE
### Heavyweight Athletic Brutalism / Kinetic Editorial System (v2.0)

This directory (`exports/figma/`) contains all prepared vector graphics, photographic assets, design tokens, and high-resolution sectional reference renders required to recreate and independently edit the **JOHN GYM** website in Figma with 1:1 fidelity and complete typographic freedom.

---

## 1. Directory Structure

```text
exports/figma/
├── FIGMA_IMPORT_GUIDE.md           # This master documentation
├── tokens/
│   └── design_tokens.json          # Structured tokens (Tokens Studio / Figma Variables format)
├── logos/
│   ├── brand_wordmark.svg          # Dual-tone vector wordmark (#141414 & #8B1E2B)
│   ├── brand_wordmark_monochrome.svg # Single-tone vector wordmark (uses currentColor)
│   ├── brand_wordmark_dark.svg     # Dark canvas wordmark (White & #FC541E)
│   ├── brand_favicon.svg           # Official favicon vector
│   ├── brand_tiger_emblem.png      # Master high-res transparent emblem (981×1024)
│   └── brand_tiger_emblem_original.jpg # Original master emblem artwork
├── icons/
│   ├── icon_search.svg             # Magnifier (24×24)
│   ├── icon_menu_hamburger.svg     # Mobile menu burger (24×24)
│   ├── icon_arrow_right.svg        # Athletic directional arrow (24×24)
│   ├── icon_check.svg              # Polyline checkmark (24×24)
│   ├── icon_location_pin.svg       # Tactical map marker (24×24)
│   ├── icon_phone.svg              # Phone receiver (24×24)
│   ├── icon_whatsapp.svg           # WhatsApp brand icon (24×24)
│   ├── icon_plus.svg               # Add exercise circle icon (24×24)
│   ├── icon_close.svg              # Modal close cross (24×24)
│   └── icon_discount_percent.svg   # Tariff discount icon (24×24)
├── graphics/
│   ├── hero_vertical_ribbon.svg    # Far-right vertical brand ribbon (48×900)
│   ├── radar_pulse_pin.svg         # Animated coordinate target pin (80×80)
│   ├── map_tactical_grid.svg       # Subtle tactical grid overlay pattern
│   ├── noise_texture_tile.svg      # 3% fractal noise SVG texture tile
│   ├── section_tag_marker.svg      # Athletic tag marker with 3px bar
│   ├── active_tab_indicator.svg    # Category active line indicator (2px #FC541E)
│   ├── hero_headline_vector_lockup.svg # 4-row monolithic Russian headline vector
│   └── badge_hit_unlimited.svg     # "ХИТ ПРОДАЖ · БЕЗЛИМИТ" pill badge
├── photos/
│   ├── hero_athlete_dark_original.jpg # Hero athlete portrait (gritty contrast)
│   ├── exercise_squat.jpg          # Program 01 (Squats)
│   ├── exercise_row.jpg            # Program 02 (Dumbbell Row)
│   ├── exercise_biceps.jpg         # Program 03 (Bicep Curl)
│   ├── gym_equipment.jpg           # Facility & rack infrastructure
│   ├── gym_coaches.jpg             # Coaching staff portrait
│   ├── map_bg.jpg                  # Tactical desaturated map of Tole bi, Shymkent
│   ├── mem_basic.jpg               # Basic membership header photo
│   ├── mem_unlimited.jpg           # Unlimited athlete header photo
│   ├── mem_single.jpg              # Single visit header photo
│   └── real_gym_1.jpg ... 5.jpg    # Facility archive photos
└── sections/
    ├── full_page_desktop.png       # Complete desktop landing page (1440×6200+)
    ├── section_00_header.png       # Top navigation bar
    ├── section_01_hero.png         # Monumental Hero section
    ├── section_02_programs.png     # Interactive workout programs carousel
    ├── section_03_gym.png          # Industrial zigzag gym & coaches
    ├── section_04_location.png     # Split-screen schedule & interactive map
    ├── section_05_memberships.png  # 3-Card pricing grid & discount strip
    ├── section_06_footer.png       # Athletic dark footer
    ├── modal_inquiry.png           # Pop-up booking dialog
    └── full_page_mobile.png        # Complete mobile viewport (390×844)
```

---

## 2. Design Tokens Reference

### Color Palette (Figma Color Styles / Variables)
| Token Name | Hex / Value | Figma Role | Usage |
| :--- | :--- | :--- | :--- |
| `Brand / Accent` | `#FC541E` | Primary Action | CTAs, active indicators, featured card border, radar pin |
| `Brand / Accent Hover` | `#E24410` | Interactive Hover | Button hover, active link highlights |
| `Brand / Crimson` | `#8B1E2B` | Editorial Secondary | Brand ribbon background, "GYM" logo wordmark |
| `Canvas / Obsidian` | `#0B0C0E` | Base Dark Canvas | Background of Hero, Gym, Location, Memberships, Footer |
| `Canvas / Black` | `#141414` | High Contrast | Hero typography panel, solid headline text |
| `Canvas / Warm Editorial`| `#FFF2EE` | Editorial Contrast | Programs section light canvas |
| `Surface / Dark Slate` | `#131519` | Surface Card | Exercise cards, pricing cards, contact panels |
| `Surface / Slate Hover` | `#1A1D23` | Surface Interactive| Card hover state |
| `Text / Stark White` | `#FFFFFF` | Primary Display | Hero headline, button text, badges |
| `Text / Bone` | `#FAF9F6` | Section Titles | Headings, card titles, table labels |
| `Text / Charcoal` | `#1E1E2F` | Editorial Charcoal | Programs secondary headline |
| `Text / Muted` | `#8C929D` | Secondary Body | Descriptions, workout instructions, stats labels |
| `Border / Hairline` | `rgba(255, 255, 255, 0.12)` | Structure | Card borders, dividers, table rules |
| `Border / Accent` | `#FC541E` | Focus / Featured | Featured pricing card (2px), active exercise card (2px) |

### Typography Styles (Figma Text Styles)
| Text Style | Font Family | Weight | Size | Line Height | Tracking | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `Hero Headline` | Anton / Oswald | 700 / Bold | 122 px | 88% (107 px) | -0.03em | UPPERCASE |
| `Section Title` | Oswald / Anton | 700 / Bold | 68 px | 95% (65 px) | -0.01em | UPPERCASE |
| `Card Title` | Oswald | 700 / Bold | 22 px | 110% | 0.04em | UPPERCASE |
| `Price Display` | Anton / Oswald | 700 / Bold | 42 px | 100% | 0.01em | — |
| `Section Tag` | Inter | 800 / ExtraBold | 11 px | 100% | 0.14em | UPPERCASE |
| `Button Label` | Inter | 800 / ExtraBold | 13 px | 100% | 0.08em | UPPERCASE |
| `Body Text` | Inter | 400 / Regular | 15 px | 160% | 0.00em | Sentence |
| `Table Day / Time` | Inter | 700 / Bold | 14 px | 100% | 0.06em | UPPERCASE |

---

## 3. Step-by-Step Figma Reconstruction Protocol

Follow this structured protocol to assemble the website in Figma with native Auto Layout and editable text layers:

### Step 1: Main Canvas Setup
1. Create a Frame sized **1440 px wide** with **Auto Layout (Vertical, Gap: 0, Padding: 0)**.
2. Set Fill to `Canvas / Obsidian` (`#0B0C0E`).
3. Place `sections/full_page_desktop.png` adjacent to your canvas at 100% scale as your visual reference.

### Step 2: Header Component (`section_00_header`)
1. Create an Auto Layout Frame (Horizontal):
   - Width: **1440 px (Fixed)**, Height: **72 px (Fixed)**.
   - Fill: `#FFFFFF`.
   - Padding: Horizontal **48 px**, Vertical **0 px**.
   - Alignment: Center, Space Between.
2. **Left:** Drag `logos/brand_wordmark.svg` or create editable text `JOHN` (Inter/Anton Bold, #141414) + `GYM` (Inter/Anton Bold, #8B1E2B).
3. **Center:** Auto Layout horizontal navigation (Gap: 36 px):
   - `ПРОГРАММЫ`, `ЗАЛ`, `ТРЕНЕРЫ`, `АБОНЕМЕНТЫ` (Inter 700, 13px, tracking 0.08em, #141414).
4. **Right:** Actions Frame (Gap: 16 px, Center aligned):
   - Text button: `ЛИЧНЫЙ КАБИНЕТ` (Inter 700, 12px, #141414).
   - 1px vertical divider (Width: 1px, Height: 18px, Fill: rgba(34,34,34,0.35)).
   - Search icon button: Drag `icons/icon_search.svg`.

### Step 3: Hero Section (`section_01_hero`)
1. Create Frame **1440 px wide**, **900 px high** (Clip Content enabled).
2. Layout: Split into 3 columns:
   - **Left Column (Typographic Panel):** Width **720 px (50%)**, Height **900 px**, Fill `#141414`.
     - Padding: Top 100 px, Left 80 px, Bottom 80 px, Right 40 px.
     - Headline Auto Layout (Vertical, Gap: 20 px):
       - Line 1: `НЕ—`
       - Line 2: `СЛОМ—`
       - Line 3: `ЛЕН—`
       - Line 4: `НЫЙ`
       *(Use Text Style `Hero Headline` or insert `graphics/hero_headline_vector_lockup.svg`)*.
     - Primary Button: Auto Layout Horizontal, Padding 16px 36px, Fill `#FC541E`, Radius 2px. Text `НАЧАТЬ ТРЕНИРОВКИ →` (Inter 800, 13px, #FFFFFF).
   - **Right Column (Athlete Photography):** Width **672 px**, Height **900 px**.
     - Fill: Image `photos/hero_athlete_dark_original.jpg` (Fill / Cover, Position: Center).
   - **Far-Right Column (Brand Ribbon):** Width **48 px**, Height **900 px**.
     - Insert `graphics/hero_vertical_ribbon.svg` (or Frame with Fill `#8B1E2B` and rotated 90° text).

### Step 4: Workout Programs Section (`section_02_programs`)
1. Create Auto Layout Frame (Vertical):
   - Width: **1440 px**, Padding: Vertical **100 px**, Horizontal **48 px**.
   - Fill: `Canvas / Warm Editorial` (`#FFF2EE`).
2. **Section Header:**
   - Left Title: `СОБЕРИ СВОЮ` (Text Style `Section Title`, Color `#141414`) + `ПРОГРАММУ ТРЕНИРОВОК.` (Color `#1E1E2F`).
   - Right Category Tabs (Auto Layout Horizontal, Gap: 32 px):
     - Tab 01: `Силовые тренировки` (Inter 700, 18px, #141414) + Active Line (Insert `graphics/active_tab_indicator.svg`).
     - Tab 02: `Баланс и контроль` (Inter 600, 18px, #8C929D).
     - Tab 03: `Выносливость` (Inter 600, 18px, #8C929D).
3. **Exercise Cards Carousel (Auto Layout Horizontal, Gap: 28 px, Center Aligned):**
   - **Card 01:** Width 416 px, Height 460 px, Opacity 0.80, Image `photos/exercise_squat.jpg`, Label `01 ПРИСЕДАНИЯ`.
   - **Card 02 (Active/Center):** Width 436 px, Height 480 px, Opacity 1.0, Stroke `2px solid #FC541E`, Shadow `cardElevated`, Image `photos/exercise_row.jpg`, Label `02 ТЯГА ГАНТЕЛИ`.
   - **Card 03:** Width 416 px, Height 460 px, Opacity 0.80, Image `photos/exercise_biceps.jpg`, Label `03 СГИБАНИЯ НА БИЦЕПС`.
4. **Bottom CTA:** Link `Создать программу тренировок →` (Inter 800, 14px, #141414, underline).

### Step 5: Gym & Coaches Section (`section_03_gym`)
1. Create Auto Layout Frame (Vertical, Gap: 80 px):
   - Width: **1440 px**, Padding: Vertical **120 px**, Horizontal **48 px**.
   - Fill: `Canvas / Obsidian` (`#0B0C0E`).
2. **Row 1 (Equipment):** Auto Layout Horizontal (50% / 50%, Gap: 60 px):
   - Left Text Column: Tag `03 // ПРОСТРАНСТВО И ОБОРУДОВАНИЕ`, Headline `ИНДУСТРИАЛЬНЫЙ МАСШТАБ. БЕЗ КОМПРОМИССОВ.`, Button `ТЕСТОВЫЙ ВИЗИТ →` (Fill `#FC541E`).
   - Right Media Column: Image `photos/gym_equipment.jpg` (Height 480 px, Radius 2px).
3. **Row 2 (Coaches):** Auto Layout Horizontal (58% Image / 42% Text, Gap: 40 px):
   - Left Media Column: Image `photos/gym_coaches.jpg` (Width 760 px, Height 480 px, Radius 2px).
   - Right Text Column: Tag `ТРЕНЕРСКИЙ ШТАБ`, Headline `СИСТЕМА НАСТАВНИЧЕСТВА.`, Button `ВЫБРАТЬ НАСТАВНИКА →` (Outline 2px, Text #FAF9F6).

### Step 6: Schedule & Location Section (`section_04_location`)
1. Create Auto Layout Frame (Horizontal, 50% / 50%, Gap: 60 px):
   - Width: **1440 px**, Padding: Vertical **120 px**, Horizontal **48 px**, Fill `#0B0C0E`.
2. **Left Column:** Tag `04 // ЛОКАЦИЯ`, Headline `РЕЖИМ БАЗЫ. ВСЕГДА В СТРОЮ.`, Contacts list with icons (`icons/icon_location_pin.svg`, `icons/icon_phone.svg`), Schedule Table (`ПН — СБ: 09:00 — 23:00`, `ВОСКРЕСЕНЬЕ: 09:00 — 22:00`), Button `ОТКРЫТЬ В 2GIS / КАРТАХ →`.
3. **Right Column (Tactical Map):** Image `photos/map_bg.jpg` with `graphics/map_tactical_grid.svg` overlay and centered `graphics/radar_pulse_pin.svg`.

### Step 7: Memberships Pricing Grid (`section_05_memberships`)
1. Create Auto Layout Frame (Vertical, Gap: 60 px):
   - Width: **1440 px**, Padding: Vertical **120 px**, Horizontal **48 px**, Fill `#0B0C0E`.
2. **Section Header:** Tag `05 // АБОНЕМЕНТЫ`, Headline `ВЫБЕРИ СВОЙ ВХОД В СИСТЕМУ.`.
3. **Pricing Grid (Auto Layout Horizontal, Gap: 28 px, Align Bottom/Center):**
   - **Card 01 (Basic):** Width 420 px, Height 540 px, Fill `#131519`, Stroke 1px, Image `photos/mem_basic.jpg`, Price `12 000 ₸`, Button `ОФОРМИТЬ КАРТУ →`.
   - **Card 02 (Featured Unlimited Athlete):** Width 420 px, Height 564 px (+24px physically taller / translateY -12px), Fill `#131519`, Stroke `2px solid #FC541E`, Shadow `cardElevated`, Badge `graphics/badge_hit_unlimited.svg`, Image `photos/mem_unlimited.jpg`, Price `15 000 ₸`, Button `КУПИТЬ АБОНЕМЕНТ →` (Fill `#FC541E`).
   - **Card 03 (Single Visit):** Width 420 px, Height 540 px, Fill `#131519`, Stroke 1px, Image `photos/mem_single.jpg`, Price `2 000 ₸`, Button `КУПИТЬ ВИЗИТ →`.
4. **Discount Strip:** Auto Layout Horizontal, Fill `#131519`, Stroke 1px, Badge `%`, Text `ЛЬГОТНЫЕ ТАРИФЫ: Студенческий — 10 000 ₸ · Школьный — 9 000 ₸ · Пенсионный — 5 000 ₸`.

### Step 8: Footer (`section_06_footer`)
1. Create Auto Layout Frame (Vertical, Gap: 48 px):
   - Width: **1440 px**, Padding: Vertical **80 px**, Horizontal **48 px**, Fill `#0B0C0E`.
2. Top Grid (4 Columns): Brand column (`JOHN GYM` + tagline), Navigation links, Hours of operation, Contact & social links.
3. Bottom Strip: Copyright notice & `ATHLETIC PERFORMANCE DIVISION · 2026`.

---

## 4. Notes on Complex Brand Assets & Illustration Vectorization

### The JOHN GYM Tiger Emblem
- **Current File:** `exports/figma/logos/brand_tiger_emblem.png` (981 × 1024 px, 32-bit transparent RGBA).
- **Artwork Nature:** The official tiger emblem is an intricate, hand-shaded athletic illustration featuring high-detail fur textures, musculature gradients, barbell crosshatching, and an engraved stone-textured shield.
- **Figma Recommendation:** Do not vectorize this illustration using basic automated tracing software, as auto-tracing creates tens of thousands of fragmented anchor points that drastically degrade Figma's canvas rendering speed. Use the master transparent PNG for high-resolution mockups, or perform manual multi-layer vectorization in Adobe Illustrator if infinite vector scalability is explicitly required.
- **Wordmarks & UI:** All wordmarks, typography lockups, icons, and geometric badges are **100% native vector SVGs** and can be scaled infinitely and edited directly in Figma.

---

## 5. Verification & Quality Assurance

- **Browser Validation:** Verified live on `http://localhost:3000/`.
- **Zero Horizontal Overflow:** Mobile viewport verified at 390 × 844 px.
- **Clean SVG Standards:** All SVGs formatted with semantic viewBox, `currentColor` or hex fills, and zero raster wrappers.
