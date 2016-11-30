function saludar() {
    swal("hola chaka...");
}

function getFortuneFromServer(){
    //realizando una peticion get asincrona con aja asistida con jquery
    $.get("./getacookie","",function(cookie, status){
        //contenido del callback
        console.log('>status: ' + status);
        //presentando el mensaje
        swal(cookie.paper);
    },'json');
}