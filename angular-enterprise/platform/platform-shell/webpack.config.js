const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const sharedLibs = require('../../vendor-shared.config');

const mfConfig = withModuleFederationPlugin({
  name: 'PlatformShell',
  exposes: {
    './PlatformApp': './platform/platform-shell/src/app/app.ts',
  },
  shared: share(sharedLibs),
});

module.exports = {
 ...mfConfig
};
