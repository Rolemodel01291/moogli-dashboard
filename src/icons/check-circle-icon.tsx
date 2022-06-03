import type { FC, SVGProps } from 'react';

const CheckCircleIcon: FC<SVGProps<SVGSVGElement>> = ({
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
        d='M12,3c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S16.971,3,12,3z M15.707,10.707l-4,4c-0.391,0.391-1.024,0.391-1.414,0
	l-2-2c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0L11,12.586l3.293-3.293c0.391-0.391,1.024-0.391,1.414,0
	C16.098,9.683,16.098,10.317,15.707,10.707z'
        fill={fill}
      />
    </svg>
  );
};

export default CheckCircleIcon;
