// File System - [Callback or Async API]

import * as fs from "fs";

// Create Directory - Path should be there
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\CallbackAPI\\test";
const newFolder = "\\demo";
const dir = path + newFolder;
fs.mkdir(dir, (error) => {
  if (error) {
    throw error ;
  }
  console.log("Directory Created...");
});
*/




// Create Direcotry - {path} is not required to be there
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\CallbackAPI";
const newFolder = "\\setup\\components";
const dir = path + newFolder;
fs.mkdir(dir, {recursive: true}, (error) => {
  if (error) {
    throw error ;
  }
  console.log("Directory Created...");
});
*/




// Reading Content of Direcotry [files and folder]
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\CallbackAPI\\test";
fs.readdir(path, (error, readData)=>{
  if(error) {
    throw error ;
  }
  console.log("Reading directory...") ;
  console.log(readData) ;
})
*/




// Remove Directory - Direcory should be empty
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\CallbackAPI\\test\\two";
fs.rmdir(path, (error)=> {
   if(error) {
     throw error ;
   }
   console.log("Directory Removed") ;
})
*/




// Create and Write File 
/*
const filedata = JSON.stringify([
  {
    id: 38239,
    name: "John",
    email: "john292@gmail.com",
    age: 23,
    city: "Delhi",
  },
  {
    id: 92872,
    name: "Mosh",
    email: "mosh123@gmail.com",
    age: 60,
    city: "Mumbai",
  }
])
fs.writeFile("test\\one\\people.json", filedata, (error)=> {
   if(error) {
      throw error ;
   }
   console.log("File created...");
})
// Note - if file already exists then it overwrite it with new data as provided in second parameter
*/




// Read File - {by default it read as buffer}
/*
fs.readFile("test\\how.txt", (error, readData) => {
   if(error) {
     throw error ;
   }
   console.log(readData) ;
})
// Read File - {as utf-8} 
fs.readFile("test\\how.txt", "utf-8", (error, readData) => {
   if(error) {
     throw error ;
   }
   console.log("Reading file...")
   console.log(readData) ;
})
*/




// Append Data into File
/*
fs.appendFile("test\\how.txt", "This is new Appended Content", (error)=> {
   if(error) {
     throw error ;
   }
   console.log("Data Appended...") ;
})
*/




// File Copy
/*
fs.copyFile("test\\how.txt", "test\\love\\howToLove.txt", (error)=>{
   if(error) {
     throw error ;
   }
   console.log("File Copied...") ;
})
*/




// File Information
fs.stat("test\\how.txt", (error, stats)=>{
   if(error) {
     throw error ;
   }
   console.log(stats.isDirectory()) ;
   console.log(stats.isFile()) ;
   console.log(stats)
})




