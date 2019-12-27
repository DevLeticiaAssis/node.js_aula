//vou utilizar uma biblioteca express. só baixou qdo colocamos 'npm install express'
const express = require('express')

//me dá o conteudo da biblioteca pesquisada
const app = express();

//qdo vc colocar no endereço / ele vai chamar isso aqui, vai entrar dentro dessa função - por causa do get
//req = requisição res = response - entregar 
app.get('/',function(req,res){
    res.end('Hello world!');
});

//req.params.nome - se eu colocar leticia, vai aparecer leticia
app.get('/:nome',function(req,res){
    res.end('Olá'+req.params.nome);
});

//escute a porta 3000, '127.0.0.1' é o local host, especifica a porta q seu programa vai escutar para fazer uma resposta. http - padrão é 80 - padrao: :porta
app.listen(3000, '127.0.0.1', function(){
    console.log('Servidor rodando em http://'+'127.0.0.1'+'3000/');
});

