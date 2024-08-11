import cn from 'classnames';
import styles from './Spinner.module.css';
import { SpinnerSize, SpinnerSizeValue } from '../config/config';

type SpinnerProps = {
  size?: SpinnerSizeValue;
};

export const Spinner = ({ size = SpinnerSize.MEDIUM }: SpinnerProps) => {
  const classNameFinal = cn(styles.spinner, styles[size]);

  return <div className={classNameFinal}></div>;
};
