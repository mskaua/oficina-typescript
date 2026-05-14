---
name: design-guide
description: Use this when the user asks for visual design direction or frontend aesthetic changes. Provide focused, creative frontend guidance that fits the repo's Tailwind v4 setup.
---

When asked to design or restyle UI, follow these principles:

- Commit fully to one cohesive aesthetic. Don't mix soft neutral UI with a bold theme.
- Use Tailwind v4 tokens and variables in `@theme` for consistency. Keep theme values flat and use CSS variables for colors, shadows, and glass effects.
- Favor distinctive typography, color, and atmosphere over generic utility layouts.
- Build visual depth with layered backgrounds, subtle blur, glow, and gradients instead of plain solid surfaces.
- Use motion intentionally: one strong load or celebration animation is better than many weak transitions.
- Preserve readability and usability: high-contrast text, clear hierarchy, and responsive spacing.
- Match implementation complexity to the desired aesthetic. Maximalist themes should include rich effects; refined themes should use precision and spacing.
- Avoid AI-sounding defaults and cookie-cutter components. Be creative and context-aware.

If the app already uses Tailwind v4, prefer utility classes and `@theme` variables over extra configuration files.
