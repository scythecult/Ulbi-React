export const THEME_STORAGE_KEY = 'app-theme';

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeKey = keyof typeof Theme;
export type ThemeValue = typeof Theme[ThemeKey];
