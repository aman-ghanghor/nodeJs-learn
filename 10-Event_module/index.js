// Event Module 

import EventEmitter from "events" ;

// Creating class
class MyEmitter extends EventEmitter { }

// Creating/Initialising object
const myEmitter = new MyEmitter() ;


// Register Event Listener
myEmitter.on("firstEvent", ()=>{
    console.log("First event occurred") ;
})
myEmitter.once("secondEvent", ()=>{
    console.log("Second event occurred")
})

// Trigger the event
myEmitter.emit("firstEvent") ;
myEmitter.emit("firstEvent") ;

console.log("---") ;

myEmitter.emit("secondEvent") ;
myEmitter.emit("secondEvent") ;