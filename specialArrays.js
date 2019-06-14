//An array is special, if every even index contains an even number and every odd index contains an odd number. 
//Create a function that returns true if an array is special, and false otherwise.
function specialArray(array){
    for (var i = 0; i <array.length; i++){
        if (i % 2 === 1) {
            if (array[i] % 2 ===0){
                return false
            }
        }
        if (i % 2 === 0){
            if (array[i] % 2 ===1){
                return false
            }
        }
    }
    return true
}

array = [2,3,4,5,6]
console.log(specialArray(array))