//Finding angaram word//

function findAnagram(word,anagramWord) {
    
    var wordarr = [...word.toLowerCase().replace(/\s+/g, '')]
    var anagramW = (anagramWord.toLowerCase()).replace(/\s+/g, '')
    var anagramCheck = true
    for(var i =0;i < wordarr.length;i++){
        if(!anagramW.includes(wordarr[i])){
            anagramCheck = false
            console.log("String is not a anagram");
            break
        }
    }
    if(anagramCheck){
        console.log("String is anagram");
    }
}

findAnagram('Voices rant on','Conversation')