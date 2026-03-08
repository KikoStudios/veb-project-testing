import http from 'node:http';

const port = Number(process.argv[2] || process.env.PORT || 4010);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({
    app: 'veb-project-testing',
    status: 'ok',
    url: req.url,
    port,
    now: new Date().toISOString()
  }));
});

server.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
});