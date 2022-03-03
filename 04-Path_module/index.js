// path module

const { normalize } = require('path');
const path = require('path') ;


// console.log(__filename);  // as our code is wrapped in wrapper function

// console.log(path.basename(__filename)) ;  // index.js

// console.log(path.dirname(__filename)) ;   //

// console.log(path.extname(__filename)) ;   // .js

// console.log(path.join("search/", "label", "course/python", "oop")) ;  // output path depends upon the environment in e.g. in Window OS return path separation is (\) backward slashes

// console.log(path.normalize("c:\\\\user\\foo\\poo\\bar\\..\\")) ;

// console.log(path.win32.normalize("c:////user\\foo\\/\\poo\\bar")) ;

// console.log(path.parse(__filename)) ;
// console.log(path.parse(__filename).name) ;
// console.log(path.parse(__filename).base) ;

// console.log(path.isAbsolute("home\\user\\john\\..")) ;
// console.log(path.isAbsolute("c:\\foo\\..")) ;
// console.log(path.isAbsolute("\\foo\\bar")) ;
// console.log(path.isAbsolute("poo\\bar")) ;

