//Create a function that takes an array of positive and negative numbers. 
//Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

function posCountNegSum(array){
    var finalArray = []
    var negSum = 0
    var posSum = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] < 0){
            negSum += array[i]
        } else if (array[i] >=0) {
            posSum += array[i]
        }
    }
    finalArray.push(posSum)
    finalArray.push(negSum)
    return finalArray
}


testing = [-1, -2, -3, 0, 1, 2, 11]
console.log(posCountNegSum(testing)) 