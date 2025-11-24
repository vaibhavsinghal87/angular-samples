const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const sharedLibs = require('../../config/webpack/vendor-shared.config');

const mfConfig = withModuleFederationPlugin({
  name: 'DigitalShell',
  exposes: {
    './DigitalApp':
      './digital/digital-shell/src/app/app.ts',
    './routes':
      './digital/digital-shell/src/app/app.routes.ts',
  },
  shared: share(sharedLibs),
});

module.exports = {
  ...mfConfig,
};
