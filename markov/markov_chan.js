/*
- read text
- or at least have text to go over
- words are states, some follow another
- some appear more than others
- certain sequences appear more than others
- spit out new text based on probabilities 
*/

const nGrams = {};
const text = "this rainbow has a unicorn flying over it this rainbow has a unicorn flying over it";
const order = 3;
for (let i = 0; i <= text.length / (order * 2); i++) {
    const textArray = text.split(" ")
    const gram = textArray.slice(i, i + order);
    //nGrams[i] = gram
    if (!nGrams[gram]) {
        nGrams[gram] = [];
        nGrams[gram].push(gram.toString())
    } else {
        nGrams[gram].push(gram.toString())
        //nGrams[gram]++
    }
}
console.log(nGrams)