// finding the 3rd Legrest in a array

function find3rdLargest(numberArr) {
    numberArr.sort((a,b) => {return a-b});
    console.log("3rd Max", numberArr[numberArr.length - 3]);
}

find3rdLargest([23,21,56,44,72,90,34])