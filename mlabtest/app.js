var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

var connectionUrl = 'mongodb://ebolanos:E.bolanos505467@ds119588.mlab.com:19588/fortuneapp';
        
        mongoClient.connect(connectionUrl, function(err, db){
             if(err){
        console.log("> Error en la conexion con la BD...");
        throw err;
    }
            var papers = db.collection("fortunepapers");
            var mensaje ="";
            
            for (var i= 2 ; i<process.argv.length; i++){
                mensaje+= (process.argv[i] + "");
            }
            
            console.log(`>mensaje rescatado : ${mensaje}`);
            
            papers.insert({
                "mensaje" : mensaje
            },function(err, res){
                    if(err){
                        console.log("no se puso insertar");
                        db.close();
                        throw err;
                    }
                        console.log(`error en la insercion: ${JSON.stringify(res)}` );
                        db.close();
                    });
            });

