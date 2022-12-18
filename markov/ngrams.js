function nGramsFunc(text, num) {
    text = text.replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, ' $1 ');
    text = text.replace(/([""()])/g, "")
    const order = num || 2;
    const nGrams = [];
    for (let i = 0; i <= (text.length - 1) / (order * 2); i++) {
        const textArray = text.split(" ")
        const gram = textArray.slice(i, i + order);
        if (gram.length > 0) {
            nGrams.push(gram.join(" "))
        }
    }
    return nGrams
}
module.exports = nGramsFunc;