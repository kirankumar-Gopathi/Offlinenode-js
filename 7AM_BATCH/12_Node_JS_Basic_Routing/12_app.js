const http = require('http');
const fs = require('fs');

let hostName = '127.0.0.1';
let port = 3000;

// Create a Server
let server = http.createServer((request,response) => {
    let theURL = request.url;
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    if(theURL === '/'){
        // create stream for html file
        let readStream = fs.createReadStream(__dirname + '/index.html');
        readStream.pipe(response);
    }
    else if(theURL === '/about'){
        // create stream for html file
        let readStream = fs.createReadStream(__dirname + '/about.html');
        readStream.pipe(response);
    }
    else if(theURL === '/contact'){
        // create stream for html file
        let readStream = fs.createReadStream(__dirname + '/contact.html');
        readStream.pipe(response);
    }
    else{
        response.end(`<h1 style="color: red;font-size: 40px">404! Page Not Found</h1>`);
    }
});

server.listen(port,hostName,()=> {
    console.log(`Server started at http://${hostName}:${port}`);
});
