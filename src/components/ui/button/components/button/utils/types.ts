export type ButtonSizes = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxs';
export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'subtle';
export type ButtonIconPositions = 'left' | 'right';

export interface ButtonBaseProps {
  /** Make the button expand the width of the container. */
  block?: boolean;
  /** The button's variant */
  variant?: ButtonVariants;
  /** Renders the loading state of button. */
  isLoading?: boolean;
  /** The size of the button. Available sizes: `"xxs" | "xs" | "sm" | "md" | "lg" | "xl"` */
  size?: ButtonSizes;
  /** The icon component to use in the button. `icon={PlusIcon}` */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** If the button has an icon, change where the icon is placed. Defaults to `"left"`. */
  iconPosition?: ButtonIconPositions;
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
