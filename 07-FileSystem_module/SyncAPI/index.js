// File System - Sync API

import * as fs from "fs" ;

fs.appendFileSync("./test/how.txt", "New appended data", (error)=>{
    if(error){
       console.log(error) ;
    }
    else{
       console.log("appended successfully") ;
    }
})

