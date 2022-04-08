const chalk = require('chalk')
const fs = require('fs')

function handleError(error) {
    throw new Error(chalk.red(error.code, 'não há arquivo no caminho'))
}

function getFile(pathFile) {
    const encoding = 'utf8'
    fs.readFile(pathFile, encoding, (error, texto) => {
        if (error) {
            handleError(error)
        }
        console.log(chalk.green(texto))
    })
}

getFile('./arquivos/texto1.md')