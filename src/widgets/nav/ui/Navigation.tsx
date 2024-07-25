import { useTranslation } from 'react-i18next';
import { AppLink } from '../../../shared';
import { routes } from '../config/config';
import styles from './Navigation.module.scss';
import cn from 'classnames';

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
