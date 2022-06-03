export type InputTextSizes = 'lg' | 'md' | 'sm';
export type SelectorSizes = 'lg' | 'md' | 'sm';
export type IconPosition = 'left' | 'right';
export type Allowed = string | number | null;

export interface InputBaseProps {
  /** The icon component to use in the input text. `icon={PlusIcon}` */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Renders the loading state of input text. */
  isLoading?: boolean;
  /** The size of the input text. Available sizes: `"sm" | "md" | "lg"` */
  inputSize?: InputTextSizes;
  disabled?: boolean;
}

export interface RadioGroupContextType {
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export interface SliderBaseProps {
  /** The icon component to use in the left of input slider. `icon={PlusIcon}` */
  iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** The icon component to use in the right of input slider. `icon={PlusIcon}` */
  iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Additional className for InputSlider wrapper */
  wrapperClasses?: string;
}

export interface MenuItmeData {
  value: string;
  label: string;
}

export interface SelectorBaseProps {
  initialValue: Allowed;
  /** The size of the input text. Available sizes: `"sm" | "md" | "lg"` */
  selectorSize?: SelectorSizes;
  /** The active component or disactive component: `true | false` */
  disabled?: boolean;

  handleChange: (newValue: Allowed) => void;

  options: string[];
}

export type InputTextProps = InputBaseProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export type SelectorProps = SelectorBaseProps &
  React.InputHTMLAttributes<HTMLInputElement>;
