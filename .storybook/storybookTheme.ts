// Create custom theme
// https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming/create';

const storybookTheme = create({
  base: 'light',
  brandTitle: 'Moogli UI',
  brandUrl: '',
});

export default storybookTheme;
