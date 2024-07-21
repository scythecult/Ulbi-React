import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const ButtonVariant = {
  CLEAR: 'clear',
} as const;

type ButtonVariantKey = keyof typeof ButtonVariant;
type ButtonVariantValue = typeof ButtonVariant[ButtonVariantKey];

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: ButtonVariantValue;
  }
>;

export const Button = ({ className, theme = ButtonVariant.CLEAR, children, onClick, ...restProps }: ButtonProps) => {
  const classNameFinal = cn(className, styles.button, styles[theme]);

  return (
    <button className={classNameFinal} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};
