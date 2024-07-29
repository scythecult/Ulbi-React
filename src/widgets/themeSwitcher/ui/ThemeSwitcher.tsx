import { AppButton } from '../../../shared/ui';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';
import { PropsWithChildren } from 'react';
import cn from 'classnames';
import { Theme, useTheme } from '../../../app/providers/themeProvider';

type ThemeSwitcherProps = PropsWithChildren<{
  className?: string;
}>;

export const ThemeSwitcher = ({ className, children }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useTheme();
  const classNameFinal = cn(className);
  const themeIcon = theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />;

  return (
    <AppButton className={classNameFinal} onClick={setTheme}>
      {children}
      {themeIcon}
    </AppButton>
  );
};
