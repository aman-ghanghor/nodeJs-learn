// HTTP Module - Creating Web Server

import http from "http" ;


// Example - 1
/*
const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/plain")
    res.end("This is response from server")
})

const PORT = 8000 ;
const host = "localhost" ;

server.listen(PORT, host, ()=>{
   console.log("Server running on http://localhost:8000") ;
}) ;
*/



// Example - 2
const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/plain")
    res.end("This is response from server")
})

const PORT = process.env.PORT || 8000 ;
const host = "localhost" ;

server.listen(PORT, host, ()=>{
   console.log("Server running on http://localhost:8000") ;
}) ;








