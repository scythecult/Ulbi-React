import { PropsWithChildren, createContext, useState } from 'react';
import { THEME_STORAGE_KEY, Theme, ThemeValue } from '../lib/constants/common';

const getDefaultTheme = () => (window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeValue) || Theme.LIGHT;
const setDefaultTheme = (theme: ThemeValue) => window.localStorage.setItem(THEME_STORAGE_KEY, theme);

export const ThemeContext = createContext<ThemeValue>(getDefaultTheme());
export const ThemeSetterContext = createContext<() => void>(null);

export type ThemeProviderProps = PropsWithChildren<object>;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeValue>(getDefaultTheme());

  const handleThemeChange = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setDefaultTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetterContext.Provider value={handleThemeChange}>{children}</ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  );
};
