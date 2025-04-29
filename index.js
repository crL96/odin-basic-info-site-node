import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
    
    const filename = "./index.html"
    
    fs.readFile(filename, (error, data) => {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write(data);
        res.end()
    });

}).listen(8080);
