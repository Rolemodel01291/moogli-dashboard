import * as React from 'react';

import clsxm from '../clsxm';

interface ColorSwatchProps {
  title: string;
  colorName: string;
  hex: string;
  hasBorder?: boolean;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  title,
  colorName,
  hex,
  hasBorder,
}) => (
  <div>
    <div
      className={clsxm(
        'h-16 border',
        hasBorder ? 'border-gray-400' : 'border-transparent'
      )}
      style={{
        backgroundColor: hex,
      }}
    />
    <div className='mt-2 flex flex-row justify-between'>
      <div>
        <h5 className='m-0 text-caption font-bold text-gray-500'>{title}</h5>
        <p className='m-0 font-mono text-caption2 text-gray-500'>{colorName}</p>
      </div>
      <div>
        <p className=' m-0 text-caption2 text-gray-400'>{hex}</p>
      </div>
    </div>
  </div>
);

ColorSwatch.displayName = 'ColorSwatch';

export default ColorSwatch;
