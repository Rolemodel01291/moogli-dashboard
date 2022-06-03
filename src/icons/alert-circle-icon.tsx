import type { FC, SVGProps } from 'react';

const AlertCircleIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  fill = '#f1f2f3',
  ...rest
}) => {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      fill='none'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      xmlSpace='preserve'
      {...rest}
    >
      <path
        d='M12,3c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S16.971,3,12,3z M13,15.5c0,0.552-0.448,1-1,1s-1-0.448-1-1v-0.01
	c0-0.552,0.448-1,1-1s1,0.448,1,1V15.5z M13,12c0,0.552-0.448,1-1,1s-1-0.448-1-1V8.5c0-0.552,0.448-1,1-1s1,0.448,1,1V12z'
        fill={fill}
      />
    </svg>
  );
};

export default AlertCircleIcon;
