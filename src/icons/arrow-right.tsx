import type { FC, SVGProps } from 'react';

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = ({
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
        d='M7.77,19.316c-0.378,0.403-0.357,1.036,0.046,1.413c0.403,0.378,1.036,0.357,1.413-0.046l6.495-6.928
	c0.163-0.173,0.322-0.343,0.446-0.499c0.137-0.172,0.283-0.387,0.369-0.664c0.12-0.387,0.12-0.8,0-1.187
	c-0.086-0.277-0.232-0.492-0.369-0.664c-0.124-0.155-0.283-0.325-0.446-0.499L9.23,3.316C8.852,2.913,8.219,2.893,7.816,3.27
	S7.393,4.281,7.77,4.684l6.474,6.906c0.191,0.204,0.295,0.316,0.363,0.401L14.615,12l-0.007,0.009
	c-0.068,0.086-0.172,0.197-0.363,0.401L7.77,19.316z'
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRightIcon;
