# Brag Plan: Mt. Masaraga Protected Landscape Eco-Tourism Portal

## What is this app?

A React-based eco-tourism web portal for Mt. Masaraga Protected Landscape in the Bicol Region, Philippines — enabling hikers to explore trails, view elevation profiles, browse galleries, and secure climbing permits cross-device.

## The angle

The portal's strongest material is its multi-device fluidity: the same rich trail data — elevation profiles, spatial zone explorers, lightbox galleries — reflows naturally from desktop to tablet to mobile. The video treats each device as a window into the same living mountain, showing that the experience is seamless, not shrank.

## Hook (first 2-3 seconds)

Full-screen hero of Mt. Masaraga shrouded in morning mist and rainforest. The SplashScreen logo animates in — mountain icon, subtle glow, pulsing loader — establishing that this is an official, trusted portal before any UI appears.

Text: "MT. MASARAGA PROTECTED LANDSCAPE" / "Official Eco-Tourism Portal"

## Key moments (the middle)

- **Real-time elevation & trail mapping** — Desktop view shows TrailShowcase with Amtic/Balogo tabs; clicking between tabs morphs the elevation SVG profile live, with waypoint markers counting up the mountain.
- **Interactive eco-zone exploration** — Tablet view shows Overview's spatial zone visualizer; a touch-swipe cycles through Summit, Campsite, Watershed, and Falls zones with smooth cross-fades.
- **Instant lightbox & hiker guidelines** — Mobile view shows TrailGallery; a tap expands a trail photo into a full-screen modal lightbox without any layout shift.

## Outro / punchline

