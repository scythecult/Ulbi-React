import { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './AppLink.module.css';
import { LinkProps, NavLink } from 'react-router-dom';

const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

type AppLinkThemeKey = keyof typeof AppLinkTheme;
type AppLinkThemeValue = (typeof AppLinkTheme)[AppLinkThemeKey];

type AppLinkProps = PropsWithChildren<
  {
    className?: string;
    theme?: AppLinkThemeValue;
  } & LinkProps
>;

export const AppLink = ({ to, className, theme = AppLinkTheme.PRIMARY, children, ...restProps }: AppLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => cn(className, styles.appLink, styles[theme], { [styles.active]: isActive })}
      to={to}
      {...restProps}>
      {children}
    </NavLink>
  );
};
