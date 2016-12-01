var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

module.exports = {
    "getFortune": function (cb) {
        
        mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapp",
        function(err, db){
             if(err){
        console.log("> Error en la conexion");
        throw err;
    }
            var papers = db.collection("fortunepapers");

            papers.find({}).toArray(function(err, documents){
                 if(err){
        console.log("> Error en al generar el arreglo");
        throw err;
    }

                var selector = Math.round(Math.random(0)* documents.length);
                console.log("El numero de tu fortuna es: " + selector);
                
                var fortunePaperObj = JSON.stringify(documents[selector]);
               
                db.close();
               
                cb(fortunePaperObj);
            });
        });
    }
};

