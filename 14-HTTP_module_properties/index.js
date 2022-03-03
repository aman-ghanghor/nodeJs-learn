// HTTP module - properties

import http from "http" ;



const server = http.createServer(  (req, res) =>{ 
   // Request
   console.log(req.url);
   console.log(req.method);

   // Response
   /*
   res.statusCode = 202;
   res.statusMessage = "good";
   res.setHeader("Content-Type", "text/plain");
   */
   res.writeHead("202", "good", {"Content-Type": "text/plain"});

   res.end("wow!!! Response from server 1");

}) ;

server.listen("8000", "localhost", ()=>{
    console.log("Server running on http://localhost:8000") ;
})