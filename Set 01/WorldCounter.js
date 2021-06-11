/* Counting the words in string */

function countWords(wordToCount) {

    var wordArr = [...wordToCount.toLowerCase()];
    var wordCount = []
    var count = 0
    var word
    for(var i =0;i < wordArr.length;i++){
        
        for(var j =0; j  < wordArr.length; j++){
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
    console.log(wordCount);
}

countWords('apple')