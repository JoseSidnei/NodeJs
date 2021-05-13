const http = require('http');
const fs = require('fs');


const hostname = "127.0.0.1";
const port = 3000;

//criar novo arquivo
/*
fs.writeFile('danki.txt','teste danki code',function(err){
    if(err) throw err;
    console.log('o arquivo foi criado com sucesso!');
})
*/

//cria novo arquivo ou insere o contaúdo depois do que ja existe

fs.appendFile('danki.txt',"\nOutro conteúdo",(err)=>{
    if(err) throw err;
    console.log('Salvo novamente com sucesso!');
})

const server = http.createServer((req,res)=>{

    if(req.url == '/danki'){
        
    fs.readFile('index.html',function(err,data){

        fs.appendFile('danki.txt',"\nOutro conteúdo",(err)=>{
            if(err) throw err;
            console.log('Salvo novamente com sucesso!');
        })
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })

    }else{
        //return res.end();
    }




})

server.listen(port,hostname,()=>{
    console.log("Servidor está rodando!");
})


