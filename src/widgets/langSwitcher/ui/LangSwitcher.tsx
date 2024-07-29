import { AppButton } from '../../../shared/ui';
import { PropsWithChildren } from 'react';
import cn from 'classnames';
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
    <AppButton className={classNameFinal} onClick={setLanguage}>
      {t('page.lang')}
    </AppButton>
  );
};
