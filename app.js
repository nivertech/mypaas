var http = require('http');

http.createServer(function(req, res) {
    console.log('request!');
    res.end('hello, node!\n');
}).listen(process.env.port || 5000);

console.log('server started on port', process.env.port || 5000);
