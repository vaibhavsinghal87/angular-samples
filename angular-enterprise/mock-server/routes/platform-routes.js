const API_BASE = '/api/v1';

module.exports = server => {
  server.post(`${API_BASE}/platform/config`, (req, res) => {
    res.jsonp(require('./jsons/configurations.json'));
  });
};
