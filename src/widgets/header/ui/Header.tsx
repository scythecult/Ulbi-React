import { PropsWithChildren } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';

type HeaderProps = PropsWithChildren<{ className?: string }>;

export const Header = ({ children, className }: HeaderProps) => {
  const classNameFinal = cn(className, styles.header);

  return <header className={classNameFinal}>{children}</header>;
};
