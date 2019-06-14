function longestWords(string) {
    let stringSplit = string.split(" ");
    let longestWord = ''                    // you set it = 0 instead of an empty string
    for (let i = 0; i < stringSplit.length; i++){
        if (stringSplit[i].length > longestWord.length) {   // you set it as > longestWord which doesn't make sense
            longestWord = stringSplit[i];                   // you compared a number length to a string
        }
    }
    return longestWord
}

string = "hi how are you doing"
console.log(longestWords(string))
    
//     // sorted = stringSplit.sort()
//     // longestWordIndex = sorted.length - 1
//     // longestWord = sorted[longestWordIndex] 
//     // return longestWord
//     // }




// // greeting = "Hi how are you doing, sort this out"
// // // console.log(longestWords(greeting))
// // stringSplit = greeting.split()
// // console.log(greeting.split())


// function largestNum(array) {
//     let num = -Infinity;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > num){
//             num = array[i]
//         }
//     }
//     return num
// }

// // i want to compare the next number in array to num 
// // to see which is larger and then update num and return num 

// array = [-1,-2,-7,-10]
// console.log(largestNum(array)) 