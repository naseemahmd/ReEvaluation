const {findAnagram} = require('./Anagram-Word')

let wordOne = "rat"
let wordTwo = "art"

const anagram = findAnagram(wordOne,wordTwo)

if(anagram){
    console.log("Given words are Anagram");
}else{
    console.log("Given Words are Not Anagram");
}