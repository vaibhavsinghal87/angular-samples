const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const sharedLibs = require('../../vendor-shared.config');

const mfConfig = withModuleFederationPlugin({
  name: 'DigitalShell',
  exposes: {
    './DigitalApp': './digital/digital-shell/src/app/app.ts',
  },
  shared: share(sharedLibs),
});

module.exports = {
 ...mfConfig
};
