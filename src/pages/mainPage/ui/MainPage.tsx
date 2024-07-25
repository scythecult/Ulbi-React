import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t('page.main.heading')}</div>;
};

export default MainPage;
