//Finding angaram word//

function findAnagram(word,anagramCheckord) {
    
    var wordArr = [...word.toLowerCase().replace(/\s+/g, '')]
    var anagramCheck = (anagramCheckord.toLowerCase()).replace(/\s+/g, '')
    var anagram = true
    for(var i =0;i < wordArr.length;i++){
        if(!anagramCheck.includes(wordArr[i])){
            anagram = false
            console.log("String is not a anagram");
            break
        }
    }
    if(anagram){
        console.log("String is anagram");
    }
}

findAnagram('Voices rant on','Conversation')