//Create a function that returns the subarrays of n consecutive elements from the original element that sum up to total. 
//The function will have the following form: slidingSum(arr, n, k)


function sum(subarray){
    var nSum = 0
    for (var i = 0; i < subarray.length; i++){
        nSum += subarray[i]   
    }   
    return nSum
}

function slidingSumAgain(array, n, total){
    var currentArray = []
    var finalArray = []
    for (var i = 0; i< n; i++){
        currentArray.push(array[i])
    }
    if (sum(currentArray) === total){
        finalArray.push(Array.from(currentArray))
    }
    for (var i = n; i<array.length; i++){
        currentArray.shift()
        currentArray.push(array[i])
        if (sum(currentArray) === total){
            finalArray.push(Array.from(currentArray))
        }
    }
    
    return finalArray
}




testing = [3,4,1,9,9,0,3,5,4]
console.log(slidingSumAgain(testing,3,8))