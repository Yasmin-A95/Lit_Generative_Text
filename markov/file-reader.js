const fs = require('fs');
//const nGrams = require('./chat-gpt-grams')

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
    console.log(cleanText(result));
});