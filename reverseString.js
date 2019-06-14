// function reverseString(someString){
//     var newString = someString.splice(-1);
//     for (var )
//     newString.concat
//     return newString
// }

function reverseString(someString){
    var newString = ""
    for (var i = someString.length-1; i >=0; i--) {
        newString = newString.concat(someString[i]);
    }
    return newString
}
a = '1234567'
console.log(reverseString(a))

// a = ['a', 'b','c']
// reverseString = a.reverse()
// console.log(reverseString);


// function reverseString(string) {
//     splitString = string.split("")
//     splitString.reverse()
//     reverse = splitString.join(" ")
//     return reverse
// }

// b = "Hi my name is bacai"
// console.log(reverseString(b))