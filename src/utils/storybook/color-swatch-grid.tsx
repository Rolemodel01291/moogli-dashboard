import * as React from 'react';

interface ColorSwatchGridProps {
  bgColor?: 'white' | 'black';
}

const ColorSwatchGrid: React.FC<ColorSwatchGridProps> = ({
  children,
  bgColor = 'white',
}) => {
  return (
    <div
      className='mt-6 mb-12 grid grid-cols-[repeat(auto-fill,minmax(calc(1116px_/_4_-_24px),1fr))] gap-6'
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

export default ColorSwatchGrid;
