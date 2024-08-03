import { AppLink } from '../../../shared';
import cn from 'classnames';
import { routes } from '../config/config';
import styles from './Navigation.module.css';
import { useTranslation } from 'react-i18next';

type NavigationProps = {
  className?: string;
};

export const Navigation = ({ className }: NavigationProps) => {
  const { t } = useTranslation();
  const classNameFinal = cn(className, styles.navigation);

  return (
    <nav className={classNameFinal}>
      {routes.map(({ text, path }) => (
        <AppLink key={path} to={path}>
          {t(`routes.${text}`)}
        </AppLink>
      ))}
    </nav>
  );
};
