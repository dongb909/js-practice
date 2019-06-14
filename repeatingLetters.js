// function letterRepeat(someString) {
//     alphabet = "abcdefghijklmnopqrstuvwxyz"
//     // want to make a dictionary where keys are the alphabets and values are updated to the number of times letter shows up

//     for (var i = 0; i < alphabet.length; i++) {
//         for (var j = 0; j < someString.length; i++) {
//             if (alphabet[i] === somestring[j]){
                
//             }
//         }
//     }
// }




function countVowel(string){
    var vowelCount = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            vowelCount += 1
        }
    }
    return vowelCount
}

stringCool = 'Hey how are you doing haha'

console.log(countVowel(stringCool))