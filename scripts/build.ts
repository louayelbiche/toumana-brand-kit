import StyleDictionary from 'style-dictionary';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir, writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Custom format: Tailwind preset
StyleDictionary.registerFormat({
  name: 'tailwind/preset',
  format: ({ dictionary }) => {
    const colors: Record<string, any> = {};
    const spacing: Record<string, string> = {};
    const fontSize: Record<string, string> = {};
    const fontFamily: Record<string, string> = {};
    const borderRadius: Record<string, string> = {};

    dictionary.allTokens.forEach(token => {
      const path = token.path;

      if (path[0] === 'color' || path[0] === 'palette') {
        let current = colors;
        const colorPath = path[0] === 'palette' ? path.slice(1) : path.slice(1);
        colorPath.forEach((segment, i) => {
          if (i === colorPath.length - 1) {
            current[segment] = token.value;
          } else {
            current[segment] = current[segment] || {};
            current = current[segment];
          }
        });
      } else if (path[0] === 'spacing') {
        spacing[path[1]] = token.value;
      } else if (path[0] === 'fontSize') {
        fontSize[path[1]] = token.value;
      } else if (path[0] === 'fontFamily') {
        fontFamily[path[1]] = token.value;
      } else if (path[0] === 'radius') {
        borderRadius[path[1]] = token.value;
      }
    });

    const preset = {
      theme: {
        extend: {
          colors,
          spacing: Object.keys(spacing).length > 0 ? spacing : undefined,
          fontSize: Object.keys(fontSize).length > 0 ? fontSize : undefined,
          fontFamily: Object.keys(fontFamily).length > 0 ? fontFamily : undefined,
          borderRadius: Object.keys(borderRadius).length > 0 ? borderRadius : undefined,
        },
      },
    };

    // Clean undefined values
    Object.keys(preset.theme.extend).forEach(key => {
      if (preset.theme.extend[key as keyof typeof preset.theme.extend] === undefined) {
        delete preset.theme.extend[key as keyof typeof preset.theme.extend];
      }
    });

    return `/** @type {import('tailwindcss').Config} */
module.exports = ${JSON.stringify(preset, null, 2)};
`;
  },
});

// Custom format: MUI theme for Toumana
StyleDictionary.registerFormat({
  name: 'mui/theme',
  format: ({ dictionary, options }) => {
    const mode = options?.mode || 'light';

    const colors: Record<string, string> = {};
    const palettes: Record<string, Record<string, string>> = {};

    dictionary.allTokens.forEach(token => {
      const path = token.path;

      if (path[0] === 'palette') {
        const paletteName = path[1];
        const tone = path[2];
        if (!palettes[paletteName]) palettes[paletteName] = {};
        palettes[paletteName][tone] = token.value;
      } else if (path[0] === 'color') {
        colors[path[1]] = token.value;
      }
    });

    return `import { createTheme, type ThemeOptions } from '@mui/material/styles';

export const palettes = ${JSON.stringify(palettes, null, 2)} as const;

export const ${mode}ThemeOptions: ThemeOptions = {
  palette: {
    mode: '${mode}',
    primary: {
      main: '${colors.primary || '#E09900'}',
      light: '${colors.primaryLight || '#FFD166'}',
      dark: '${colors.primaryDark || '#C78700'}',
      contrastText: '${colors.onPrimary || '#FFFFFF'}',
    },
    secondary: {
      main: '${colors.secondary || '#004B56'}',
      contrastText: '${colors.onSecondary || '#FFFFFF'}',
    },
    background: {
      default: '${colors.background || '#FFFFFF'}',
      paper: '${colors.surface || '#F2E3C6'}',
    },
    text: {
      primary: '${colors.text || '#333333'}',
      secondary: '${colors.textSecondary || '#666666'}',
    },
    error: {
      main: '${colors.error || '#EF4444'}',
    },
    warning: {
      main: '${colors.warning || '#F59E0B'}',
    },
    success: {
      main: '${colors.success || '#10B981'}',
    },
    info: {
      main: '${colors.info || '#2EA3F2'}',
    },
    divider: '${colors.divider || colors.border || '#E5E5E5'}',
  },
  typography: {
    fontFamily: '"Avenir Next", "Avenir", system-ui, -apple-system, sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          color: '#FFFFFF',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '${colors.link || '#E09900'}',
        },
      },
    },
  },
};

export const ${mode}Theme = createTheme(${mode}ThemeOptions);
export default ${mode}Theme;
`;
  },
});

