create table usuarios (
    nome varchar(50),
    email varchar(100),
    idade int
);

insert into usuarios(nome, email, idade) values (
  "Maria Clara", "email@teste3.com", 8
  

);

 delete from usuarios where nome = "Henrique Ribeiro";

 update usuarios set nome = "Carlos" where nome = "Lucas";