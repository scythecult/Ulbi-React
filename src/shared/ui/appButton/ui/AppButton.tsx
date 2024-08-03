import cn from 'classnames';
import styles from './AppButton.module.css';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const AppButtonVariant = {
  CLEAR: 'clear',
} as const;

type AppButtonVariantKey = keyof typeof AppButtonVariant;
type AppButtonVariantValue = (typeof AppButtonVariant)[AppButtonVariantKey];

type AppButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: AppButtonVariantValue;
  }
>;

export const AppButton = ({
  className,
  theme = AppButtonVariant.CLEAR,
  children,
  onClick,
  ...restProps
}: AppButtonProps) => {
  const classNameFinal = cn(className, styles.appButton, styles[theme]);

  return (
    <button className={classNameFinal} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};
