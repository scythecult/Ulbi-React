import { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Header.module.css';

type HeaderProps = PropsWithChildren<{ className?: string }>;

export const Header = ({ children, className }: HeaderProps) => {
  const classNameFinal = cn(className, styles.header);

  return <header className={classNameFinal}>{children}</header>;
};
