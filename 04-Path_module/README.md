
The path module provides utilities for working with file and directory paths. It can be accessed using: 

==> const path = require('path') ; 

important function of path module :



* basename() __ This method returns the last portion of a path, similar to Unix basename command. 
                Trailing directory separators are ignored.

                Syntax : basename(path [,ext]) ;

                Example: basename('/test/something.html', '.html') ;
                
===================================================================================================

* dirname() __  This method returns the directory name of a path, similar to Unix dirname command.

                Syntax : dirname(path) ;

                Example: dirname('/test/something.html') ;