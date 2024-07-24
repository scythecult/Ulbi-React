import { AppLink } from '../../../shared';
import { routes } from '../config/config';
import styles from './Navigation.module.scss';
import cn from 'classnames';

type NavigationProps = {
  className?: string;
};

export const Navigation = ({ className }: NavigationProps) => {
  const classNameFinal = cn(className, styles.navigation);

  return (
    <nav className={classNameFinal}>
      {routes.map(({ text, path }) => (
        <AppLink key={path} to={path}>
          {text}
        </AppLink>
      ))}
    </nav>
  );
};
