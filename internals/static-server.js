
exports.serve= function(url , res){
var fs = require('fs');
var mime = require('mime');




    var filePath='./static'+ url;
    console.log(`>Se servira Archivo: ${filePath}`.data);
    //seleccionar el tipo mime
    var mimeType = mime.lookup(filePath);
    fs.readFile(filePath,
        function (err, content) {

            if (err) {//hubo error
                res.writeHead(500, {
                    'Content-Type': "text/html"

                });
                console.log('>error en la lectura de'.error +
                    'un archivo: ln20 server.js'.error);

                res.end("<h1>Error Interno</h1>")

            } else {//no hubo error
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                console.log(`>sirviendo: ${filePath}`.data );
                res.end(content);
            }
        });
    
};