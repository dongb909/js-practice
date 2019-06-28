// allLessThanTen
// amplifyMultiplesOf4
// hackerSpeak
// returnOddElements


// ***only reverse, push, pop, shift, unshift mutate the original array. all else you have to set to a new variable bc they create new arrays
// these don't mutate, they create new arrays
// testing = [1, 17, 4, 8, 10, 20, 50]
// var a = testing.filter(function(num){
//     return num < 10     // can I do a return true too?, can ignore flase statement right?
// })// MUST HAVE A RETURN VALUE THAT'S A BOOLEAN preferable true
// // // must reassign or make new variable?
// console.log(a)


// must create a function?
// var b = testing.map(function(num){
//     if (num % 4 ===0){
//         return num*10   //this alone will return the entire modified array? or will just return what's modified?
//     } else {
//         return num//must have a return for all elements in the array
//     }
// })


// console.log(b)

// var oddElements = testing.filter(function(num){
//     return num % 2 ===1
// })
// console.log(oddElements)

//CANNOT USE ON STRINGS
var string = 'hi speaking'

var hackerSpeak = string.split('').map(function(char){
    if (char.toLowerCase() === 'i'){
        return 1
    } else if (char.toLowerCase() === 'e'){
        return 3
    } else if (char.toLowerCase() === 'o'){
        return 0
    } else if (char.toLowerCase() === 's') {
        return 5
    } else if (char.toLowerCase() === 'a'){
        return 4
    } else {
        return char
    }
})
hackerSpeak = hackerSpeak.join('')
console.log(hackerSpeak)