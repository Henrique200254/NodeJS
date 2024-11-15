import express from "express"
import path from "path"
const app = express() 
const __dirname = path.resolve()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog",function(req,res){
    res.send("Bem-vindo ao meu blog!")
})
// Passagem de parametros para o servidor sendo usado como variveis para exibir dados
app.get("/ola/:nome/:cargo",function(req,res){
    res.send("Ola "+ req.params.nome +"<br>"+ "Seu cargo é "+ req.params.cargo)
})

app.listen(8081, function(){
    console.log("Servidor rodando na URL http://localhost:8081")
})

