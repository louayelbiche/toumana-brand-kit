# @runwell/toumana-brand-kit

Design tokens and theme package for Jardins de Toumana - a boutique apart-hotel in Djerba, Tunisia.

## Installation

```bash
npm install @runwell/toumana-brand-kit
```

## Usage

### CSS Variables

Import the CSS file for your theme:

```css
/* Light theme (default) */
@import '@runwell/toumana-brand-kit/css/toumana.light.css';

/* Dark theme */
@import '@runwell/toumana-brand-kit/css/toumana.dark.css';
```

Then use CSS variables in your styles:

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border-radius: var(--radius-md);
}
```

### Tailwind CSS

Add the preset to your `tailwind.config.js`:

```javascript
const toumanaPreset = require('@runwell/toumana-brand-kit/tailwind/preset');

module.exports = {
  presets: [toumanaPreset],
  // ... your config
};
```

Then use the colors and tokens:

```html
<button class="bg-gold-500 text-white rounded-md px-4 py-2">
  Reserver
</button>
```

### Material UI

Import and use the pre-built themes:

```typescript
import { lightTheme, darkTheme } from '@runwell/toumana-brand-kit/mui';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

Or customize the theme options:

```typescript
import { lightThemeOptions } from '@runwell/toumana-brand-kit/mui/light';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  ...lightThemeOptions,
  // Your customizations
});
```

### JavaScript/TypeScript

Import types and utilities:

```typescript
import { createThemeSwitcher, toumanaColors } from '@runwell/toumana-brand-kit';

// Create a theme switcher
const theme = createThemeSwitcher({
  defaultMode: 'light',
  onModeChange: (mode) => console.log(`Switched to ${mode} mode`),
});

theme.init(); // Apply initial theme

// Quick access to brand colors
console.log(toumanaColors.gold); // #E09900
```

### Raw JSON Tokens

For custom integrations, access the raw tokens:

```javascript
import lightTokens from '@runwell/toumana-brand-kit/json/toumana.light.json';
import darkTokens from '@runwell/toumana-brand-kit/json/toumana.dark.json';
import coreTokens from '@runwell/toumana-brand-kit/json/core.json';
```

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Toumana Gold | `#E09900` | Primary accent, CTAs, links |
| Toumana Teal | `#004B56` | Footer, secondary, dark mode |
| Mediterranean Cream | `#F2E3C6` | Surface, backgrounds |
| White | `#FFFFFF` | Primary background |

### Color Scales

Each color includes a full scale from 50-900:

- `gold-50` to `gold-900`
- `teal-50` to `teal-900`
- `cream-50` to `cream-900`
- `gray-50` to `gray-900`

### Semantic Colors

- `success`: `#10B981`
- `warning`: `#F59E0B`
- `error`: `#EF4444`
- `info`: `#2EA3F2`

## Typography

- **Sans-serif (Headlines):** Manrope
- **Serif (Elegant):** Noto Serif
- **Body:** Open Sans
- **Monospace:** JetBrains Mono

## Design Tokens

### Spacing

4px base unit: `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32`

### Border Radius

Rounded corners for warm, welcoming aesthetic:
- `none`: 0
- `sm`: 3px
- `md`: 6px
- `lg`: 8px
- `xl`: 12px
- `2xl`: 16px
- `full`: 9999px

## License

MIT
