import { NavLink } from 'react-router-dom';
import { routes } from '../config';
import styles from './navigation.module.scss';
import cn from 'classnames';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {routes.map(({ text, path }) => (
        <NavLink className={({ isActive }) => cn(styles.navigationLink, { [styles.active]: isActive })} to={path}>
          {text}
        </NavLink>
      ))}
    </nav>
  );
};
