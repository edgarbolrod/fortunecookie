var http = require('http');
var fs = require('fs');
var mime = require('mime');
var colors = require('colors');
var staticServer = require ("./internals/static-server.js");

//iportando el puerto configurador
var config = require('./config/config');

//estableciendo tema de colores
colors.setTheme(config.colorTheme);
//Importando configuraciones
var IP =config.IP;
var PORT =config.PORT;

//codigo del serserver
var server = http.createServer(function (req, res) {
    var url=req.url;
    if(url === "/"){
        url= '/index.html'
    }

    //generar la ruta real del archivo solicitado
    


    console.log(`>Recurso solicitado >${url}`.data);
    staticServer.serve(url, res);

});

server.listen(PORT,IP, function () {
    console.log(`>server corriendo en http://${IP}:${PORT}...`.info);
});