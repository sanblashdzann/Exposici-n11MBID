const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Esta es una exposición sobre balanceo de carga y escalado automático en AWS');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
