const chalk = require('chalk')

console.log(chalk.blue('Vamos começar!'));

const paragrafo = 'Texto retonado por uma função';

function texto(string) {
    return string
}

console.log(texto(paragrafo));

console.log(chalk.blue.bgWhite.bold('Alura'));