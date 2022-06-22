const theme = require('../theme.json');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
  ],
  typescript: {
    check: true,
  },
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: false,
            importLoaders: 1,
          },
        },
        {
          loader: require.resolve('less-loader'),
          options: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      ],
    });
    return config;
  },
};
