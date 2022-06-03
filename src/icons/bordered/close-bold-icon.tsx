import type { FC, SVGProps } from 'react';

const CloseBoldIcon: FC<SVGProps<SVGSVGElement>> = ({
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
        d='M20.707,4.707c0.391-0.391,0.391-1.024,0-1.414c-0.39-0.391-1.024-0.391-1.414,0L12,10.586L4.707,3.293
	c-0.391-0.391-1.024-0.391-1.414,0c-0.391,0.391-0.391,1.024,0,1.414L10.586,12l-7.293,7.293c-0.391,0.39-0.391,1.024,0,1.414
	c0.391,0.391,1.024,0.391,1.414,0L12,13.414l7.293,7.293c0.39,0.391,1.024,0.391,1.414,0c0.391-0.39,0.391-1.024,0-1.414L13.414,12
	L20.707,4.707z'
        fill={fill}
      />
    </svg>
  );
};

export default CloseBoldIcon;
