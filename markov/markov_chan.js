/*
- read text
- or at least have text to go over
- words are states, some follow another
- some appear more than others
- certain sequences appear more than others
- spit out new text based on probabilities 
*/
const text = "this rainbow has a unicorn flying over it this rainbow has a unicorn flying over it this is it chaps the big one markos the big gun run mum fun run bun wow";

function nGrams(text) {
    const nGrams = [];
    const order = 2;
    for (let i = 0; i <= (text.length - 1) / (order * 2); i++) {
        const textArray = text.split(" ")
        const gram = textArray.slice(i, i + order);
        nGrams.push(gram.join(" "))
    }
    return nGrams
}
let nGramsRes = nGrams(text)

function nGramsOrganised(text, nGrams) {
    let orderedGrams = {}
    const uniqueWords = new Set(text.split(" "))
    let wordsCombos = [];

    uniqueWords.forEach(word => {
        let wordCombos = []
        nGrams.map(nGram => {
            nGramArr = nGram.split(" ")
            if (nGramArr[0] == word) {
                wordCombos.push(nGram)
            }
        })
        wordsCombos.push(wordCombos)
        orderedGrams[word] = wordCombos
    })
    return orderedGrams
}
console.log(nGramsOrganised(text, nGramsRes))