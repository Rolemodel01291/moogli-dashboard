export type AvatarSize = 24 | 32 | 40 | 48 | 72 | 96;

export interface AvatarProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  /** Name for initials */
  name?: string;
  /** The avatar's image source. */
  src?: string;
  /** Alt text for the avatar. */
  alt?: string;
  /** Size of the avatar. */
  size?: AvatarSize;
}
