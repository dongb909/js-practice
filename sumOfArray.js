// var array = [1, 7, 9, 99, 100];

// function sumArray(someArray) {
//     total = 0
//     for (var i = 0; i < someArray.length; i++) {
//         total += someArray[i];
//     }
//     return total;
// }

// console.log(sumArray(array))
var array = [1, 7, 9, 99, 100];
const newArray = array.reduce((total, num) => total + num,0);
console.log(newArray)