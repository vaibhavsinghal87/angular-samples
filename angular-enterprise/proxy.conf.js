const domain = 'http://localhost:3000';

function getTargetPath() {
  return domain;
}

const PROXY_CONFIG = {
  '/api/v1/platform/**': {
    target: getTargetPath(),
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
  '/api/v1/digital/**': {
    target: getTargetPath(),
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
  '/digital/**': {
    target: 'http://localhost:4201',
    pathRewrite: { '^/digital': '' },
    secure: false,
  },
  '/platform/**': {
    target: 'http://localhost:4202',
    pathRewrite: { '^/platform': '' },
    secure: false,
  },
};

module.exports = PROXY_CONFIG;
