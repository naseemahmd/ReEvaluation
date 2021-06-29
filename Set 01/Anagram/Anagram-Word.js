//Finding angaram word//

function findAnagram(word,anagramCheckord) {
    
    const wordArr = [...word.toLowerCase().replace(/\s+/g, '')]
    const anagramCheck = (anagramCheckord.toLowerCase()).replace(/\s+/g, '')
    let anagram = true
    for(let i =0;i < wordArr.length;i++){
        if(!anagramCheck.includes(wordArr[i])){
            anagram = false
            break
        }
    }
    return true
}

module.exports = {findAnagram}