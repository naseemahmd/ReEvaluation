/* Counting the words in string */

function countWords(wordToCount) {

    const wordArr = [...wordToCount.toLowerCase()];
    const wordCount = []
    let count = 0
    let word
    for(let i =0;i < wordArr.length;i++){
        
        for(let j =0; j  < wordArr.length; j++){
            if(wordArr[i] === wordArr[j]){
                
                count += 1   
                
            }

        }
       
        if(!wordCount.includes(`${wordArr[i]} - ${count}`)){
            wordCount.push(`${wordArr[i]} - ${count}`);
        }
        

        word = ''
        count = 0
    }
    return wordCount
}

module.exports = {countWords}