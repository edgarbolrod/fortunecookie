var http = require('http');
var fs = require('fs');
var mime = require('mime');
var colors = require('colors');

//iportando el puerto configurador
var config = require('./config/config');

//estableciendo tema de colores
colors.setTheme(config.colorTheme);
//Importando configuraciones
var IP =config.IP;
var PORT =config.PORT;

var server = http.createServer(function (req, res) {
    var url=req.url;
    if(url === "/"){
        url= '/index.html'
    }

    //generar la ruta real del archivo solicitado
    


    console.log(`>Recurso solicitado >${url}`.data);
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
});

server.listen(PORT,IP, function () {
    console.log(`>server corriendo en http://${IP}:${PORT}...`.info);
});