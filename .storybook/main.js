const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.{story,stories}.mdx',
    '../src/**/*.{story,stories}.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '~': path.resolve(__dirname, '../public/'),
          '@': path.resolve(__dirname, '../src/'),
        },
      },
    };
  },
};
