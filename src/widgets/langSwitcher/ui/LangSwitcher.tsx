import { PropsWithChildren } from 'react';
import cn from 'classnames';
import { Button } from '../../../shared/ui';
import { useLanguage } from '../../../shared/hooks';
import { useTranslation } from 'react-i18next';

type LangSwitcherProps = PropsWithChildren<{
  className?: string;
}>;

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation();
  const [_, setLanguage] = useLanguage();
  const classNameFinal = cn(className);

  return (
    <Button className={classNameFinal} onClick={setLanguage}>
      {t('page.lang')}
    </Button>
  );
};
