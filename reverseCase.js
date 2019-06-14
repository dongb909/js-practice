//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
function caseString(someString){
    var newString = ""
    for (var i = 0; i<someString.length; i++){
        if (someString[i] === someString[i].toLowerCase()){
            // someString[i] = someString[i].toUpperCase()
            newString = newString.concat(someString[i].toUpperCase())
        } else {
            // someString[i] = someString[i].toLowerCase()
            newString = newString.concat(someString[i].toLowerCase())
        }
    }
    return newString
}

var hi = "Hi how ArE you"


console.log(caseString(hi))


//strings cannot be mutated right? only concatenated
