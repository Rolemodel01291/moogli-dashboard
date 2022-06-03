import type { FC, SVGProps } from 'react';

const ArrowWideLeftBoldIcon: FC<SVGProps<SVGSVGElement>> = ({
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
        d='M10.707,5.293c0.391,0.391,0.391,1.024,0,1.414L6.414,11h13.591C20.555,11,21,11.448,21,12s-0.445,1-0.994,1H6.414
	l4.293,4.293c0.391,0.39,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0l-6-6c-0.391-0.391-0.391-1.024,0-1.414l6-6
	C9.683,4.902,10.317,4.902,10.707,5.293z'
        fill={fill}
      />
    </svg>
  );
};

export default ArrowWideLeftBoldIcon;
