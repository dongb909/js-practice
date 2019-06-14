function checkPalindrome(someString){
    var j = someString.length -1
    for (var i = 0; i < Math.floor(someString.length/2) ; i++) {
        if (someString[i] !== someString[j]){
            return false
        }
        j--
    }
    return true
}
var word = 'aab'

console.log(checkPalindrome(word))

// function checkPalindrome(someString){
//     var j = someString.length -1
//     for (var i = 0; i < Math.floor(someString.length/2) ; i++) {
//         if (someString[i] === someString[j]){
//             j--
//             continue
//         }
//         return false
        
//     }
// return true
// }

// var word = 'uiojlkjl'

console.log(checkPalindrome(word))