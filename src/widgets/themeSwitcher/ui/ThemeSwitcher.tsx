import { PropsWithChildren } from 'react';
import { Theme, useTheme } from '../../../app/providers/themeProvider';
import cn from 'classnames';
import styles from './ThemeSwitcher.module.scss';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';

type ThemeSwitcherProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export const ThemeSwitcher = ({ className, onClick, children }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useTheme();
  const classNameFinal = cn(className, styles.themeSwitcher);
  const themeIcon = theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />;

  const handleThemeSwitcherClick = () => {
    onClick?.();
    setTheme();
  };

  return (
    <button className={classNameFinal} onClick={handleThemeSwitcherClick}>
      {children}
      {themeIcon}
    </button>
  );
};
