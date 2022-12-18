const fs = require('fs');
const markovChain = require('./ngrams');
const generateText = require('./generate-text');

async function readText() {
    return new Promise((resolve, reject) => {
        fs.readFile('./input.txt', "utf-8", (err, res) => {
            if (err) {
                reject(err)
            } else if (res) {
                resolve(res,)
            }
        })
    })
}
function cleanText(text) {
    const cleanedText = text.replace(/\[\d+\]/g, "");
    return cleanedText;
}

readText().then((result) => {
    const words = cleanText(result);
    const nGrams = markovChain(words)
    const newText = generateText(nGrams, 20)
    console.log(newText)

});