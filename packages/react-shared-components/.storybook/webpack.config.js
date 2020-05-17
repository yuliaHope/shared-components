const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.symlinks = true;
  config.resolve.modules = ['../node_modules'];
  const docgenPlugin = [
    require.resolve('babel-plugin-react-docgen'),
    {
      DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
    },
  ];

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: [/node_modules/],
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: [
            docgenPlugin,
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
            '@babel/plugin-transform-react-jsx',
          ],
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.(scss|sass)$/,
    exclude: /\.module\.(scss|sass)$/,
    use: [
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.join(__dirname, '../src/assets/sass_resources.scss'),
        },
      },
    ],
  });

  config.resolve.extensions.push('.js', '.jsx');
  return config;
};
