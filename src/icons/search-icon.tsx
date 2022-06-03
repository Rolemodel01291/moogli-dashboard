import type { FC, SVGProps } from 'react';

const SearchIcon: FC<SVGProps<SVGSVGElement>> = ({
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
        d='M11.5,3.25c-4.556,0-8.25,3.694-8.25,8.25c0,4.556,3.694,8.25,8.25,8.25c2.008,0,3.849-0.718,5.279-1.91l2.69,2.69
	c0.293,0.293,0.768,0.293,1.061,0s0.293-0.768,0-1.061l-2.69-2.69c1.192-1.431,1.91-3.271,1.91-5.279
	C19.75,6.944,16.056,3.25,11.5,3.25z M4.75,11.5c0-3.728,3.022-6.75,6.75-6.75c3.728,0,6.75,3.022,6.75,6.75
	c0,3.728-3.022,6.75-6.75,6.75C7.772,18.25,4.75,15.228,4.75,11.5z'
        fill={fill}
      />
    </svg>
  );
};

export default SearchIcon;
