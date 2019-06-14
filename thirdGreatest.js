// function thirdGreatest (array) {
//     let firstLargestNum = -Infinity;
//     let secondLargestNum = -Infinity;
//     let thirdLargestNum = -Infinity;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > firstLargestNum) {
//             firstLargestNum = array[i];
//         }
//         if (array[i] < firstLargestNum && array[i] > secondLargestNum){
//             secondLargestNum = array[i];
//         }
//         if (array[i] < secondLargestNum && array[i] > thirdLargestNum){
//             thirdLargestNum = array[i];
//         }
//     }
//     return thirdLargestNum
// }


array = [1,9,200,5]

// console.log(thirdGreatest(array))

array.sort((a, b) => b - a)
console.log(array[2])





// new = array.sort()
// console.log(new)