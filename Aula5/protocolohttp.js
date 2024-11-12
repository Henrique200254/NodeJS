// Criei o arquivo JSOn assim como na outra aula só que para o HTTP.
// Não precisamos exportar nada já que estamos usando o http nativo do Node. Apenas importamos o http do http
//Pegamos essa variavel e usamos o metodo .createServer e nele criamos uma função para ser executada nesse servidor. passamos os parametros req, que eu acho que é de requisição e res de resposta. Dentro da função colocamos res.end, devolvendo "oiii"

import http from "http"

http.createServer(function(req,res){
    res.end('ola')
}).listen(8081)

console.log('O servidor rodou') 


