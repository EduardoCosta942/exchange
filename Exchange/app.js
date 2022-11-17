var app = require('http').createServer(9494)
app.listen(9494);
console.log(`O projeto esta em execução com sucesso!`)
function resposta (req, res) {
    res.writeHead(200);
    res.end("Ola, o servidor esta funcionando corretamente.");
}