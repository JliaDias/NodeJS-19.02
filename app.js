//Conexão com servidor web.
var http = require('http')

http.createServer(function(req,res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor está ativo!!")

/* aula referente ao dia 19.02

//Exibir mensagem no terminal.
console.log("Teste!!")

//Operações matemáticas
var n1 = 10
var n2 = 5 

var total = n1 + n2

console.log("O resultado é igual a: "+total)

//condicional
var n3 = 10
var n4 = 10 

console.log("Total: ")

if(total <= 10){
    console.log("O total é menor ou igual a 10")
}else{
    console.log("O total é maior que 10")
}


//Funções
var soma = require('./soma.js')

console.log("Total: "+ soma(10,10))
*/


