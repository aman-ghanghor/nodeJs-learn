// Nodemon Module - Creating web server

import http from "http" ;
import fs from "fs" ;

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html") ;
    fs.readFile("./public/home.html", (error, data)=>{
       if(error){
          throw error ;
       }
       res.end(data) ;
    })
})

server.listen("8000", "localhost", ()=>{
    console.log("Server running on http://localhost:8000") ;
})

