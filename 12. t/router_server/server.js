const http = require('http');
const fs = require('fs');

function serveFile(path, contentType, res) {
  fs.readFile(path, (err, data) => {
    if (err) {
        res.writtenHead(500, {'Content-Type': 'text/plain'})
        return res.end('Error faili laadimisega')
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data);
  }  
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        serveFile('index.html', 'text/html', res);
    } else if (req.url === '/about') {
        serveFile('about.html', 'text/html', res);
    } else if (req.url.match('.css$'))
}