
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url ='mongodb://ebolanos:E.bolanos505467@ds119588.mlab.com:19588/fortuneapp';
module.exports= {
    "getFortune" : function(cb){

client.connect(url,function(err, db){

    if(err){
        console.log("> Error en la conexion");
        throw err;
    }
        

    var mensajes = db.collection("fortunepapers");

   mensajes.find({
        
    }).toArray(function(err, documentos){
    
        var selector = Math.floor(Math.random(0) * documentos.length);
       console.log("El numero de tu fortuna es: " + selector);
                
                var fortunePaperObj = JSON.stringify(documentos[selector]);
               
                db.close();
               
                cb(fortunePaperObj);
});
    
});
        }
    };