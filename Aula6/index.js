import express from "express"
const app = express() 

app.listen(8081, function(){
    console.log("Servidor rodando na URL http://localhost:8081")
})