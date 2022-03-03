// you are having access to these variable e.g. module, __filename, __dirname etc. as our code 
// is inside the wrapper function 
console.log("Hello world");
console.log(module)
console.log(__filename) ;
console.log(__dirname) ;



// behind the scene, Module wrapper will wrap the code into the wrapper function as shown below:-
/*

  (function(exports, require, module, __filename, __dirname) {
    console.log("hello world");
    console.log(module);
    console.log(__filename);
    console.log(__dirname);
  }) ;

*/
