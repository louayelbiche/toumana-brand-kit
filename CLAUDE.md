# Toumana Brand Kit

> **CLAUDE-PM ORCHESTRATED**
> This project is managed by the claude-PM agent-of-agents system.
> Master registry: `/Users/balencia/Documents/Code/claude-PM/foundation/agents/registry.json`
> Project mapping: `/Users/balencia/Documents/Code/claude-PM/infrastructure/config/project-agent-map.json`
>
> All code changes → `/code` (Coder agent)
> All deployments → `/deploy` (Deployment agent)
> Complex tasks → `/orchestrate` (auto-routes to appropriate agents)

---



Design tokens and theme package for Jardins de Toumana applications.

**npm package:** `@runwell/toumana-brand-kit`

## Brand Architecture

Jardins Toumana operates with **4 sub-brands**:

| Sub-brand | Type | Primary Color |
|-----------|------|---------------|
| **Jardins Toumana** | Master Brand | Terracotta `#DF7F35` |
| **Taddart** | Hebergement | Golden `#DBAC40` |
| **Tazzert** | Restaurant-Bar | Amber `#F8981D` |
| **La Tavla** | Bar-Rooftop | Olive `#515839` / Coral `#FF6D33` |

## Brand Identity

### Jardins Toumana Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Terracotta Orange | `#DF7F35` | Primary accent, CTAs, links |
| Golden Yellow | `#DBAC40` | Secondary accent |
| Amber Orange | `#F8981D` | Tertiary accent |

### Secondary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Sage Green | `#80A2A3` | Subtle accents |
| Soft Lime | `#DDE4B8` | Light backgrounds |
| Cream | `#F2E3C6` | Surface, light backgrounds |

### La Tavla (Dark Theme) Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Olive Green | `#515839` | Background, primary |
| Soft Lime | `#DDE4B8` | Secondary |
| Coral Orange | `#FF6D33` | Accent, CTAs |

## Typography (Updated 2026-01-20)

| Usage | Font | Source | Notes |
|-------|------|--------|-------|
| Display/Headings | **Aboreto** | Google Fonts | Art Deco geometric style, weight 400 |
| Body | **DM Sans** | Google Fonts | Clean modern sans-serif, weights 400-700 |

**Heading specs (from Azza's Figma):**
- Hero headlines: 80px, line-height 100%, letter-spacing 0%, ALL CAPS
- Section titles: Aboreto, regular weight

## Logo Assets

Located in `src/assets/logos/`:

| File | Description | Dimensions |
|------|-------------|------------|
| `logo-full-vertical.svg` | Full logo with arch + "JARDINS" + "TOUMANA" stacked | 175×97 |
| `logo-horizontal.svg` | Horizontal layout with arch + text side by side | 240×61 |
| `logo-icon.svg` | Arch icon only (for favicon, app icon) | 47×51 |

## Package Structure

```
src/
  assets/
    logos/      # Logo SVG files
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

**Light-first:** Toumana uses a warm, Mediterranean light theme as default with cream and white backgrounds.

**Dark mode (La Tavla):** Uses olive green as the base color instead of pure black, with coral orange accents. Designed for evening/rooftop bar ambiance.

**Rounded corners:** Soft rounded corners (4-8px) reflecting warm, welcoming hospitality aesthetic.

## Color Palette Summary

### Light Theme (Jardins Toumana)
- Background: White `#FFFFFF`
- Surface: Cream `#F2E3C6`
- Primary: Terracotta `#DF7F35`
- Secondary: Golden `#DBAC40`
- Text: Olive `#515839`

### Dark Theme (La Tavla)
- Background: Olive `#515839`
- Surface: Dark Olive `#454B30`
- Primary: Coral `#FF6D33`
- Secondary: Lime `#DDE4B8`
- Text: White `#FFFFFF`

## Universal Rules

See [Universal Development Rules](/Users/balencia/Documents/Code/claude-PM/foundation/rules/universal-rules.md) for documentation, port management, database protocols, and deployment patterns.

## Related Files

- PM Project: `/claude-PM/projects/toumana/`
- Brand Guidelines: `/claude-PM/projects/toumana/foundation/brand-identity.v2.md`
- Hotel Management: `/Users/balencia/Documents/Code/hotel-management/`
