import { useContext } from 'react';
import { ThemeContext, ThemeSetterContext } from '../../ui/ThemeProvider';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  const themeSetter = useContext(ThemeSetterContext);

  return [theme, themeSetter] as const;
};
