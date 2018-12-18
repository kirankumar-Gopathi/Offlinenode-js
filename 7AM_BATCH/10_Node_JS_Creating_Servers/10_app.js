const http = require('http');

let hostName = '127.0.0.1';
let port = 3000;

// Create a Server
let server = http.createServer((request,response) => {
    // set properties -> success / data
    response.statusCode = 200; // success
    response.setHeader('Content-Type','text/html');
    response.end(`<h1 style="color: red">Hello From Node JS Server</h1>`);
});

server.listen(port,hostName,()=> {
    console.log(`Server started at http://${hostName}:${port}`);
});
