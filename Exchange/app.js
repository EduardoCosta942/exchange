var app = require('express')(); //Faz o require da biblioteca express
var http = require(http).Server(app); //Passa o express para o servidor http
var io = require('socket.io')(http); //Passa o http para o socket.io

//Abaixo cria uma rota para encontrar o chat.html e mandar o texto
app.get('/', function(req, res){
    res.sendFile(__dirname + '/chat.html');
});

//Abaixo sempre que usa o socket.io vai devoltar o broadcast dela
io.on("connection", function(socket){
    socket.on("chat message", function(msg){
       io.emit("chat message", msg); 
    });
});

//Inicia o servidor na porta informada (no caso é 9494);

http.listen(9494, function(){
    console.log("O servidor esta na porta 9494.");
    console.log("http://localhost:9494")
});