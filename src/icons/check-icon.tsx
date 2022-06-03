import type { FC, SVGProps } from 'react';

const CheckIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  fill = '#f1f2f3',
  ...rest
}) => {
  return (
    <svg
      fill='none'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      {...rest}
    >
      <path
        d='M21.345,5.02c0.817,0.743,0.878,2.008,0.135,2.825l-10,11c-0.386,0.424-0.936,0.663-1.509,0.654
	c-0.574-0.008-1.116-0.263-1.489-0.698l-6-7C1.763,10.963,1.86,9.7,2.698,8.981C3.537,8.263,4.8,8.36,5.518,9.198l4.526,5.28
	l8.476-9.324C19.263,4.337,20.528,4.277,21.345,5.02z'
        fill={fill}
      />
    </svg>
  );
};

export default CheckIcon;
