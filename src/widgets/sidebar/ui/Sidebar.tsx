import cn from 'classnames';
import styles from './Sidebar.module.scss';
import { PropsWithChildren, useState } from 'react';
import { ThemeSwitcher } from '../../themeSwitcher';

type SidebarProps = PropsWithChildren<{
  className?: string;
}>;

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const classNameFinal = cn(className, styles.sidebar, { [styles.collapsed]: collapsed });
  const collapseButtonText = collapsed ? 'Expand' : 'Collapse';

  const handleCollapseButtonClick = () => setCollapsed((prevCollapsed) => !prevCollapsed);

  return (
    <div className={classNameFinal}>
      <div className={styles.header}></div>
      <div className={styles.content}>sidebar</div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
      <button className={styles.sidebarToggle} onClick={handleCollapseButtonClick}>
        {collapseButtonText}
      </button>
    </div>
  );
};
