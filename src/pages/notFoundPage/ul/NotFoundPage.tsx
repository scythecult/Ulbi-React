import { AppRoutePath } from '../../../shared';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './NotFoundPage.module.css';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const classNameFinal = cn(styles.notFound);

  return (
    <div className={classNameFinal}>
      {t('page.not-found.heading')}
      <Link className={styles.notFoundLink} to={AppRoutePath.ROOT}>
        {t('page.not-found.back')}
      </Link>
    </div>
  );
};

export default NotFoundPage;
