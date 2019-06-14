//Reverse words in a string starting with a particular letter
// function reverseWords(string,letter){
//     var separateString = string.split()
//     for (var i = 0; i<separateString.length; i++){
//         if (separateString[i][0] === letter){
//                 var array = separateString[i].split("")
//                 var reverseArray = array.reverse()
//                 var reverseString = reverseArray.join("")
//         }
//     }
//     separateString = separateString.join(" ")
//     return separateString
        
// }
// testing = "Hi nice to nice to"


// console.log(reverseWords(testing, 'n'))

function reverseWords(string,letter){
    var newString = ""
    var stopIndex;
    for (var i = 0; i<string.length; i++){
        if (string[i] === letter){
            stopIndex = i
            break
        }
        newString = newString.concat(string[i])
    }
    for (var j = string.length-1; j >= stopIndex; j--){
        newString = newString.concat(string[j])
    }
    return newString
}

testing = "abcdef"
console.log(reverseWords(testing,'c'))
