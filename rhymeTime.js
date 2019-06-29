/*Create a function that returns true if two lines rhyme and false otherwise. For the purposes of this exercise, two lines rhyme if the last word from each sentence contains the same vowels.

Examples
doesRhyme("Sam I am!", "Green eggs and ham.") ➞ true

doesRhyme("Sam I am!", "Green eggs and HAM.") ➞ true
// Capitalization and punctuation should not matter.

doesRhyme("You are off to the races", "a splendid day.") ➞ false

doesRhyme("and frequently do?", "you gotta move.") ➞ false
Notes
Case insensitive.
Here we are disregarding cases like thyme and lime.
We are also disregarding cases like away and today (which technically rhyme, even though they contain different vowels).*/

function vowels(word){
    var vowelsWord = []
    var vowel = 'aeiou'.split('')
    for (var i = 0; i < word.length; i++){
        if (vowel.includes(word[i])){
            vowelsWord.push(word[i])
        }
    }
    return vowelsWord
}


// function rhymeTime(string1, string2){
//     var string1Arr = string1.split(' ')
//     var string2Arr = string2.split(' ')
//     var lastWordString1 = string1Arr[string1Arr.length - 1]
//     var lastWordString2 = string2Arr[string2Arr.length - 1]
//     var vowelsString1 = vowels(lastWordString1)
//     var vowelsString2 = vowels(lastWordString2)
//     vowelsString1.sort()        // do this so you can compare each index in instead of using the includes which you could have oou and uou equals
//     vowelsString2.sort()
//     if (vowelsString1.length ===0 || vowelsString2.length ===0 || vowelsString1.length !== vowelsString2.length ){
//             return false
//         }
//     for (var i = 0; i < vowelsString1.length; i++){
//           if (vowelsString1[i]=== vowelsString2[i]){              //instead of vowelsString1.includes(vowelsString2[i])
//             continue
//         }else {
//             return false
//         }
//     }
//     return true

// }

// console.log(rhymeTime("Sam I uoom!", "Green eggs and uuom."))


//***************** */join it to make a string so you don't have to iterate through each array

function rhymeTime(string1, string2){
    var string1Arr = string1.split(' ')
    var string2Arr = string2.split(' ')
    var lastWordString1 = string1Arr[string1Arr.length - 1]
    var lastWordString2 = string2Arr[string2Arr.length - 1]
    var vowelsString1 = vowels(lastWordString1)
    var vowelsString2 = vowels(lastWordString2)
    vowelsString1 = vowelsString1.sort().join('')       
    vowelsString2 = vowelsString2.sort().join('')
    if (vowelsString1.length ===0 || vowelsString2.length ===0 || vowelsString1.length !== vowelsString2.length ){
            return false
    }
    if (vowelsString1 === vowelsString2){
        return true
    } else {
            return false
        }

}

console.log(rhymeTime("Sam I uuom!", "Green eggs and uuom."))