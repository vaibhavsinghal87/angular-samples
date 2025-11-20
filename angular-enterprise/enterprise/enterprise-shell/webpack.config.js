const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const sharedLibs = require('../../vendor-shared.config');

const mfConfig = withModuleFederationPlugin({
  shared: share(sharedLibs),
});

module.exports = {
  ...mfConfig,
  optimization: {
    splitChunks: {
      cacheGroups: {
        angularCore: {
          test: /[\\/]node_modules[\\/]@angular[\\/](core|common|compiler|platform-browser)/,
          name: 'angular-core',
          chunks: 'all',
        },
        angularMaterial: {
          test: /[\\/]node_modules[\\/]@angular[\\/]material[\\/]/,
          name: 'angular-material',
          chunks: 'all',
        },
        angularCdk: {
          test: /[\\/]node_modules[\\/]@angular[\\/]cdk[\\/]/,
          name: 'angular-cdk',
          chunks: 'all',
        },
        angularForms: {
          test: /[\\/]node_modules[\\/]@angular[\\/]forms[\\/]/,
          name: 'angular-forms',
          chunks: 'all',
        },
        angularRouter: {
          test: /[\\/]node_modules[\\/]@angular[\\/]router[\\/]/,
          name: 'angular-router',
          chunks: 'all',
        },
        rxjs: {
          test: /[\\/]node_modules[\\/]rxjs[\\/]/,
          name: 'rxjs',
          chunks: 'all',
        },
      },
    },
  },
};
