var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url ='mongodb://localhost:27017/fortuneapp';
module.exports= {
    "getFortune" : function(cb){

client.connect(url,function(err, db){

    if(err){
        console.log("> Error en la conexion");
        throw err;
    }
        console.log("prueba");

    var mensajes = db.collection("fortunepapers");

   var resultado = mensajes.find({
        
    })
    resultado.toArray(function(documentos){
    
        var selector = Math.floor(Math.random() * (max - min )+ min);
        
        //construyo un objeto respuesta
        var fortuneMessage = documentos[selector];
        var fortunePaperObject = JSON.stringify({
            fortuneMessage
        });
        db.close();
        cb(fortunePaperObject);
});
    
});
        }
    };