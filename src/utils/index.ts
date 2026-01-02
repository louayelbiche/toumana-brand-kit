/**
 * @runwell/toumana-brand-kit utilities
 */

export type Mode = 'light' | 'dark';

export interface ThemeSwitcherOptions {
  defaultMode?: Mode;
  persistKey?: string;
  onModeChange?: (mode: Mode) => void;
}

export interface ThemeSwitcher {
  getMode: () => Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  init: () => void;
}

/**
 * Create a theme switcher for managing light/dark mode
 */
export function createThemeSwitcher(options: ThemeSwitcherOptions = {}): ThemeSwitcher {
  const {
    defaultMode = 'light', // Toumana is light-first (Mediterranean warmth)
    persistKey = 'toumana-theme',
    onModeChange,
  } = options;

  let currentMode: Mode = defaultMode;

  // Load persisted preference
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const persisted = localStorage.getItem(persistKey);
      if (persisted) {
        const { mode } = JSON.parse(persisted);
        if (mode === 'light' || mode === 'dark') currentMode = mode;
      }
    } catch {
      // Ignore parse errors
    }
  }

  function applyTheme() {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove('dark', 'light');
    root.removeAttribute('data-theme');

    // Apply current theme
    root.classList.add(currentMode);
    root.setAttribute('data-theme', currentMode);
  }

  function persist() {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(persistKey, JSON.stringify({
          mode: currentMode,
        }));
      } catch {
        // Ignore storage errors
      }
    }
  }

  return {
    getMode: () => currentMode,

    setMode(mode: Mode) {
      if (mode !== currentMode) {
        currentMode = mode;
        applyTheme();
        persist();
        onModeChange?.(mode);
      }
    },

    toggleMode() {
      const newMode = currentMode === 'light' ? 'dark' : 'light';
      currentMode = newMode;
      applyTheme();
      persist();
      onModeChange?.(newMode);
    },

    init() {
      applyTheme();
    },
  };
}

/**
 * Get CSS variable value from the document
 */
export function getCssVar(name: string): string {
  if (typeof document === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/**
 * Set CSS variable value on the document
 */
export function setCssVar(name: string, value: string): void {
  if (typeof document === 'undefined') return;
  document.documentElement.style.setProperty(name, value);
}

/**
 * Toumana brand colors for quick access
 */
export const toumanaColors = {
  gold: '#E09900',
  teal: '#004B56',
  cream: '#F2E3C6',
  white: '#FFFFFF',
  charcoal: '#333333',
} as const;
