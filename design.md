---
name: Mt. Masaraga Protected Landscape Design System
colors:
  surface: '#f1fcf2'
  surface-dim: '#d1ddd3'
  surface-bright: '#f1fcf2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ebf7ed'
  surface-container: '#e5f1e7'
  surface-container-high: '#e0ebe1'
  surface-container-highest: '#dae5dc'
  on-surface: '#141e18'
  on-surface-variant: '#42493b'
  inverse-surface: '#28332c'
  inverse-on-surface: '#e8f4ea'
  outline: '#737969'
  outline-variant: '#c2c9b7'
  surface-tint: '#3b6a10'
  primary: '#39670d'
  on-primary: '#ffffff'
  primary-container: '#518127'
  on-primary-container: '#f9ffec'
  inverse-primary: '#a0d671'
  secondary: '#456553'
  on-secondary: '#ffffff'
  secondary-container: '#c7ebd4'
  on-secondary-container: '#4b6b59'
  tertiary: '#166284'
  on-tertiary: '#ffffff'
  tertiary-container: '#387b9e'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbf38a'
  primary-fixed-dim: '#a0d671'
  on-primary-fixed: '#0c2000'
  on-primary-fixed-variant: '#285000'
  secondary-fixed: '#c7ebd4'
  secondary-fixed-dim: '#accfb8'
  on-secondary-fixed: '#012113'
  on-secondary-fixed-variant: '#2e4d3c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#8fcef5'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f1fcf2'
  on-background: '#141e18'
  surface-variant: '#dae5dc'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  grid: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  gutter: 24px
---

## Brand & Style

The visual identity of this design system is rooted in the "Safe" visual identity—a utilitarian, highly readable, and professional approach tailored for the Mt. Masaraga Protected Landscape. The design narrative prioritizes clarity and institutional trust, ensuring that ecotourism information and booking flows are accessible to all users, including government officials and international tourists.

The style is **Corporate / Modern**, drawing inspiration from government-standard accessibility guidelines. It utilizes a disciplined application of whitespace, a structured 24px grid, and the "Inter" typeface to convey a sense of reliability and environmental stewardship. The emotional response is one of calm confidence, reflecting the serenity of the protected landscape and the efficiency of a high-standard booking infrastructure.

## Colors

The color palette is derived from the natural strata of the Mt. Masaraga region. 

- **Primary (Lush Mountain Moss):** Used for primary actions and active states. It represents the vibrant flora and signifies "go" or "available" in a booking context.
- **Secondary (Deep Forest Shadow):** Reserved for high-level navigation, headers, and structural anchors to provide a grounded, authoritative feel.
- **Accent (Horizon Sky Blue):** A functional accent for interactive links, chat features, and secondary highlights that need to stand out without competing with the primary green.
- **Backgrounds:** "Mist White" provides a soft, low-strain canvas for information-dense pages, while "Volcanic Slate" is utilized for high-contrast administrative environments.

All color combinations must adhere to **WCAG AAA** contrast ratios. Text should primarily remain "Dark Charcoal" on "Mist White" to ensure maximum legibility for users with visual impairments.

## Typography

This design system employs **Inter** across all levels to maintain a systematic and utilitarian aesthetic. 

- **Headlines:** Use a bold weight with slightly tighter letter-spacing to create a sense of authority and modernism.
- **Body:** Standardized at 16px for optimal readability. For dense data tables or administrative forms, the `body-sm` (14px) variant is preferred.
- **Labels:** Use uppercase with increased tracking (letter-spacing) for small-scale metadata, such as slot counts or "Protected Area" badges, ensuring they are distinguishable from body text.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to ensure content remains readable and focused, while transitioning to a fluid model for mobile devices.

- **Grid System:** A 12-column grid is used for desktop (1440px max-width) with 24px gutters. Elements should align strictly to the 24px modules.
- **Rhythm:** Spacing follows an 8px base unit. Vertical rhythm between sections should typically use 48px (6x) or 72px (9x) to allow the "Mist White" background to provide breathing room.
- **Mobile:** Margins reduce to 16px, and columns collapse to a single-stack layout for booking forms and hiker chat interfaces.

## Elevation & Depth

To maintain a professional and trustworthy feel, this design system avoids aggressive shadows. Instead, it utilizes **Tonal Layers** and **Low-contrast Outlines**.

