var http = require('http');
var asciimo = require('asciimo').Figlet;

http.createServer(function(req, res) {
    if (req.url === '/boogoofoo' && req.method === 'POST') {
        console.log('Deployment!');
        setTimeout(function() {
            process.exit(1);
        }, 1000);
        return res.end('OK');
    }

    console.log('request!', req.url);
    return asciimo.write('Damn!', 'Banner', function(art) {
        return res.end(art);
    });
}).listen(process.env.port || 5000);

console.log('server started on port', process.env.port || 5000);
