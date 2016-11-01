var http = require('http');
var fs = require('fs');

var colors = require('colors');
//estableciendo tema de colores

colors.setTheme({
    'data': 'cyan',
    'info': 'rainbow',
    'error': 'red'
});

var server = http.createServer(function (req, res) {
    fs.readFile('./static/index.html', 'utf8',
        function (err, content) {

            if (err) {//hubo error
                res.writeHead(500,{
                    'Content-Type':"text/html"

                });
                console.log('>error en la lectura de'.error +
                'un archivo: ln20 server.js'.error);

                res.end("<h1>Error Interno</h1>")

            } else {//no hubo error
                res.writeHead(200, {
                    'Content-Type':'text/html'
                });
                console.log('>sirviendo index.html');
                res.end(content);
            }
        });
});

server.listen(3000, '127.0.0.1', function () {
    console.log('>server corriendo en http://127.0.0.1:3000...'.info);
});