import * as React from 'react';

import { ColorSwatch, ColorSwatchGrid } from '../../utils/storybook';

export default {
  title: 'Core/Foundations/Colors',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Brand = () => (
  <>
    <ColorSwatchGrid>
      <ColorSwatch colorName='brand-main-700' hex='#373C95' title='main 700' />
      <ColorSwatch colorName='brand-main-600' hex='#3E44A7' title='main 600' />
      <ColorSwatch colorName='brand-main-500' hex='#454BBA' title='main 500' />
      <ColorSwatch colorName='brand-main-400' hex='#676BC6' title='main 400' />
      <ColorSwatch colorName='brand-main-300' hex='#8286D1' title='main 300' />
      <ColorSwatch colorName='brand-main-200' hex='#B7B9E4' title='main 200' />
      <ColorSwatch colorName='brand-main-100' hex='#EAEBF7' title='main 100' />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='brand-light-700'
        hex='#ABAEE0'
        title='light 700'
      />
      <ColorSwatch
        colorName='brand-light-600'
        hex='#B7BBED'
        title='light 600'
      />
      <ColorSwatch
        colorName='brand-light-500'
        hex='#C9CDFF'
        title='light 500'
      />
      <ColorSwatch
        colorName='brand-light-400'
        hex='#D3D6FF'
        title='light 400'
      />
      <ColorSwatch
        colorName='brand-light-300'
        hex='#DBDDFF'
        title='light 300'
      />
      <ColorSwatch
        colorName='brand-light-200'
        hex='#EAECFF'
        title='light 200'
      />
      <ColorSwatch
        colorName='brand-light-100'
        hex='#F9F9FF'
        title='light 100'
      />
    </ColorSwatchGrid>
  </>
);

export const Neutrals = () => (
  <ColorSwatchGrid>
    <ColorSwatch
      colorName='neutrals-0'
      hasBorder
      hex='#FFFFFF'
      title='neutrals 0'
    />
    <ColorSwatch
      colorName='neutrals-10'
      hasBorder
      hex='#FAFAFB'
      title='neutrals 10'
    />
    <ColorSwatch
      colorName='neutrals-20'
      hasBorder
      hex='#F7F9FC'
      title='neutrals 20'
    />
    <ColorSwatch colorName='neutrals-30' hex='#F2F4FA' title='neutrals 30' />
    <ColorSwatch colorName='neutrals-40' hex='#E9EBF2' title='neutrals 40' />
    <ColorSwatch colorName='neutrals-50' hex='#E0E3EB' title='neutrals 50' />
    <ColorSwatch colorName='neutrals-60' hex='#DBDDE6' title='neutrals 60' />
    <ColorSwatch colorName='neutrals-70' hex='#CDCFD6' title='neutrals 70' />
    <ColorSwatch colorName='neutrals-80' hex='#B4B7C1' title='neutrals 80' />
    <ColorSwatch colorName='neutrals-90' hex='#9B9FAD' title='neutrals 90' />
    <ColorSwatch colorName='neutrals-100' hex='#6A6F85' title='neutrals 100' />
    <ColorSwatch colorName='neutrals-200' hex='#383F5C' title='neutrals 200' />
    <ColorSwatch colorName='neutrals-300' hex='#1E2747' title='neutrals 300' />
    <ColorSwatch colorName='neutrals-400' hex='#060F33' title='neutrals 400' />
    <ColorSwatch colorName='neutrals-500' hex='#161429' title='neutrals 500' />
    <ColorSwatch colorName='neutrals-600' hex='#0E0D1B' title='neutrals 600' />
    <ColorSwatch colorName='neutrals-700' hex='#0A0912' title='neutrals 700' />
    <ColorSwatch colorName='neutrals-800' hex='#000000' title='neutrals 800' />
  </ColorSwatchGrid>
);

export const Semantic = () => (
  <>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='semantic-positive1-700'
        hex='#178F17'
        title='positive1 700'
      />
      <ColorSwatch
        colorName='semantic-positive1-600'
        hex='#199E19'
        title='positive1 600'
      />
      <ColorSwatch
        colorName='semantic-positive1-500'
        hex='#1CAD1C'
        title='positive1 500'
      />
      <ColorSwatch
        colorName='semantic-positive1-400'
        hex='#45BC45'
        title='positive1 400'
      />
      <ColorSwatch
        colorName='semantic-positive1-300'
        hex='#67C867'
        title='positive1 300'
      />
      <ColorSwatch
        colorName='semantic-positive1-200'
        hex='#A7DFA7'
        title='positive1 200'
      />
      <ColorSwatch
        colorName='semantic-positive1-100'
        hex='#E5F6E5'
        title='positive1 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='semantic-positive2-700'
        hex='#58A828'
        title='positive2 700'
      />
      <ColorSwatch
        colorName='semantic-positive2-600'
        hex='#60B82C'
        title='positive2 600'
      />
      <ColorSwatch
        colorName='semantic-positive2-500'
        hex='#69C930'
        title='positive2 500'
      />
      <ColorSwatch
        colorName='semantic-positive2-400'
        hex='#84D355'
        title='positive2 400'
      />
      <ColorSwatch
        colorName='semantic-positive2-300'
        hex='#9ADB74'
        title='positive2 300'
      />
      <ColorSwatch
        colorName='semantic-positive2-200'
        hex='#C5EAAF'
        title='positive2 200'
      />
      <ColorSwatch
        colorName='semantic-positive2-100'
        hex='#EEF9E7'
        title='positive2 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='semantic-warning1-700'
        hex='#E0A91C'
        title='warning1 700'
      />
      <ColorSwatch
        colorName='semantic-warning1-600'
        hex='#EBB01D'
        title='warning1 600'
      />
      <ColorSwatch
        colorName='semantic-warning1-500'
        hex='#FEBF1F'
        title='warning1 500'
      />
      <ColorSwatch
        colorName='semantic-warning1-400'
        hex='#FECB47'
        title='warning1 400'
      />
      <ColorSwatch
        colorName='semantic-warning1-300'
        hex='#FED469'
        title='warning1 300'
      />
      <ColorSwatch
        colorName='semantic-warning1-200'
        hex='#FFE6A8'
        title='warning1 200'
      />
      <ColorSwatch
        colorName='semantic-warning1-100'
        hex='#FFF8E6'
        title='warning1 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='semantic-warning2-700'
        hex='#D6751A'
        title='warning2 700'
      />
      <ColorSwatch
        colorName='semantic-warning2-600'
        hex='#EB7F1C'
        title='warning2 600'
      />
      <ColorSwatch
        colorName='semantic-warning2-500'
        hex='#FA881E'
        title='warning2 500'
      />
      <ColorSwatch
        colorName='semantic-warning2-400'
        hex='#FB9D47'
        title='warning2 400'
      />
      <ColorSwatch
        colorName='semantic-warning2-300'
        hex='#FCAF68'
        title='warning2 300'
      />
      <ColorSwatch
        colorName='semantic-warning2-200'
        hex='#FDD1A8'
        title='warning2 200'
      />
      <ColorSwatch
        colorName='semantic-warning2-100'
        hex='#FEF1E5'
        title='warning2 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='semantic-negative1-700'
        hex='#C74A17'
        title='negative1 700'
      />
      <ColorSwatch
        colorName='semantic-negative1-600'
        hex='#DB511A'
        title='negative1 600'
      />
      <ColorSwatch
        colorName='semantic-negative1-500'
        hex='#EB571C'
        title='negative1 500'
      />
      <ColorSwatch
        colorName='semantic-negative1-400'
        hex='#EF7545'
        title='negative1 400'
      />
      <ColorSwatch
        colorName='semantic-negative1-300'
        hex='#F28E67'
        title='negative1 300'
      />
      <ColorSwatch
        colorName='semantic-negative1-200'
        hex='#F7BEA7'
        title='negative1 200'
      />
      <ColorSwatch
        colorName='semantic-negative1-100'
        hex='#FDECE5'
        title='negative1 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='semantic-negative2-700'
        hex='#C7221C'
        title='negative2 700'
      />
      <ColorSwatch
        colorName='semantic-negative2-600'
        hex='#D6241E'
        title='negative2 600'
      />
      <ColorSwatch
        colorName='semantic-negative2-500'
        hex='#E52720'
        title='negative2 500'
      />
      <ColorSwatch
        colorName='semantic-negative2-400'
        hex='#EA4E48'
        title='negative2 400'
      />
      <ColorSwatch
        colorName='semantic-negative2-300'
        hex='#EE6E69'
        title='negative2 300'
      />
      <ColorSwatch
        colorName='semantic-negative2-200'
        hex='#F5ABA8'
        title='negative2 200'
      />
      <ColorSwatch
        colorName='semantic-negative2-100'
        hex='#FCE6E6'
        title='negative2 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='semantic-alert-700'
        hex='#CC3545'
        title='alert 700'
      />
      <ColorSwatch
        colorName='semantic-alert-600'
        hex='#DD3A4A'
        title='alert 600'
      />
      <ColorSwatch
        colorName='semantic-alert-500'
        hex='#F54052'
        title='alert 500'
      />
      <ColorSwatch
        colorName='semantic-alert-400'
        hex='#F76271'
        title='alert 400'
      />
      <ColorSwatch
        colorName='semantic-alert-300'
        hex='#F87F8B'
        title='alert 300'
      />
      <ColorSwatch
        colorName='semantic-alert-200'
        hex='#FBB5BC'
        title='alert 200'
      />
      <ColorSwatch
        colorName='semantic-alert-100'
        hex='#FEE9EB'
        title='alert 100'
      />
    </ColorSwatchGrid>
  </>
);

export const Accent = () => (
  <ColorSwatchGrid>
    <ColorSwatch
      colorName='accent-mariner-700'
      hex='#3C62BC'
      title='mariner 700'
    />
    <ColorSwatch
      colorName='accent-mariner-500'
      hex='#446FD4'
      title='mariner 500'
    />
    <ColorSwatch
      colorName='accent-mariner-600'
      hex='#4B7BEB'
      title='mariner 600'
    />
    <ColorSwatch
      colorName='accent-mariner-400'
      hex='#6B93EF'
      title='mariner 400'
    />
    <ColorSwatch
      colorName='accent-mariner-300'
      hex='#86A6F2'
      title='mariner 300'
    />
    <ColorSwatch
      colorName='accent-mariner-200'
      hex='#B9CCF7'
      title='mariner 200'
    />
    <ColorSwatch
      colorName='accent-mariner-100'
      hex='#EBF0FD'
      title='mariner 100'
    />
  </ColorSwatchGrid>
);

export const Extension = () => (
  <>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-sulu-700'
        hex='#9EC76D'
        title='sulu 700'
      />
      <ColorSwatch
        colorName='extension-sulu-600'
        hex='#AFDB78'
        title='sulu 600'
      />
      <ColorSwatch
        colorName='extension-sulu-500'
        hex='#BDED82'
        title='sulu 500'
      />
      <ColorSwatch
        colorName='extension-sulu-400'
        hex='#C9F099'
        title='sulu 400'
      />
      <ColorSwatch
        colorName='extension-sulu-300'
        hex='#D3F3AB'
        title='sulu 300'
      />
      <ColorSwatch
        colorName='extension-sulu-200'
        hex='#E5F8CE'
        title='sulu 200'
      />
      <ColorSwatch
        colorName='extension-sulu-100'
        hex='#F7FDF1'
        title='sulu 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-mantis-700'
        hex='#76BD5F'
        title='mantis 700'
      />
      <ColorSwatch
        colorName='extension-mantis-600'
        hex='#82D16A'
        title='mantis 600'
      />
      <ColorSwatch
        colorName='extension-mantis-500'
        hex='#8CE071'
        title='mantis 500'
      />
      <ColorSwatch
        colorName='extension-mantis-400'
        hex='#A1E68B'
        title='mantis 400'
      />
      <ColorSwatch
        colorName='extension-mantis-300'
        hex='#B2EAA0'
        title='mantis 300'
      />
      <ColorSwatch
        colorName='extension-mantis-200'
        hex='#D2F3C8'
        title='mantis 200'
      />
      <ColorSwatch
        colorName='extension-mantis-100'
        hex='#F2FBEF'
        title='mantis 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-lagoon-700'
        hex='#0B6A75'
        title='lagoon 700'
      />
      <ColorSwatch
        colorName='extension-lagoon-600'
        hex='#0B7480'
        title='lagoon 600'
      />
      <ColorSwatch
        colorName='extension-lagoon-500'
        hex='#0C7B87'
        title='lagoon 500'
      />
      <ColorSwatch
        colorName='extension-lagoon-400'
        hex='#38939D'
        title='lagoon 400'
      />
      <ColorSwatch
        colorName='extension-lagoon-300'
        hex='#5CA6AF'
        title='lagoon 300'
      />
      <ColorSwatch
        colorName='extension-lagoon-200'
        hex='#A1CCD0'
        title='lagoon 200'
      />
      <ColorSwatch
        colorName='extension-lagoon-100'
        hex='#E3F0F1'
        title='lagoon 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-torquoise-700'
        hex='#00ADA0'
        title='torquoise 700'
      />
      <ColorSwatch
        colorName='extension-torquoise-600'
        hex='#00C2B3'
        title='torquoise 600'
      />
      <ColorSwatch
        colorName='extension-torquoise-500'
        hex='#00D1C1'
        title='torquoise 500'
      />
      <ColorSwatch
        colorName='extension-torquoise-400'
        hex='#2ED9CC'
        title='torquoise 400'
      />
      <ColorSwatch
        colorName='extension-torquoise-300'
        hex='#54E0D5'
        title='torquoise 300'
      />
      <ColorSwatch
        colorName='extension-torquoise-200'
        hex='#9CEDE7'
        title='torquoise 200'
      />
      <ColorSwatch
        colorName='extension-torquoise-100'
        hex='#E2FAF8'
        title='torquoise 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-orchid-700'
        hex='#C78884'
        title='orchid 700'
      />
      <ColorSwatch
        colorName='extension-orchid-600'
        hex='#DB9691'
        title='orchid 600'
      />
      <ColorSwatch
        colorName='extension-orchid-500'
        hex='#EDA29D'
        title='orchid 500'
      />
      <ColorSwatch
        colorName='extension-orchid-400'
        hex='#F0B3AF'
        title='orchid 400'
      />
      <ColorSwatch
        colorName='extension-orchid-300'
        hex='#F3C1BD'
        title='orchid 300'
      />
      <ColorSwatch
        colorName='extension-orchid-200'
        hex='#F8DBD9'
        title='orchid 200'
      />
      <ColorSwatch
        colorName='extension-orchid-100'
        hex='#FDF4F4'
        title='orchid 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-sunglo-700'
        hex='#C76257'
        title='sunglo 700'
      />
      <ColorSwatch
        colorName='extension-sunglo-600'
        hex='#DB6C61'
        title='sunglo 600'
      />
      <ColorSwatch
        colorName='extension-sunglo-500'
        hex='#EC7468'
        title='sunglo 500'
      />
      <ColorSwatch
        colorName='extension-sunglo-400'
        hex='#EF8D83'
        title='sunglo 400'
      />
      <ColorSwatch
        colorName='extension-sunglo-300'
        hex='#F2A29A'
        title='sunglo 300'
      />
      <ColorSwatch
        colorName='extension-sunglo-200'
        hex='#F8C9C4'
        title='sunglo 200'
      />
      <ColorSwatch
        colorName='extension-sunglo-100'
        hex='#FDEFEE'
        title='sunglo 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-buttercup-700'
        hex='#C79110'
        title='buttercup 700'
      />
      <ColorSwatch
        colorName='extension-buttercup-600'
        hex='#DB9F12'
        title='buttercup 600'
      />
      <ColorSwatch
        colorName='extension-buttercup-500'
        hex='#EBAB13'
        title='buttercup 500'
      />
      <ColorSwatch
        colorName='extension-buttercup-400'
        hex='#EFBA3E'
        title='buttercup 400'
      />
      <ColorSwatch
        colorName='extension-buttercup-300'
        hex='#F2C761'
        title='buttercup 300'
      />
      <ColorSwatch
        colorName='extension-buttercup-200'
        hex='#F7DEA3'
        title='buttercup 200'
      />
      <ColorSwatch
        colorName='extension-buttercup-100'
        hex='#FDF5E4'
        title='buttercup 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='extension-corn-700'
        hex='#C2A606'
        title='corn 700'
      />
      <ColorSwatch
        colorName='extension-corn-600'
        hex='#D6B907'
        title='corn 600'
      />
      <ColorSwatch
        colorName='extension-corn-500'
        hex='#E2C208'
        title='corn 500'
      />
      <ColorSwatch
        colorName='extension-corn-400'
        hex='#E7CD35'
        title='corn 400'
      />
      <ColorSwatch
        colorName='extension-corn-300'
        hex='#ECD659'
        title='corn 300'
      />
      <ColorSwatch
        colorName='extension-corn-200'
        hex='#F4E79F'
        title='corn 200'
      />
      <ColorSwatch
        colorName='extension-corn-100'
        hex='#FCF8E3'
        title='corn 100'
      />
    </ColorSwatchGrid>
  </>
);

export const Opacity = () => (
  <>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='black/90'
        hex='rgba(18, 18, 18, 0.9)'
        title='black 700'
      />
      <ColorSwatch
        colorName='black/80'
        hex='rgba(18, 18, 18, 0.8)'
        title='black 600'
      />
      <ColorSwatch
        colorName='black/60'
        hex='rgba(18, 18, 18, 0.6)'
        title='black 500'
      />
      <ColorSwatch
        colorName='black/40'
        hex='rgba(18, 18, 18, 0.4)'
        title='black 400'
      />
      <ColorSwatch
        colorName='black/30'
        hex='rgba(18, 18, 18, 0.3)'
        title='black 300'
      />
      <ColorSwatch
        colorName='black/20'
        hex='rgba(18, 18, 18, 0.2)'
        title='black 200'
      />
      <ColorSwatch
        colorName='black/10'
        hex='rgba(18, 18, 18, 0.1)'
        title='black 100'
      />
      <ColorSwatch
        colorName='black/5'
        hex='rgba(18, 18, 18, 0.05)'
        title='black 50'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid bgColor='black'>
      <ColorSwatch
        colorName='white/90'
        hasBorder
        hex='rgba(255, 255, 255, 0.9)'
        title='white 700'
      />
      <ColorSwatch
        colorName='white/80'
        hasBorder
        hex='rgba(255, 255, 255, 0.8)'
        title='white 600'
      />
      <ColorSwatch
        colorName='white/60'
        hasBorder
        hex='rgba(255, 255, 255, 0.6)'
        title='white 500'
      />
      <ColorSwatch
        colorName='white/40'
        hasBorder
        hex='rgba(255, 255, 255, 0.4)'
        title='white 400'
      />
      <ColorSwatch
        colorName='white/30'
        hasBorder
        hex='rgba(255, 255, 255, 0.3)'
        title='white 300'
      />
      <ColorSwatch
        colorName='white/20'
        hasBorder
        hex='rgba(255, 255, 255, 0.2)'
        title='white 200'
      />
      <ColorSwatch
        colorName='white/10'
        hasBorder
        hex='rgba(255, 255, 255, 0.1)'
        title='white 100'
      />
      <ColorSwatch
        colorName='white/5'
        hasBorder
        hex='rgba(255, 255, 255, 0.05)'
        title='white 50'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='tangaroa/90'
        hasBorder
        hex='rgba(6, 15, 51, 0.9)'
        title='tangaroa 700'
      />
      <ColorSwatch
        colorName='tangaroa/80'
        hasBorder
        hex='rgba(6, 15, 51, 0.8)'
        title='tangaroa 600'
      />
      <ColorSwatch
        colorName='tangaroa/60'
        hasBorder
        hex='rgba(6, 15, 51, 0.6)'
        title='tangaroa 500'
      />
      <ColorSwatch
        colorName='tangaroa/40'
        hasBorder
        hex='rgba(6, 15, 51, 0.4)'
        title='tangaroa 400'
      />
      <ColorSwatch
        colorName='tangaroa/30'
        hasBorder
        hex='rgba(6, 15, 51, 0.3)'
        title='tangaroa 300'
      />
      <ColorSwatch
        colorName='tangaroa/20'
        hasBorder
        hex='rgba(6, 15, 51, 0.2)'
        title='tangaroa 200'
      />
      <ColorSwatch
        colorName='tangaroa/10'
        hasBorder
        hex='rgba(6, 15, 51, 0.1)'
        title='tangaroa 100'
      />
      <ColorSwatch
        colorName='tangaroa/5'
        hasBorder
        hex='rgba(6, 15, 51, 0.05)'
        title='tangaroa 50'
      />
    </ColorSwatchGrid>
  </>
);

export const Guide = () => (
  <ColorSwatchGrid>
    <ColorSwatch colorName='guide-1' hex='#E5243B' title='guide 1' />
    <ColorSwatch colorName='guide-2' hex='#DDA83A' title='guide 2' />
    <ColorSwatch colorName='guide-3' hex='#4C9F38' title='guide 3' />
    <ColorSwatch colorName='guide-4' hex='#C5192D' title='guide 4' />
    <ColorSwatch colorName='guide-5' hex='#FF3A21' title='guide 5' />
    <ColorSwatch colorName='guide-6' hex='#26BDE2' title='guide 6' />
    <ColorSwatch colorName='guide-7' hex='#FCC30B' title='guide 7' />
    <ColorSwatch colorName='guide-8' hex='#A21942' title='guide 8' />
    <ColorSwatch colorName='guide-9' hex='#FD6925' title='guide 9' />
    <ColorSwatch colorName='guide-10' hex='#DD1367' title='guide 10' />
    <ColorSwatch colorName='guide-11' hex='#FD9D24' title='guide 11' />
    <ColorSwatch colorName='guide-12' hex='#BF8B2E' title='guide 12' />
    <ColorSwatch colorName='guide-13' hex='#3F7E44' title='guide 13' />
    <ColorSwatch colorName='guide-14' hex='#0A97D9' title='guide 14' />
    <ColorSwatch colorName='guide-15' hex='#56C02B' title='guide 15' />
    <ColorSwatch colorName='guide-16' hex='#00689D' title='guide 16' />
    <ColorSwatch colorName='guide-17' hex='#19486A' title='guide 17' />
  </ColorSwatchGrid>
);

export const Recycling = () => (
  <>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='recycling-yellow-700'
        hex='#C18F18'
        title='yellow 700'
      />
      <ColorSwatch
        colorName='recycling-yellow-600'
        hex='#D9A118'
        title='yellow 600'
      />
      <ColorSwatch
        colorName='recycling-yellow-500'
        hex='#F1B316'
        title='yellow 500'
      />
      <ColorSwatch
        colorName='recycling-yellow-400'
        hex='#F4C140'
        title='yellow 400'
      />
      <ColorSwatch
        colorName='recycling-yellow-300'
        hex='#F6CC63'
        title='yellow 300'
      />
      <ColorSwatch
        colorName='recycling-yellow-200'
        hex='#FAE1A5'
        title='yellow 200'
      />
      <ColorSwatch
        colorName='recycling-yellow-100'
        hex='#FDF6E5'
        title='yellow 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='recycling-green-700'
        hex='#67921B'
        title='green 700'
      />
      <ColorSwatch
        colorName='recycling-green-600'
        hex='#74A41F'
        title='green 600'
      />
      <ColorSwatch
        colorName='recycling-green-500'
        hex='#81B622'
        title='green 500'
      />
      <ColorSwatch
        colorName='recycling-green-400'
        hex='#98C34A'
        title='green 400'
      />
      <ColorSwatch
        colorName='recycling-green-300'
        hex='#ABCE6B'
        title='green 300'
      />
      <ColorSwatch
        colorName='recycling-green-200'
        hex='#CEE3A9'
        title='green 200'
      />
      <ColorSwatch
        colorName='recycling-green-100'
        hex='#F1F7E6'
        title='green 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='recycling-blue-700'
        hex='#0B6BAA'
        title='blue 700'
      />
      <ColorSwatch
        colorName='recycling-blue-600'
        hex='#0D79BF'
        title='blue 600'
      />
      <ColorSwatch
        colorName='recycling-blue-500'
        hex='#0E86D4'
        title='blue 500'
      />
      <ColorSwatch
        colorName='recycling-blue-400'
        hex='#399CDC'
        title='blue 400'
      />
      <ColorSwatch
        colorName='recycling-blue-300'
        hex='#5DAEE2'
        title='blue 300'
      />
      <ColorSwatch
        colorName='recycling-blue-200'
        hex='#A1D0EE'
        title='blue 200'
      />
      <ColorSwatch
        colorName='recycling-blue-100'
        hex='#E4F1FA'
        title='blue 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='recycling-brown-700'
        hex='#5D4D50'
        title='brown 700'
      />
      <ColorSwatch
        colorName='recycling-brown-600'
        hex='#68565A'
        title='brown 600'
      />
      <ColorSwatch
        colorName='recycling-brown-500'
        hex='#746064'
        title='brown 500'
      />
      <ColorSwatch
        colorName='recycling-brown-400'
        hex='#8D7D80'
        title='brown 400'
      />
      <ColorSwatch
        colorName='recycling-brown-300'
        hex='#A29497'
        title='brown 300'
      />
      <ColorSwatch
        colorName='recycling-brown-200'
        hex='#C9C1C3'
        title='brown 200'
      />
      <ColorSwatch
        colorName='recycling-brown-100'
        hex='#EFEDED'
        title='brown 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='recycling-shady-700'
        hex='#838286'
        title='shady 700'
      />
      <ColorSwatch
        colorName='recycling-shady-600'
        hex='#949297'
        title='shady 600'
      />
      <ColorSwatch
        colorName='recycling-shady-500'
        hex='#A4A2A8'
        title='shady 500'
      />
      <ColorSwatch
        colorName='recycling-shady-400'
        hex='#B4B3B8'
        title='shady 400'
      />
      <ColorSwatch
        colorName='recycling-shady-300'
        hex='#C2C1C5'
        title='shady 300'
      />
      <ColorSwatch
        colorName='recycling-shady-200'
        hex='#DCDBDD'
        title='shady 200'
      />
      <ColorSwatch
        colorName='recycling-shady-100'
        hex='#F5F4F5'
        title='shady 100'
      />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch
        colorName='recycling-grey-700'
        hex='#323136'
        title='grey 700'
      />
      <ColorSwatch
        colorName='recycling-grey-600'
        hex='#39373D'
        title='grey 600'
      />
      <ColorSwatch
        colorName='recycling-grey-500'
        hex='#3F3D44'
        title='grey 500'
      />
      <ColorSwatch
        colorName='recycling-grey-400'
        hex='#626066'
        title='grey 400'
      />
      <ColorSwatch
        colorName='recycling-grey-300'
        hex='#7E7D82'
        title='grey 300'
      />
      <ColorSwatch
        colorName='recycling-grey-200'
        hex='#B4B4B6'
        title='grey 200'
      />
      <ColorSwatch
        colorName='recycling-grey-100'
        hex='#E9E9EA'
        title='grey 100'
      />
    </ColorSwatchGrid>
  </>
);
