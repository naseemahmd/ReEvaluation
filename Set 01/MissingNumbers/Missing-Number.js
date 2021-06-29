/* Finding the Missing the Number from Squeance */


function missingNumber(nummbers){
    const missingNum = []
    nummbers.sort((numOne,numTwo) => {return numOne - numTwo})
    const length = nummbers.length
    for ( let i = 0; i < length-1; i++ ) {
        if ( nummbers[i+1] - nummbers[i] > 0 ){
            count = nummbers[i+1] - nummbers[i]
            for(let j = 1; j < count;j++){
                    missingNum.push( nummbers[i] + j ); 
                }
       }          
     }
    
    return missingNum
}
/* Finding the Missing the Number from Squeance when know the range */

function missingNumberRange(nummbers,range){
    const missingNum = []
    nummbers.sort(function(a,b){return a-b});   
    if(nummbers.length != range){
        for ( let i = 0; i < nummbers.length-1; i++ ) {
            if ( nummbers[i+1] - nummbers[i] > 0 ){
                count = nummbers[i+1] - nummbers[i]
                for(let j = 1; j < count;j++){
                    missingNum.push( nummbers[i] + j ); 
                }
                 
            }          
        }
    }
     if(nummbers.length + missingNumber.length != range){
            
            nummbers.push(...missingNum)
            nummbers.sort((a,b) =>{return a-b});
           
            if(range - nummbers.length=== 2){
                missingNum.push( nummbers[0] -1 );
                missingNum.push( nummbers[nummbers.length-1] +1 );
            }
            if(range %2 == 0){
                if(nummbers[nummbers.length -1] % 2 == 0 ){
                    missingNum.push( nummbers[nummbers.length-1] +1 );
    
                }else{ 
                    missingNum.push( nummbers[0] -1 );

                }
            }else{
                if(nummbers[nummbers.length -1] % 2 == 0 ){
                    missingNum.push( nummbers[0] -1 ); 
    
                }else{ 
                    
                    missingNum.push( nummbers[nummbers.length-1] +1 );
                }
            }
            
        }
    

    return missingNum
}

module.exports = {missingNumber,missingNumberRange}