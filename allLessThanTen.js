// given a string of numbers, return true if all the numbers are less than ten
// /**
//  * @example
//  * [1,23,321,21,213] => [false]
//  * @example
//  * [1,3,4,2,3] => [true]
//  */

//  function allLessThanTenElementCount(array){
//     var allLessThanTen = true
//      for (var i =0; i < array.length; i++){
//         if (array[i] >10){
//             allLessThanTen = false

//         }
//      }
//      return [allLessThanTen, array.length]
//  }

 testing = [1,3,7,2,3]
//  console.log(allLessThanTenElementCount(testing))

function allLessThanTen(array){
    var greaterThanTen = array.filter(function(num){
        return num > 10
    })
    if (greaterThanTen.length > 0){
        return false
    } else{
        return [true, array.length]
    }
}

console.log(allLessThanTen(testing))