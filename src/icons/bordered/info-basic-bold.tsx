import type { FC, SVGProps } from 'react';

const InfoBasicBoldIcon: FC<SVGProps<SVGSVGElement>> = ({
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
        d='M12,11c0.552,0,1,0.448,1,1v3.5c0,0.552-0.448,1-1,1s-1-0.448-1-1V12C11,11.448,11.448,11,12,11z'
        fill={fill}
      />
      <path
        d='M13,8.5c0-0.552-0.448-1-1-1s-1,0.448-1,1v0.01c0,0.552,0.448,1,1,1s1-0.448,1-1V8.5z'
        fill={fill}
      />
      <path
        d='M3,12c0-4.971,4.029-9,9-9c4.971,0,9,4.029,9,9c0,4.971-4.029,9-9,9C7.029,21,3,16.971,3,12z M12,5c-3.866,0-7,3.134-7,7
	c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7C19,8.134,15.866,5,12,5z'
        fill={fill}
      />
    </svg>
  );
};

export default InfoBasicBoldIcon;
