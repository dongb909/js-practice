function allNumbersLessThanTen(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            return false
        }
    }
    return true
}

someArray = [1, 3, 7, 7]

console.log(allNumbersLessThanTen(someArray))