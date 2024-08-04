import { LangSwitcher } from '../../langSwitcher';
import { ThemeSwitcher } from '../../themeSwitcher';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { useTranslation } from 'react-i18next';
import { PropsWithChildren, useState } from 'react';

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
