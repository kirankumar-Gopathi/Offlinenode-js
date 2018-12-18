const http = require('http');
const fs = require('fs');

let hostName = '127.0.0.1';
let port = 3000;

// Create a Server
let server = http.createServer((request,response) => {
    // set properties -> success / data
    response.statusCode = 200; // success
    response.setHeader('Content-Type','text/html');
    // create stream for html file
    let readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(response);
});

server.listen(port,hostName,()=> {
    console.log(`Server started at http://${hostName}:${port}`);
});
