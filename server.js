var http = require('http');
var fs = require('fs');
var mime = require('mime');
var colors = require('colors');

var staticServer = require ("./internals/static-server.js");

//iportando el puerto configurador
var config = require('./config/config');
//importando manejadores
var handlers = require("./internals/handlers");

//estableciendo tema de colores
colors.setTheme(config.colorTheme);
//Importando configuraciones
var IP =config.IP;
var PORT =config.PORT;

//codigo del serserver
var server = http.createServer(function (req, res) {
    var url=req.url;
    console.log(`>Recurso solicitado >${url}`.data);
    if(url === "/"){
        url= '/index.html'
    }
    //verificando si la url esta asociada a una acion que puede hacer el server
    if(typeof(handlers[url]) === "function"){
        //si existe una funcion enn handler llamada como el contenido de la variable
        //url
        handlers[url](req, res);
    }else{
        //no se encontro un mannejadro para la url solicitada por el usuario
        //se intentara servir de manera estatica
    staticServer.serve(url, res);
    }

});

server.listen(PORT,IP, function () {
    console.log(`>server corriendo en http://${IP}:${PORT}...`.info);
});