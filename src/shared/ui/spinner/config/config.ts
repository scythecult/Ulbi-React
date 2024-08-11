export const SpinnerSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type SpinnerSizeKey = keyof typeof SpinnerSize;
export type SpinnerSizeValue = (typeof SpinnerSize)[SpinnerSizeKey];
