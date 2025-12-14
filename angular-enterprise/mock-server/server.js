const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

const API_BASE = '/api/v1';

// Add custom routes before JSON Server router
server.post(`${API_BASE}/platform/config`, (req, res) => {
  res.jsonp(require('./jsons/configurations.json'));
});

server.get(`${API_BASE}/digital/summary`, (req, res) => {
  res.jsonp(require('./jsons/summary.json'));
});

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// Add custom middleware before JSON Server router
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

// Start server
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
