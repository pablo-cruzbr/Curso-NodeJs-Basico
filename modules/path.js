const path = require('path');

//Apenas o nome do arquivo atual
console.log(patch.basename(__filename));


//Nome do Diretório atual
console.log(path.dirname(__filename));

//Extensão do arquivo 
console.log(path.extname(__filename));

//Criar um objeto path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test'))