- **Surfaces:** Use a 1px border of `Dark Charcoal` at 10% opacity for cards to define boundaries against the `Mist White` background.
- **Elevation levels:**
    - **Level 0 (Flat):** Primary background.
    - **Level 1 (Raised):** Cards and white containers. Use a very soft ambient shadow (0px 4px 12px) with 5% opacity of the `Secondary` color.
    - **Level 2 (Overlay):** Drawers (Hiker Chat) and Modals. These should use a 20% background dim (scrim) to focus the user’s attention.

## Shapes

The shape language reflects a balance between organic nature and geometric precision. Following the `Rounded` directive:

- **Standard Components:** Buttons and input fields use a **8px (0.5rem)** radius.
- **Large Components:** Cards and sidebars use a **16px (1rem)** radius to appear softer and more welcoming.
- **Small Components:** Checkboxes and tags use a **4px (0.25rem)** radius to maintain crispness at small scales.
- **Interactive Elements:** Active states in the calendar or sidebar navigation should use the standard 8px radius for consistency.

## Components

### Buttons
- **Solid:** `Primary` background with white text. High-emphasis for "Book Now" or "Submit Application."
  - Classes: `rounded-lg bg-primary px-5 py-2.5 text-label-md font-semibold text-on-secondary shadow-sm transition-colors hover:bg-surface-tint`
- **Outlined:** `Primary` border with `Primary` text. For secondary actions like "Download Map."
  - Classes: `rounded-lg border border-outline-variant px-5 py-2.5 text-label-md font-semibold text-on-surface transition-colors hover:bg-surface-container`
- **Ghost:** No background or border. Used for "Cancel" or "Back" actions within the booking flow.
- **Secondary:** Used for supplementary actions like "Send Code."
  - Classes: `rounded-lg border border-secondary/20 bg-secondary-container px-5 py-2.5 text-xs font-semibold text-on-secondary-fixed transition-colors hover:bg-secondary-fixed`

### Cards & Badges
- **Booking Cards:** Feature 12px/16px rounded corners, 24px internal padding, and a `Level 1` elevation.
- **Status Badges:** Use "Lush Mountain Moss" text on a 10% opacity "Lush Mountain Moss" background for "Available" slots. Use "Amber" for "Limited Space."

### Calendar & Scheduling
- The calendar utilizes a 1px border grid. Today's date is highlighted with an outlined `Primary` circle. Selected dates use a solid `Primary` circular background.

### Hiker Chat & Admin Tools
- **Drawer:** Slides from the right; used for real-time hiker chat. It features a clean header in `Secondary` (Deep Forest) for visual weight.
- **Sidebar:** Used in the admin dashboard with a `Secondary` background and white text. Active menu items are indicated by a 4px `Primary` vertical bar on the left edge.
- **Input Fields:** 8px rounded corners with a 1px `Dark Charcoal` (20% opacity) border. Focused state switches the border to `Primary`.

### Input Fields
- **Standard Text Input:**
  - Classes: `rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none`
- **Input with Left Icon (e.g., Mail, Phone):**
  - Icon: `h-4 w-4` positioned `absolute left-3 top-1/2 -translate-y-1/2 text-outline`
  - Input classes: `rounded-lg border border-outline-variant bg-surface-container-lowest py-2 pl-9 pr-3 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none`
- **Password Input (with toggle):**
  - Input classes: `rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 pr-10 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none`
  - Toggle button: `absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-on-surface focus:outline-none` with `h-4 w-4` Eye/EyeOff icon
- **OTP Code Input:**
  - Classes: `h-11 w-9 rounded-lg border-2 bg-surface-container-lowest text-center text-lg font-bold text-on-surface transition-all focus:ring-2 focus:ring-primary focus:outline-none sm:h-12 sm:w-10`
  - Active state adds `border-primary`, inactive uses `border-outline-variant`
- **Checkbox:**
  - Classes: `h-4 w-4 cursor-pointer rounded border-outline-variant bg-surface-container-lowest text-primary transition-colors focus:ring-primary focus:ring-offset-surface`

### Radio Cards (Selection Groups)
- **Gender / Option Cards:**
  - Container: `rounded-xl border-2 px-3 py-1.5 transition-all` with `border-primary bg-surface-container-lowest ring-1 ring-primary/20` when selected, `border-outline-variant bg-surface-container-lowest hover:border-primary` when unselected
  - Icon circle: `h-8 w-8 rounded-full flex items-center justify-center text-primary` with `bg-secondary-container` when selected, `bg-surface-container-low` when unselected
  - Radio dot: `h-5 w-5 rounded-full border-2 flex items-center justify-center` with inner `h-2.5 w-2.5 rounded-full bg-primary` when selected
  - Label: `text-base font-semibold text-on-surface`
  - Description: `text-xs text-on-surface-variant`