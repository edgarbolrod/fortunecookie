// Cargando el paquete mongodb
var mongodb = require("mongodb");
// Extrayendo el cliente que 
// trae el paquete mongodb
var client = mongodb.MongoClient;

// 1. ¿A donde me voy a conectar?
// R. url de conexion, 'string de conexion'
var url = 'mongodb://localhost:27017/learnyoumongo';

// Conectando al cliente
client.connect(url,function(err, db){
    // Verificar si hubo un error
    if(err){
        console.log("> Error en la conexion");
        throw err;
    }
    // Extrayedo la coleccion de trabajo
    var collection = db.collection("parrots");
    // Rescatando el primer argumento
    var firstArg = process.argv[2];
    // Aplicando una operacion sobre
    // la coleccion de trabajo
    collection.find({
        age : { $gt : +firstArg}
    }).toArray(function(err, documents){
        // Transformando la consulta en
        // un arreglo
        if(err){
            console.log("> Error al convertir la consulta a un arreglo");
            throw err;
        }
        console.log(documents);
        db.close();
    });
});