/**
 * @runwell/toumana-brand-kit
 * Design tokens for Jardins de Toumana
 */

export type Mode = 'light' | 'dark';

// Core token types
export interface SpacingTokens {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
}

export interface FontSizeTokens {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface FontWeightTokens {
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
}

export interface FontFamilyTokens {
  sans: string;
  serif: string;
  mono: string;
}

export interface RadiusTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface ShadowTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// Toumana semantic colors
export interface SemanticColors {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryDark: string;
  onPrimary: string;

  secondary: string;
  secondaryHover: string;
  onSecondary: string;

  background: string;
  backgroundAlt: string;
  surface: string;
  surfaceHover: string;

  text: string;
  textSecondary: string;
  textMuted: string;
  textDisabled: string;

  border: string;
  borderHover: string;
  divider: string;

  link: string;
  linkHover: string;

  success: string;
  successLight: string;
  warning: string;
  warningLight: string;
  error: string;
  errorLight: string;
  info: string;
  infoLight: string;
}

// Scale palette (50-900)
export interface ScalePalette {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface ToumanaPalettes {
  gold: ScalePalette;
  teal: ScalePalette;
  cream: ScalePalette;
  gray: ScalePalette;
  success: Partial<ScalePalette>;
  warning: Partial<ScalePalette>;
  error: Partial<ScalePalette>;
  info: Partial<ScalePalette>;
  white: string;
  black: string;
}

// Full token sets
export interface CoreTokens {
  spacing: SpacingTokens;
  fontSize: FontSizeTokens;
  fontWeight: FontWeightTokens;
  fontFamily: FontFamilyTokens;
  radius: RadiusTokens;
  shadow: ShadowTokens;
}

export interface ToumanaTokens extends CoreTokens {
  palette: ToumanaPalettes;
  color: SemanticColors;
}
