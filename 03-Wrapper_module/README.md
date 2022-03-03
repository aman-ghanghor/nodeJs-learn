
# Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:


(function(exports, require, module, __filename, __dirname) {
    // our Module code actually lives in here
}) ;


By doing this, Node.js achieves a few things:

* It keeps top-level variable (defined with var, const or let) scoped to the module rather than the global object.


============ Note  =============

:: exports => A reference to the module.exports that is shorter to type.

:: require => Used to import modules

:: module => A reference to the current module.

:: __dirname => The directory name of the current module. This is the same as the path.dirname() of the __filename.
     Example :- console.log(__dirname) ;

:: __filename => The file name of the current module. This is the current module file's absolute path with symlinks resolved.
     Example :- console.log(__filename) ;
