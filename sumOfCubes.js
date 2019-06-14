//Create a function that takes in an array of numbers and returns the sum of its cubes.

function cubeSum(cubeArray){
    sum = 0
    for (var i = 0; i <cubeArray.length; i++){
        sum += Math.pow(cubeArray[i], 3);
    }
    return sum
}

array = [1,200,3,4,5]
console.log(cubeSum(array))


// it's not calculating the last number in array?