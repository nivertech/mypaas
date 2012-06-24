var http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/boogoofoo' && req.method === 'POST') {
        console.log('Deployment!');
        setTimeout(function() {
            process.exit(1);
        }, 1000);
        return res.end('OK');
    }

    console.log('request!', req.url);
    res.end('hello, node!\n');
}).listen(process.env.port || 5000);

console.log('server started on port', process.env.port || 5000);
