// function binarySearch(arr,num){
//     var midIndex = Math.floor((arr.length-1)/2)          //should be arr.length-1 / 2 because you're finding the middle index, the calculation for the middle index should be the last index of the array 
//     while (arr[midIndex] !== num){                  //not putthing this here, want to put this in if statement and then put the condition where you've exhausted every single search possibility
//         if (num < arr[midIndex]) {
//             subArr1 = arr.slice(0,midIndex)
//             midIndex = Math.floor((subArr1.length-1)/2)
//         } else if (num > arr[midIndex]){
//             subArr1 = arr.slice(midIndex,arr.length-1)
//             midIndex = Math.floor((midIndex+arr.length-1)/2)     //subArr bc arr.length will always be the same length
//         }
//     }
//     return midIndex
// }



// console.log(binarySearch([1, 3, 16, 22, 31, 33, 34], 40))



// function binarySearch(arr,num){
//     var midIndex = Math.floor(arr.length/2)
//     while (true){                
//         if (arr[midIndex] === num){
//             return midIndex
//         } else if (num < arr[midIndex]) {
//             subArr1 = arr.slice(0,midIndex)
//             midIndex = Math.floor(subArr1.length/2)
//         } else if (num > arr[midIndex]){
//             subArr1 = arr.slice(midIndex,arr.length-1)
//             midIndex = Math.floor((midIndex + arr.length-1)/2)   //to account for correct index
//         }
//     }
//     return midIndex
// }



// console.log(binarySearch([1, 2, 3, 16, 22, 31, 33, 34], 1))


function bSearch(arr, target) {
    var min = 0
    var max = arr.length - 1
    while (max > min) {
        var midIdx = Math.floor((max + min) / 2)
        console.log(max)
        var currVal = arr[midIdx]
        if (target === currVal) {
            return midIdx
        } else if (currVal < target) { // go left
            min = 0
            max = midIdx - 1
        } else {
            min = midIdx
            max = midIdx + Math.floor(max - min)
        }
    }
    return false
}

console.log(bSearch([1, 2, 3, 16, 22, 31, 33, 34], 1))