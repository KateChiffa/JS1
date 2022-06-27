function structureOfWord(word) {

const vowels = "eyuoai".split('')
const consonants = "wqrtplkjhgfdszxcvbnm".split('')

let vowelsCount = 0
let consonantsCount = 0

for(const char of word.toLowerCase()) {
    if(vowels.includes(char)) vowelsCount++
    else if(consonants.includes(char)) consonantsCount++
}
console.log(`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных`)
}
structureOfWord("Ekaterina")