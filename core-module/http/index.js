const http = require('http');

const handleServer = function(req, resp){
    resp.writeHead(200, {'Content-type': 'text/html'});
    resp.write('<h1>Hello World Nodejs</h1>');
    resp.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000');
});