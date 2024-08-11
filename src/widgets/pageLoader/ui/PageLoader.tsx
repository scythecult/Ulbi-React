import styles from './PageLoader.module.css';
import { Spinner, SpinnerSize } from '../../../shared/ui';

export const PageLoader = () => (
  <div className={styles.pageLoader}>
    <Spinner size={SpinnerSize.LARGE} />
  </div>
);
