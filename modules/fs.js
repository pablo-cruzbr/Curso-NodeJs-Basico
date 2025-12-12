const { error } = require('console');
const fs = require('fs')
const path = require('path');

//Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
    return    console.log('Erro:', error)
    }

    console.log('Pasta Criada com sucesso!');    
});

//Criar uma pasta e Arquivo
fs.writeFile(
    path.join(__dirname, "/test", "test.txt"),
    "Hello Node.js!", 
    (error) => { 
        if (error) {
            return console.log('Erro ao escrever no arquivo:', error);
        }
        
        console.log('Arquivo Criado/Escrito com sucesso!'); 
    } 
);

//Adicionar aArquivo
fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello Word!',(error) => {
    if (error) {
        return console.log('Erro: ', error)
    }

    console.log('Arquivo modificado com sucesso!'); 
})

//Ler arquivo 
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
   if (error) {
        return console.log('Erro: ', error)
    }
    console.log(data)  
})