const chalk = require('chalk')
const getFile = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await getFile(caminhoArquivo[2])
    console.log(chalk.yellow('Lista de links'), resultado)
}

processaTexto(caminho)
