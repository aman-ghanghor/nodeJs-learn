// =========== File System - Promise API ===========

//const fs = require('fs/promises');
import * as fs from "fs/promises";



// Creating Directory - {path} should be there
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\PromiseAPI\\test";
const newFolder = "\\demo";
const newDir = path + newFolder;
try {
  await fs.mkdir(newDir);
  console.log("demo directory created...");
} 
catch (error) {
  console.log(error);
}
*/





// Creating Directory - {path} is not required to be there
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\PromiseAPI\\setup"  ;
const newFolder  = "\\components" ;
const newDir = path + newFolder ;
try{
   await fs.mkdir(newDir, {recursive: true}) ;
   console.log("\\setup\\components directory created...") ;
} 
catch(error) {
   console.log(error) ;
}
*/





// Reading Content [files and folders] of Directory
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\PromiseAPI\\test"  ;
try{
  const content = await fs.readdir(path) ;
  console.log(content) ; 
  for(const item of content) {
    console.log(item) ;
  }
}
catch(error) {
   console.log(error) ;
}
*/





// Remove Directory - Directory should be empty
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\PromiseAPI\\hello" ;
try{
  await fs.rmdir(path) ;
  console.log("directory removed") ;
}
catch(error) {
   console.log(error) ;
}
*/





// Create and Write File
/*
const path = "C:\\Users\\AmanGhanghoriya\\Desktop\\nodeJs-learn\\07-FileSystem_module\\PromiseAPI\\foo.txt" ;
try{
  await fs.writeFile(path, "I am foo File") ;
  console.log("File created")
} 
catch(error) {
  console.log(error) ;
}
*/





// Read File (buffer encoding)
/*
try{
  const data = await fs.readFile("test\\one\\good.txt") ;
  console.log("Reading File :")
  console.log(data) ;
} 
catch(error) {
  console.log(error) ;
}
*/





// Read File (utf-8)
/*
try {
  const data = await fs.readFile("test\\one\\good.txt", "utf-8");
  console.log("Reading File...");
  console.log(data);
} catch (error) {
  console.log(error);
}
*/





// Append Data into File
/*
try {
  await fs.appendFile("test\\one\\good.txt", "This is appended Data") ;
  console.log("Appended Data into File...");
} catch (error) {
  console.log(error);
}
*/





// Copy File
/*
try {
  await fs.copyFile("test\\one\\good.txt", "info.txt");  // copyFile(fileToCopyFrom, fileToPasteInto)
  console.log("File Copied...");
} catch (error) {
  console.log(error);
}
*/





// Get File Information
try {
  const stats = await fs.stat("test\\school.js");
  console.log("File Information...")
  console.log(stats.isDirectory()) ;
  console.log(stats.isFile()) ;
  console.log(stats) ;
} catch (error) {
  console.log(error) ;
}