All three devices lineup in 3D perspective against a dark emerald background (#142318). The "Explore Trails" and "Book Permit" CTA buttons pulse in moss green (#39670d). Tagline: "Your Trek Begins Here" with the URL and trust markers below.

## User flow worth showing

1. **Entry** — Hero/SplashScreen: mountain visual, logo, loader → portal reveals
2. **Key action** — Trail exploration: tab-switch between trails → live elevation profile update → zone zone swiping → gallery tap
3. **Result** — CTA: "Explore Trails" / "Book Permit" — secure permits, protect endemic wildlife, explore responsibly

## Tone

- Preset: app-store
- Creative direction: fast-cut responsive cross-device showcase
- Interpretation: Clean, professional, feature-forward pacing at a brisk tempo. Each device gets its own scene with crisp glassmorphism transitions. Feature cards arrive with smooth motion. No aggression, no deadpan — just confident product clarity at 9:16 vertical speed.

## Format: vertical — 1080x1920 (9:16)
## Duration: 20 seconds

## Visual Identity (from the project)

- Background: #f1fcf2 (Mist White / Surface)
- Accent: #39670d (Lush Mountain Moss / Primary)
- Text: #141e18 (On-surface / Dark Charcoal)
- Secondary: #456553 (Deep Forest Shadow)
- Tertiary/Accent: #166284 (Horizon Sky Blue)
- Display font: Inter (700-800 weight for headlines)
- Body font: Inter (400 weight)
- Strongest visual element: Elevation profile SVG chart with green gradient fill, SplashScreen mountain hero with logo overlay, glassmorphism zone detail card

## Share copy (draft)

From desktop to pocket — the full Mt. Masaraga trail experience, perfectly reflowed. Book permits, explore zones, and light up your next climb.

## Audio direction

- Role: warm professional bed with crisp UI accents
- Music: happy-beats-business-moves-vol-1-by-ende-dot-app.mp3 (120 BPM, upbeat, clean)
- Music treatment: Fade in from 0s at 0.35 volume; hold steady through scenes 1-4; duck to 0.15 during CTA button pulses in scene 5; fade out at 19s
- Music cue guidance: Bundled preset — happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.md. Strong cues in 0-25s window: 16.02s, 17.02s, 17.52s, 18.02s, 18.52s, 20.02s, 21.01s, 22.01s, 23.02s. Beat-grid: every 0.5s from 3.02s onward. Lock scene 5 CTA reveal near 17.02s strong cue.
- Audio-reactive treatment: subtle; use music RMS/bass to make the hero glow and device frames breathe. No waveform visuals.
- SFX posture: moderate; motion-matched. Click sounds for tab switches, pop for lightbox open, soft whoosh for swipe transitions, deep bell hit for final CTA.
- Audio-coupled moments:
  - Scene 2 — trail tab click → interface/click sound synced to tab switch
  - Scene 3 — zone swipe → soft card-slide sound on each zone change
  - Scene 4 — lightbox open → pop/snap focus effect
  - Scene 5 — CTA pulse → impactBell deep hit on logo land
- Restraint rule: SFX must not compete with mountain atmosphere or overwhelm the clean product feel. One SFX per scene maximum, except scene transitions which may add a transition cue.

## Storyboard

### Scene 1 — Hero Splash (0s – 4s) — 4s
Full-screen hero visual of Mt. Masaraga covered in lush rainforest with morning mist fading. The custom SplashScreen animates into frame: mountain icon logo scales in, particle glow emanates, pulsing loader rotates.
- Text overlay (entered at 0.5s, settled at 1s): "MT. MASARAGA PROTECTED LANDSCAPE" (48px, white, centered, upper third)
- Sub-text (entered at 1.5s, settled at 2s): "Official Eco-Tourism Portal" (24px, white/80, centered below)
- Sequential/interaction: Logo scales from 0.8→1.0 (0.0-1.5s), loader pulses (continuous), background image slow zoom (1.0-3.0s), text fades in sequentially
- Audio intent: Establish grandeur — ambient mountain wind chime + soft energetic beat drop at 0.3s
- Audio-coupled idea: Beat drop at 0.3s synced with logo scale-in
- Music: upbeat bed entering at 0.35s volume
- Transition mood: dramatic crossfade → Scene 2

### Scene 2 — Desktop Power (4s – 9s) — 5s
Tilt transition into a 3D desktop frame showing the Hero Callout and the Interactive Elevation Profile & Trail Showcase (TrailShowcase.jsx). Simulated cursor clicks between Amtic Trail and Summit Crest tabs; elevation graph updates live with smooth path morph.
- Text overlay (entered at 4.5s): "REAL-TIME ELEVATION & TRAIL MAPPING" (32px, on-surface, lower third)
- Product material: TrailShowcase.jsx — elevation SVG profile, tab controls, difficulty card, waypoints list
- Sequential/interaction: Tab click at 5.5s triggers elevation SVG morph (5.5-6.5s), cursor moves to second tab at 7.0s, second elevation profile loads (7.0-8.0s), simulated cursor highlight follows
- Audio intent: Crisp UI click on each tab switch; professional, precise
- Audio-coupled idea: Tab switch at 5.5s → interface/click_003.ogg; Tab switch at 7.0s → interface/click_003.ogg
- Music: upbeat bed continues at 0.35 volume
- Transition mood: clean slide → Scene 3

### Scene 3 — Tablet Flexibility (9s – 14s) — 5s
Transition to a vertical tablet device frame showing the Spatial Zone Visualizer (Overview.jsx). Touch-swipe cycles through mountain moss forest, cloud canopy, and watershed zones with smooth layer cross-fades. Zone detail card slides in with each zone.
- Text overlay (entered at 9.5s): "INTERACTIVE ECO-ZONE EXPLORATION" (32px, on-surface, lower third)
- Product material: Overview.jsx — zone image cross-fade, chevron navigation, zone title + description card with backdrop blur
- Sequential/interaction: Zone 1 visible at 9s (0s hold); swipe gesture at 10.5s → Zone 2 fades in (10.5-11.5s); swipe at 12.5s → Zone 3 (12.5-13.5s); swipe at 13.5s → Zone 4 begins (holds for remainder)
- Audio intent: Soft swish/whoosh on each swipe transition
- Audio-coupled idea: Swipe at 10.5s → casino/card-slide-1.ogg; Swipe at 12.5s → casino/card-slide-1.ogg
- Music: upbeat bed continues at 0.35 volume
- Transition mood: smooth wipe → Scene 4

### Scene 4 — Mobile On-The-Go & Lightbox (14s – 17s) — 3s
Close-up mobile viewport frame displaying the Trail Gallery (TrailGallery.jsx). A tap opens a high-res photo into the full-screen modal lightbox without layout shifts.
- Text overlay (entered at 14.5s): "INSTANT LIGHTBOX & HIKER GUIDELINES" (32px, on-surface, lower third)
- Product material: TrailGallery.jsx — grid of trail photos, tap-to-open lightbox modal with title, subtitle, prev/next navigation
- Sequential/interaction: Gallery grid visible 14-15s; tap at 15.0s → lightbox zooms open (15.0-16.0s) with photo scaling from thumbnail to fullscreen; modal shows image title and counter (1 of 4)
- Audio intent: Pop/snap focus effect on tap
- Audio-coupled idea: Tap at 15.0s → ui/click2.ogg; Lightbox open → interface/drop_001.ogg
- Music: upbeat bed continues at 0.35 volume
- Transition mood: hard cut with zoom → Scene 5

### Scene 5 — Call to Action (17s – 20s) — 3s
Cross-device lineup (Desktop, Tablet, Mobile) stacked seamlessly in 3D perspective against a dark emerald background (#142318). The Explore Trails and Book Permit CTA buttons pulse in green (#39670d).
- Text overlay (entered at 17.5s): "YOUR TREK BEGINS HERE" (40px, white, centered)
- Sub-text (entered at 18.5s): "Secure Permits • Protect Endemic Wildlife • Explore Responsibly" (18px, white/70, centered)
- URL (entered at 19s): "masaraga.gov.ph/portal" (16px, white/50, centered)
- Product material: CTA buttons from cta.jsx — "Explore Trail" (primary green) and "Trek Guidelines" (outline white)
- Sequential/interaction: Desktop frame enters at 17.0s, tablet and mobile frames assemble 17.2-17.8s, CTA buttons pulse (continuous), text fades in sequentially (17.5s, 18.5s, 19.0s)
- Audio intent: Rising crescendo resolving into a warm, crisp finish; deep bell hit at 17.02s on CTA reveal
- Audio-coupled idea: CTA reveal at 17.0s → impact/impactSoft_medium_001.ogg; Final beat at 19.5s → interface/bong_001.ogg
- Music: Duck to 0.15 at 17.0s; resume 0.35 at 18.5s; fade out at 19.5s
- Transition mood: warm resolve (final frame, no transition)

**Music mood for this video:** upbeat
**Audio summary:** Upbeat corporate-nature bed underpins five fast-paced device showcases; crisp UI clicks and swells punctuate interaction moments; a deep bell hit marks the CTA payoff.
