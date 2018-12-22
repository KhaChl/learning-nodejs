const express = require('express');

const server = express();

server.get('/', function(req, resp){
    resp.send('<h1>Hello World Express and Nodejs</h1>');
    resp.end();
});

server.listen(3000, function(){
    console.log('Server on port 3000');
});