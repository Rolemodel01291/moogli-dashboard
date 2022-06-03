import type { ButtonProps } from '../../button/utils/';

export type IconButtonProps = Omit<ButtonProps, 'block' | 'iconPosition'> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
