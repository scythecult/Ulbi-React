export const LANG_STORAGE_KEY = 'app-lang';

export const GridLayoutPosition = {
  HEADING: 'heading',
  CONTENT: 'content',
  FOOTER: 'footer',
  SWITCHER: 'switcher',
} as const;

export type GridLayoutPositionKey = keyof typeof GridLayoutPosition;
export type GridLayoutPositionValue = typeof GridLayoutPosition[GridLayoutPositionKey];

export const AppLanguage = {
  RU: 'ru',
  EN: 'en',
} as const;

export type AppLanguageKey = keyof typeof AppLanguage;
export type AppLanguageValue = typeof AppLanguage[AppLanguageKey];
