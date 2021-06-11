/* Finding the Missing the Number from Squeance */
var number = [21,29,26,23,22,28,30,32,33,34];
var missingNum = []

function missingNumber(nummbers){
 
    var length = nummbers.length
    
    if(length != (rage -1)){
        for ( var i = 0; i < length-1; i++ ) {
            if ( nummbers[i+1] - nummbers[i] > 0 ){
                count = nummbers[i+1] - nummbers[i]
                for(var j = 1; j < count;j++){
                    missingNum.push( nummbers[i] + j ); 
                }
                //missingNum.push( nummbers[i] + 1 );   
            }          
        }
    }
    
    console.log(missingNum);
}

function missingNumberRange(nummbers){
    
    nummbers.sort(function(a,b){return a-b});
    var range = 15
   
    if(nummbers.length != range){
        for ( var i = 0; i < nummbers.length-1; i++ ) {
            if ( nummbers[i+1] - nummbers[i] > 0 ){
                count = nummbers[i+1] - nummbers[i]
                for(var j = 1; j < count;j++){
                    missingNum.push( nummbers[i] + j ); 
                }
                //missingNum.push( nummbers[i] + 1 );   
            }          
        }
    }
     if(nummbers.length + missingNumber.length != range){
            
            nummbers.push(...missingNum)
            nummbers.sort((a,b) =>{return a-b});
           
            if(range - nummbers.length=== 2){
                console.log("herer");
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
    

    console.log(missingNum);
}

missingNumberRange(number)