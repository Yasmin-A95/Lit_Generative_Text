function newWords(nGrams, amount) {
    let generatedText = [];
    for (let i = 0; i < amount; i++) {
        let num = Math.ceil(Math.random() * nGrams.length - 1)
        let nGram = nGrams[num]
        generatedText.unshift(nGram)
    }
    generatedText = generatedText.join(" ")
    generatedText = generatedText.replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, '$1 ');
    return generatedText
}

module.exports = newWords;