const http = require('http');
const fs = require('fs');

let hostName = '127.0.0.1';
let port = 3000;

// create a server
let server = http.createServer((request,response) => {
    // set properties -> success / data
    response.statusCode = 200; // success
    response.setHeader('Content-Type','text/html');
    fs.readFile('data.txt','utf8',(err,data)=>{
        if(err) throw  err;
        response.end(`<h2 style='color:red;'>${data}</h2>`);
    });
});

// listen to port
server.listen(port,hostName,()=> {
    console.log(`Server started at http://${hostName}:${port}`);
});
