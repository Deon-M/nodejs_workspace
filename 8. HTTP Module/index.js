import http from "http";

const server = http.createServer((res, req) => {

  req.writeHead(200, "STATUS OK BABY", { "Content-Type": "text/html" });
  req.write("<h1>SERVER CREATED</h1>");
});

server.listen(8000);
