Create a function that takes an array of numbers and returns the mean value.
function meanValue(array){
    var sum = 0
    for (var i = 0; i <array.length; i++){
        sum += array[i]
    }
    var mean = (sum/array.length)
    return mean
}

testing = [1,2,3,4,5]
console.log(meanValue(testing))

