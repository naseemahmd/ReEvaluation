// Print the revease number

function reverseNumber(number) {
    var revease =''
    var numarr = [...number.toString()]
    for(var i = numarr.length -1; i >= 0;i--){
        revease = `${revease}${numarr[i]}`
    }
    
    var num = parseInt(`${revease}`)
    console.log(`Reverse of ${number} is num ${num}`);
}

reverseNumber(3425653)