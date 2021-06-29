const {missingNumber, missingNumberRange} = require('./Missing-Number')

let numbers = [21,23,22,24,26,27,28]
let range = 10
const missingNum = missingNumber(numbers)
const missingNumRange = missingNumberRange(numbers,range)

console.log("Missing NUmber ",missingNum);
console.log("Missing Number Range",missingNumRange);
