const chalk = require('chalk')
const fs = require('fs')

function getFile(pathFile) {
    const encoding = 'utf8'
    fs.readFile(pathFile, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    })
}

getFile('./arquivos/texto1.md')