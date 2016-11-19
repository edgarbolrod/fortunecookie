var fortunes =["en todo tiempo ama el amigo" ,
"arbol que nace torcido jamas se endereza" ,
"edgar isidro bolaños",
"mariana zayas jimenez",
"bbbbbb"
];
module.exports= {
    "getFortune" : function(cb){
        function getIntRandomNumber(min, max){
            return Math.floor(Math.random() * (max - min )+ min);
        }
        //construyo un objeto respuesta
        var selector = getIntRandomNumber(0, fortunes.length - 1);
        var fortuneMessage = fortunes[selector];
        var fortunePaperObject = {
            "paper" : fortuneMessage
        };
        cb(JSON.stringify(fortunePaperObject));
    }
};