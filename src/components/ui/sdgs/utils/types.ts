export type SdgsVariant =
  | 'no poverty'
  | 'zero hunger'
  | 'good health and well-being'
  | 'quality education'
  | 'gender equality'
  | 'clean water and sanitation'
  | 'affordable and clean energy'
  | 'decent work and economic growth'
  | 'industry inovation infrastrucuture'
  | 'reduced inequalities'
  | 'sustainable cities and communities'
  | 'responsible consumption and production'
  | 'climate action'
  | 'life below water'
  | 'life on land'
  | 'peace justice and strong institutions'
  | 'partnership for the goals';

export interface SdgsProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  /** Variant of the SDGs. Available variants: `'no poverty'
  | 'zero hunger'
  | 'good health and well-being'
  | 'quality education'
  | 'gender equality'
  | 'clean water and sanitation'
  | 'affordable and clean energy'
  | 'decent work and economic growth'
  | 'industry inovation infrastrucuture'
  | 'reduced inequalities'
  | 'sustainable cities and communities'
  | 'responsible consumption and production'
  | 'climate action'
  | 'life below water'
  | 'life on land'
  | 'peace justice and strong institutions'
  | 'partnership for the goals'` */
  variant?: SdgsVariant;
  /** The size of the SDGs */
  size?: number;
}
