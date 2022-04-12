const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const chalk = require('chalk')

function handleError(erro) {
    throw new Error(erro.mensage)
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url)
                    return res.status
                }))

        return arrayStatus

    } catch (error) {
        handleError(error)
    }
}

function geraArrayURLs(arrayLinks) {
    return arrayLinks
        .map(link => Object
            .values(link).join())
}

async function validaURLs(arrayLinks) {
    const links = geraArrayURLs(arrayLinks)
    const statusLinks = await checaStatus(links)

    // spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        statusLink: statusLinks[indice]
    }))

    return resultados
}

module.exports = validaURLs