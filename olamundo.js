var http = require('http');

http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); 
  res.end('<h2>Olá mundo!</h2>');
}).listen(3000);

console.log('Servidor iniciado em localhost:3000.');
console.log('Abra um novo terminal e digite: curl http://0.0.0.0:3000/');
console.log('Ctrl+C para encerrar…');

//curl http://0.0.0.0:3000/
