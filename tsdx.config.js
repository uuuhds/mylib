const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const theme = require('./theme.json');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: true,
        minimize: true,
        modules: false,
        use: {
          sass: null,
          stylus: null,
          less: {
            javascriptEnabled: true,
            modifyVars: theme,
          },
        },
        // extract: 'css/index.css'
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
