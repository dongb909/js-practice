// return true if a number in the array is even, else return 
// false
// // iterate through each element
// // see if each is i%=0 to return true

// function hasEvenNumber(array) {
//     for (var i = 0; i < array.length; i += 1) {
//         if (array[i] % 2 === 0) {
//             return true;
//         }
//     }
//     return false;
// }

// array = [1, 7, 3, 5]
// console.log(hasEvenNumber(array))

var evenArray = []

function evenNumbers(someArray) {
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] % 2 === 0) { 
            evenArray.push(someArray[i])
        }
    }
    return evenArray
}

numbers = [1,2,7,10,12,19,20] 
console.log(evenNumbers(numbers))