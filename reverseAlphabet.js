// taking in a string, reverse each character by sequential alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var reversedAlphabet = [...alphabet].reverse()

var alphabetDictionary = {}
for (let i = 0; i < alphabet.length; i++) {
    alphabetDictionary[alphabet[i]] = reversedAlphabet[i]
}
// 'ab' => 'zy'
function reverseAlphabet(nstring) {
    var string = nstring.split("")
    for (var i = 0; i < string.length; i++){
        if (string[i] in alphabetDictionary){
            string[i] = alphabetDictionary[string[i]]
        }
    }
    var newString = string.join("")
    return newString
}

testing = "hi speaking"
console.log(reverseAlphabet(testing))