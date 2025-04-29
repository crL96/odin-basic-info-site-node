import http from "node:http";
import fs from "node:fs";
import url from "node:url";

const server = http.createServer((req, res) => {
    
    const query = url.parse(req.url, true);
    let filename = "./index.html";

    switch (query.pathname) {
        case "/":
            filename = "./index.html";
            break;
        case "/about":
            filename = "./about.html";
            break;
        case "/contact-me":
            filename = "./contact-me.html";
            break;
        default:
            filename = "./404.html"
            break; 
    }
    
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
