module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(tsx|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          './test.js',
          [
            './babel-plugin-react-i18next.js',
            {
              JSXText: false,
            },
          ],
        ],
      },
    },
  });
  return config;
};
