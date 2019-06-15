//taking a string return the longest set of consecutive characters in the string 

// function longestConsecLetters(string){
//     var longest = ""
//     var current = ""
//     for (var i = 0; i < string.length; i++){
//         if (string[i] === string[i+1]){
//             current = current.concat(string[i])
//         } else {
//             current = current.concat(string[i])
//             if (current.length > longest.length){
//                 longest = current
                
//             }
//             current = ""
//         }
//     }
//     return longest
// }
// testing = "ooooiiippppppp"
// console.log(longestConsecLetters(testing))


//need to keep track of the current longest
// compare to newest string which won't always be the longest
// must compare the two

function longestConsec(string){
    var longest = ""
    var current = ""
    for (var i = 0; i<string.length; i++){
        if (string[i] === string[i+1]){
            current = current.concat(string[i])
        } else {
            current = current.concat(string[i])
            if (current.length > longest.length){
                longest = current
            }
        current = ""
        }
    }
    return longest
}

testing = "ooooiiippppppp"
console.log(longestConsec(testing))