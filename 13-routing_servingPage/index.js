// HTTP Module properties

import http from "http";
import fs from "fs";
import { url } from "inspector";

const server = http.createServer((req, res) => {
  // Request
  res.writeHead("200", "OK", { "Content-Type": "text/html"}) ;
  if (req.url === "/") {
    fs.readFile("./public/home.html", (error, data) => {
      if (error) {
        throw error;
      }
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (error, data) => {
      if (error) {
        throw error;
      }
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile("./public/contact.html", (error, data) => {
      if (error) {
        throw error;
      }
      res.end(data);
    });
  } else {
    res.end("<h1>404 Page not found</h1>");
  }
});

const PORT = process.env.PORT || 8000;
const host = "localhost";

server.listen(PORT, host, () => {
  console.log("Server running on http://localhost:8000");
});
