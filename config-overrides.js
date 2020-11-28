const { override, useBabelRc } = require('customize-cra');

module.exports = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  webpack: override(useBabelRc()),
};
