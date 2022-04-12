const chalk = require('chalk')
const validaURLs = require('./http-validacao')
const getFile = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await getFile(caminhoArquivo[2])
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('Links validados'), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('Lista de links'), resultado)
    }
}

processaTexto(caminho)
