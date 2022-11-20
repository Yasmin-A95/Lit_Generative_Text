/*
- read text
- or at least have text to go over
- words are states, some follow another
- some appear more than others
- certain sequences appear more than others
- spit out new text based on probabilities 
*/
const fs = require('fs');

async function readText() {
    fs.readFile('./input.txt', "utf-8", (err, res) => { // ok the err can't be the second param lol fuck
        if (err) {
            console.log("error", err)
        } else if (res) {
            nGramsFunc(res, 2)
        }
    })
}
readText()

function nGramsFunc(text, num) {
    const order = num || 2;
    const nGrams = [];
    for (let i = 0; i <= (text.length - 1) / (order * 2); i++) {
        const textArray = text.split(" ")
        const gram = textArray.slice(i, i + order);
        nGrams.push(gram.join(" "))
    }
    return nGramsOrganised(text, nGrams)
}


function nGramsOrganised(text, nGrams) {
    let orderedGrams = {}
    text = text.split(" ") // only now is text mutated 
    let wordsCombos = [];

    text.map(word => {
        let wordCombos = []
        nGrams.map(nGram => {
            nGramArr = nGram.split(" ")
            if (nGramArr[0] == word) { // because it's passed nGrams of two words each, the first word is therefore the target i.e. [0]
                wordCombos.push(nGram)
            }
        })
        wordsCombos.push(wordCombos)
        orderedGrams[word] = wordCombos
    })
    console.log(orderedGrams)
    return orderedGrams
}

/*
- if i do something like for each  key in the obj returned from nGrams(text, 2)
- find the n number of things that typically come after it in text then we're really marko chaining
*/

// twoRes = nGrams(text)
// function iterateOverTwoRes(twoRes) {
//     Object.values(twoRes).forEach((val) => {
//         for (let i = 0; i < val.length; i++) {
//             let current = val[i]
//             //current = current.join(",") // this is because I didnt clean the original text
//             nGrams(current) // no that doesnt make sense
//         }
//     })
// }