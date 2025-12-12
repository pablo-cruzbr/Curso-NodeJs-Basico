const path = require('path');
const patch = require('path')

//Apenas o nome do arquivo atual
console.log(patch.basename(__filename));


//Nome do Diretório atual
console.log(path.dirname(__filename))

//Extensão do arquivo 
console.log(path.extname(__filename))
