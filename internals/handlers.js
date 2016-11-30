//Creando el handler
//getfortune

var fortune = require ("./fortune");
var _crackTheCookie = function(req,res){
   console.log("> Cookie crash requested...");
   fortune.getFortune(function(fortunePaperObj){
       //preparando para contestar jsaon
       res.writeHead(200,{
           'Content-Type' : "application/json"
       });
       //respondiendo con el objeto
       res.end(fortunePaperObj);
   });
   //res.end("El exito es la suma del trabajo mas diciplina");
};

var _getAuthor = function(req,res){
   console.log("> se solicito author");
   res.end("edgarmary");
};


// cdreando objeto manejador
var handlers = {};



//registrando manejadores en el objeto manejador
handlers["/getacookie"] = _crackTheCookie;
handlers["/getauthor"] = _getAuthor;


//Exportando objeto manejador
module.exports = handlers;
