import cn from 'classnames';
import styles from './Sidebar.module.scss';
import { PropsWithChildren, useState } from 'react';
import { ThemeSwitcher } from '../../themeSwitcher';
import { LangSwitcher } from '../../langSwitcher';
import { useTranslation } from 'react-i18next';

type SidebarProps = PropsWithChildren<{
  className?: string;
}>;

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const classNameFinal = cn(className, styles.sidebar, { [styles.collapsed]: collapsed });
  const collapseButtonText = collapsed
    ? t('page.common.sidebar-button-expand')
    : t('page.common.sidebar-button-collapse');

  const handleCollapseButtonClick = () => setCollapsed((prevCollapsed) => !prevCollapsed);

  return (
    <div className={classNameFinal}>
      <div className={styles.header}></div>
      <div className={styles.content}>sidebar</div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <button className={styles.sidebarToggle} onClick={handleCollapseButtonClick}>
        {collapseButtonText}
      </button>
    </div>
  );
};
