const chalk = require('chalk')
const fs = require('fs')

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados;
}

function handleError(error) {
    throw new Error(chalk.red(error.code, 'não há arquivo no caminho'))
}

// async e await
async function getFile(pathFile) {
    try {
        const encoding = 'utf8'
        const texto = await fs.promises.readFile(pathFile, encoding)
        console.log(extraiLinks(texto))
    } catch (error) {
        handleError(error)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}


// then é uma das formas de lidar com promisses
// function getFile(pathFile) {
//     const encoding = 'utf8'
//     fs.promises
//         .readFile(pathFile, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch((erro) => handleError(erro))
// }

// function getFile(pathFile) {
//     const encoding = 'utf8'
//     fs.readFile(pathFile, encoding, (error, texto) => {
//         if (error) {
//             handleError(error)
//         }
//         console.log(chalk.green(texto))
//     })
// }

getFile('./arquivos/texto1.md')