// finding the 3rd Legrest in a array

function find3rdLargest(numberArr) {
    numberArr.sort((a,b) => {return a-b});
   return numberArr[numberArr.length - 3]
}

module.exports = {find3rdLargest}