async function build() {
  console.log('Building @runwell/toumana-brand-kit...\n');

  const modes = ['light', 'dark'] as const;

  // Ensure output directories exist
  const dirs = ['css', 'tailwind', 'mui', 'json'].map(d => join(rootDir, 'dist', d));
  for (const dir of dirs) {
    await mkdir(dir, { recursive: true });
  }

  // Build CSS and JSON for each mode
  for (const mode of modes) {
    console.log(`Building ${mode} theme...`);

    const sd = new StyleDictionary({
      source: [
        join(rootDir, 'src/tokens/core/**/*.json'),
        join(rootDir, 'src/tokens/brand/colors.json'),
        join(rootDir, 'src/tokens/brand/icons.json'),
        join(rootDir, `src/tokens/brand/semantic.${mode}.json`),
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: join(rootDir, 'dist/css/'),
          files: [{
            destination: `toumana.${mode}.css`,
            format: 'css/variables',
            options: {
              selector: mode === 'dark' ? '.dark, [data-theme="dark"]' : ':root',
              outputReferences: true,
            },
          }],
        },
        json: {
          transformGroup: 'js',
          buildPath: join(rootDir, 'dist/json/'),
          files: [{
            destination: `toumana.${mode}.json`,
            format: 'json/nested',
          }],
        },
      },
    });

    await sd.buildAllPlatforms();
  }

  // Build Tailwind preset (light mode tokens + full palette)
  console.log('Building Tailwind preset...');
  const sdTailwind = new StyleDictionary({
    source: [
      join(rootDir, 'src/tokens/core/**/*.json'),
      join(rootDir, 'src/tokens/brand/colors.json'),
      join(rootDir, 'src/tokens/brand/icons.json'),
      join(rootDir, 'src/tokens/brand/semantic.light.json'),
    ],
    platforms: {
      tailwind: {
        transformGroup: 'js',
        buildPath: join(rootDir, 'dist/tailwind/'),
        files: [{
          destination: 'preset.js',
          format: 'tailwind/preset',
        }],
      },
    },
  });
  await sdTailwind.buildAllPlatforms();

  // Build MUI themes
  for (const mode of modes) {
    console.log(`Building MUI ${mode} theme...`);
    const sdMui = new StyleDictionary({
      source: [
        join(rootDir, 'src/tokens/core/**/*.json'),
        join(rootDir, 'src/tokens/brand/colors.json'),
        join(rootDir, 'src/tokens/brand/icons.json'),
        join(rootDir, `src/tokens/brand/semantic.${mode}.json`),
      ],
      platforms: {
        mui: {
          transformGroup: 'js',
          buildPath: join(rootDir, 'dist/mui/'),
          files: [{
            destination: `${mode}.ts`,
            format: 'mui/theme',
            options: { mode },
          }],
        },
      },
    });
    await sdMui.buildAllPlatforms();
  }

  // Create combined MUI entry file
  const muiIndex = `export { lightTheme, lightThemeOptions, palettes } from './light.js';
export { darkTheme, darkThemeOptions } from './dark.js';
`;
  await writeFile(join(rootDir, 'dist/mui/index.ts'), muiIndex);

  // Create core.json with just core tokens
  console.log('Building core tokens...');
  const sdCore = new StyleDictionary({
    source: [join(rootDir, 'src/tokens/core/**/*.json')],
    platforms: {
      json: {
        transformGroup: 'js',
        buildPath: join(rootDir, 'dist/json/'),
        files: [{
          destination: 'core.json',
          format: 'json/nested',
        }],
      },
    },
  });
  await sdCore.buildAllPlatforms();

  console.log('\nBuild complete!');
}

build().catch(console.error);
