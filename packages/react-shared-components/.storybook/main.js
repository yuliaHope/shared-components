module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        scriptsPackageName: 'react-scripts',
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
  ],
};
