const {countWords} = require('./WordCounter')

let word = "apple"

const wordCount = countWords(word)

console.log("Word count is ", wordCount);