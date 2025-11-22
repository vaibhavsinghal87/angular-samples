const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const sharedLibs = require('../../config/webpack/vendor-shared.config');
const splitChunksConfig = require('../../config/webpack/split-chunk.config');

const mfConfig = withModuleFederationPlugin({
  shared: share(sharedLibs),
});

module.exports = {
  ...mfConfig,
  ...splitChunksConfig,
};
