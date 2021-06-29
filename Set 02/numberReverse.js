// Print the revease number

function reverseNumber(number) {
    let revease =''
    const numarr = [...number.toString()]
    for(let i = numarr.length -1; i >= 0;i--){
        revease = `${revease}${numarr[i]}`
    }
    
    let num = parseInt(`${revease}`)
    return num
}

module.exports = {reverseNumber}