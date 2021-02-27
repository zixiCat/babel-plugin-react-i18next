// module.exports = function override(config, env) {
//   config.module.rules.push({
//     test: /\.(tsx|jsx)$/,
//     exclude: /(node_modules|bower_components)/,
//     use: {
//       loader: 'babel-loader',
//       options: {
//         presets: [
//           '@babel/preset-env',
//           '@babel/preset-react',
//           '@babel/preset-typescript',
//         ],
//         plugins: [
//           './test.js',
//           [
//             './babel-plugin-react-i18next.js',
//             {
//               JSXText: false,
//             },
//           ],
//         ],
//       },
//     },
//   });
//   return config;
// };

const { override, addBabelPlugins } = require('customize-cra');

const { getBabelLoader } = require('customize-cra');
const path = require('path');

// disable babel-loader cache
const disableBabelCache = () => (config) => {
  getBabelLoader(config).options.cacheDirectory = false;
  return config;
};

module.exports = {
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'demo/index.tsx');
    paths.appSrc = path.resolve(__dirname, 'demo');
    return paths;
  },
  webpack: override(disableBabelCache(), ...addBabelPlugins('./src/index.ts')),
};
