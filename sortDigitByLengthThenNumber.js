/*Write a function that sorts an array of integers by their digit length in descending order, then settles ties by sorting numbers with the same digit length in ascending order.

Examples
digitSort([77, 23, 5, 7, 101])
➞ [101, 23, 77, 5, 7]

digitSort([1, 5, 9, 2, 789, 563, 444])
➞ [444, 563, 789, 1, 2, 5, 9]

digitSort([53219, 3772, 564, 32, 1])
➞ [53219, 3772, 564, 32, 1]*/






function digitByLengthThenNumber(arr){
//sort array from longest to shortest    
    var arrByLength = arr.sort(function(a,b){
        if (String(Math.abs(a)).length > String(Math.abs(b)).length){       // to abs to account for neg sign
            return -1
        } else if (String(Math.abs(a)).length < String(Math.abs(b)).length){ // must string numbers because you can only do length on strings not numbers
            return 1
        } else if (a > b){
            return 1
        } else if (a < b){      //must to the a,b thing or else arr.sort() will sort it as a string
            return -1
        }
        else {
            return 0
        }
    })
    return arrByLength
}
//sort each length from smallest number to largest number
//     for (var i = String(arrByLength[0]).length; i > 0; i--){
//         var digitSort = []
//         for (var j = 0; j< arrByLength.length; j++){
//             if (String(arrByLength[j]).length === i){
//                 digitSort = digitSort.concat(arrByLength[j])
//             }
//         }
//         var digitSorted = digitSort.sort()
//         finalArray = finalArray.concat(digitSorted)
//         // console.log(finalArray)
//     }
//     return finalArray
// }


var digitSort = [77, 23, -5, 0, -7, -101]
console.log(digitByLengthThenNumber(digitSort))




