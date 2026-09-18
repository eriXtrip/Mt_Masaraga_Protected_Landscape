# Hyperframes Composition Brief: Mt. Masaraga Protected Landscape Eco-Tourism Portal

## Objective
Create a 20-second vertical launch-style brag video showcasing the Mt. Masaraga Eco-Tourism Portal's seamless cross-device experience across Desktop, Tablet, and Mobile.

## Output
- Composition directory: `brag-output-2026-09-18-131200/composition/`
- Rendered video: `brag-output-2026-09-18-131200/brag.mp4`
- Format: vertical — 1080x1920 (9:16)
- Duration: 20 seconds

## Source Material
- Project root: C:\Users\USER\Mt_Masaraga_Protected_Landscape
- Primary files read: resources/js/components/common/SplashScreen.jsx, resources/js/pages/about/TrailShowcase.jsx, resources/js/pages/about/Overview.jsx, resources/js/pages/trail/TrailGallery.jsx, resources/js/pages/home/cta.jsx, resources/js/app.jsx, resources/js/mockData.js, design.md
- Product name: Mt. Masaraga Protected Landscape Eco-Tourism Portal
- Tagline / strongest claim: "Your Trek Begins Here" — from the hero CTA section
- Key UI or visual moment to recreate: TrailShowcase elevation profile with tab switching, Overview zone visualizer swipe, TrailGallery lightbox modal
- Copy that must appear verbatim:
  - "MT. MASARAGA PROTECTED LANDSCAPE"
  - "Official Eco-Tourism Portal"
  - "REAL-TIME ELEVATION & TRAIL MAPPING"
  - "INTERACTIVE ECO-ZONE EXPLORATION"
  - "INSTANT LIGHTBOX & HIKER GUIDELINES"
  - "YOUR TREK BEGINS HERE"
  - "Secure Permits • Protect Endemic Wildlife • Explore Responsibly"

## Creative Direction
- Tone preset: app-store
- Creative direction: fast-cut responsive cross-device showcase
- Interpretation: Clean, professional, feature-forward pacing at a brisk tempo. Each device gets its own scene with crisp glassmorphism transitions. Feature cards arrive with smooth motion. No aggression, no deadpan — just confident product clarity at 9:16 vertical speed.
- Angle: The portal's strongest material is its multi-device fluidity — the same rich trail data reflows naturally from desktop to tablet to mobile, showing the experience is seamless, not shrank.
- Hook: Full-screen mountain hero with SplashScreen logo animating into frame
- Outro / punchline: Cross-device lineup with pulsing CTAs on dark emerald background
- Avoid:
  - Generic SaaS language like "streamline your workflow"
  - Abstract filler visuals unrelated to the actual portal
  - Unrelated visual redesign or generic templates

## Visual Identity
- Background: #f1fcf2 (Mist White / Surface)
- Text: #141e18 (On-surface / Dark Charcoal)
- Accent: #39670d (Lush Mountain Moss / Primary)
- Secondary: #456553 (Deep Forest Shadow)
- Tertiary: #166284 (Horizon Sky Blue)
- Display font: Inter, 700-800 weight for headlines
- Body font: Inter, 400 weight
- Visual references from the project: Elevation profile SVG, SplashScreen mountain hero, glassmorphism zone cards, TrailGallery grid, CTA buttons

## Storyboard
Use the storyboard in `brag-output-2026-09-18-131200/brag-plan.md` as the creative contract.

Scene summary:
1. Hero Splash — 4s — Mountain hero visual, SplashScreen logo animation, portal title text
2. Desktop Power — 5s — TrailShowcase with elevation profile and trail tab switching
3. Tablet Flexibility — 5s — Overview zone visualizer with swipe-through zones
4. Mobile Lightbox — 3s — TrailGallery with tap-to-open lightbox modal
5. CTA Lineup — 3s — Cross-device stacking with pulsing CTAs on dark emerald

## Audio
- Audio role: warm professional bed with crisp UI accents
- Audio arc: Upbeat bed enters at 0.35s; maintains energy through scene 4; ducks to 0.15 during CTA pulse; fades out at 19.5s
- Music: happy-beats-business-moves-vol-1-by-ende-dot-app.mp3
- Music treatment: Fade in from 0s at 0.35 volume; hold steady through scenes 1-4; duck to 0.15 during CTA button pulses in scene 5 (17-19s); fade out at 19.5s
- Music cue guidance: Bundled preset — assets/music/cues/happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.md. Strong cues in window: 16.02s, 17.02s, 17.52s, 18.02s, 18.52s, 20.02s, 21.01s. Lock Scene 5 CTA reveal near 17.02s strong cue (±0.15s). Beat grid: every 0.5s from 3.02s onward for minor sync.
- Audio-reactive treatment: subtle; use music RMS/bass to make the hero glow and device frame presence breathe. No waveform/equalizer visuals.
- Audio-coupled moments:
  - Scene 2 — trail tab switch at 5.5s → click sound; tab switch at 7.0s → click sound
  - Scene 3 — zone swipe at 10.5s → card-slide sound; swipe at 12.5s → card-slide sound
  - Scene 4 — lightbox tap at 15.0s → pop/click sound
  - Scene 5 — CTA reveal at 17.0s → impactSoft_medium hit; final beat at 19.5s → bong_001
- SFX selection guidance: Low/medium HF risk for polished product feel. Use interface/click_003 for tab clicks, casino/card-slide-1 for zone swipes, ui/click2 for gallery tap, impact/impactSoft_medium_001 for CTA reveal, interface/bong_001 for final logo land.
- SFX analysis guidance: assets/sfx/ (from skill path) — use lower high-frequency-risk sounds for polished repeated moments
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: Copy chosen music into composition/assets/music/ and selected SFX into composition/assets/sfx/ subdirectories

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — hyperframes-core (composition contract + data-* timing), hyperframes-animation (motion), hyperframes-creative (design spec, beats, audio-reactive), hyperframes-keyframes (seek-safe keyframes), and hyperframes-cli (lint/check/render). /brag is its own workflow: do not enter the hyperframes entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in /brag.

Requirements:
- Show at least one real UI, copy, or visual element from the source project.
- Keep all text readable in the final render.
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer unless audio was explicitly disabled or documented as intentionally silent.
- Treat /brag audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints. Hyperframes decides exact animation timing and should ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in a 15-25s video unless the edit clearly benefits from more.
- Use SFX to support motion and interaction: card sounds for card-like reveals, short announcement cues for major payoffs, key/click sounds for text or user actions, and restraint when the edit is already busy.
- Honor planned music treatment such as fade-outs, ducking, beat-aligned reveals, or letting a final SFX ring over the music, using the best Hyperframes-supported implementation.
- When music is present and the treatment is not none, consider Hyperframes audio-reactive workflow: extract audio data and use RMS/frequency bands for subtle, brand-specific motion. Good targets are glow, depth, background warmth, card presence, title emphasis, or other existing visual elements. Avoid waveform/equalizer visuals, musical-note graphics, generic particle systems, strobing, or heavy pulsing.
- Use local assets for audio and any required runtime/media dependencies when possible.
- Run hyperframes check before render — it is brag's single gate.
