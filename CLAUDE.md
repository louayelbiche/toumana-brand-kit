# Toumana Brand Kit

Design tokens and theme package for Jardins de Toumana applications.

**npm package:** `@runwell/toumana-brand-kit`

## Brand Identity

| Color | Hex | Usage |
|-------|-----|-------|
| Toumana Gold | `#E09900` | Primary accent, CTAs, links |
| Toumana Teal | `#004B56` | Footer, dark mode background |
| Mediterranean Cream | `#F2E3C6` | Surface, light backgrounds |

**Typography:**
- Headlines: Manrope (Google Fonts) - weights 400, 500, 600, 700, 800
- Elegant: Noto Serif - weights 400, 600
- Body: Open Sans - weights 400, 500, 600, 700

## Package Structure

```
src/
  tokens/
    core/       # Spacing, typography, radii, shadows
    brand/      # Colors, semantic tokens (light/dark)
  types/        # TypeScript definitions
  utils/        # Helper functions
scripts/
  build.ts      # Style Dictionary build script
dist/           # Built outputs (CSS, Tailwind, MUI, JSON)
```

## Build System

Uses Style Dictionary v4 with custom formats:
- `css/variables` - CSS custom properties
- `tailwind/preset` - Tailwind theme extension
- `mui/theme` - Material UI theme options
- `json/nested` - Raw token JSON

## Commands

```bash
npm run build          # Build all outputs
npm run build:tokens   # Build tokens only
npm run clean          # Remove dist/
npm publish            # Publish to npm
```

## Consumers

- hotel-management (Next.js app) - Toumana hotel management platform
- Future: Any Jardins de Toumana branded application

## Theme Approach

**Light-first:** Unlike Orbit's dark-first approach, Toumana uses a warm, Mediterranean light theme as default. The dark mode uses teal as the base color instead of pure black.

**Rounded corners:** Toumana uses soft rounded corners (3-8px) instead of Orbit's square edges, reflecting the warm, welcoming hospitality aesthetic.

## Universal Rules

See [Universal Development Rules](/Users/balencia/Documents/Code/claude-PM/foundation/rules/universal-rules.md) for documentation, port management, database protocols, and deployment patterns.

## Related Files

- PM Project: `/claude-PM/projects/toumana/`
- Brand Guidelines: `/claude-PM/projects/toumana/foundation/brand-identity.v1.md`
- Hotel Management: `/Users/balencia/Documents/Code/hotel-management/`
