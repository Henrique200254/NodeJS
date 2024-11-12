// Criei o arquivo JSOn assim como na outra aula só que para o HTTP.

import http from "http"

http.createServer(function(req,res){
    res.end('oiii!')
}).listen(8081)

console.log('O servidor rodou')