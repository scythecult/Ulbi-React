import { PropsWithChildren } from 'react';
import { Theme, useTheme } from '../../../app/providers/themeProvider';
import cn from 'classnames';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';
import { Button } from '../../../shared/ui';

type ThemeSwitcherProps = PropsWithChildren<{
  className?: string;
}>;

export const ThemeSwitcher = ({ className, children }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useTheme();
  const classNameFinal = cn(className);
  const themeIcon = theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />;

  return (
    <Button className={classNameFinal} onClick={setTheme}>
      {children}
      {themeIcon}
    </Button>
  );
};
