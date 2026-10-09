const http = require('node:http');

function saludo(nombre = 'mundo') {
  return `Adios, ${nombre}!`;
}

function crearServidor() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(saludo(process.env.NOMBRE));
  });
}

module.exports = { saludo, crearServidor };