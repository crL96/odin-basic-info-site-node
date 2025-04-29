import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
    
    const filename = "./inex.html"
    
    fs.readFile(filename, (error, data) => {
        if (error) {
            res.writeHead(404, { "Content-Type": "text/html" })
            return res.end("404 Not Found")
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end()
    });

}).listen(8080);
