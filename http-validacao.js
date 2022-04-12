const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function checaStatus(arrayURLs) {

    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url)
        return res.status
    }))

    return arrayStatus
}

function geraArrayURLs(arrayLinks) {
    return arrayLinks.map(link => Object.values(link).join())
}

async function validaURLs(arrayLinks) {
    const links = geraArrayURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
    return statusLinks
}

module.exports = validaURLs