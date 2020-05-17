const path = require('path');
const glob = require('glob');

module.exports = async ({ config }) => {
  const docgenPlugin = [
    require.resolve('babel-plugin-react-docgen'),
    {
      DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
    },
  ];
  config.resolve.modules = ['../packages/react-shared-components/node_modules'];
  config.module.rules.push({
    test: /\.(js|jsx)?$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app']],
      plugins: [docgenPlugin, '@babel/plugin-transform-react-jsx'],
    },
  });
  config.resolve.extensions.push('.js', '.jsx');
  return config;
};
