//Write a function that takes a string of brackets and checks whether they're balanced or not.


// function balancedBrackets(string){
//     var parenthesisA = 0
//     var bracketsA = 0
//     var bracesA = 0
//     var parenthesisB = 0
//     var bracketsB = 0
//     var bracesB = 0
//     for (var i = 0; i < string.length; i++){
//         if (string[i] === "("){
//             parenthesisA +=1
//         } else if(string[i] === "{"){
//             bracesA +=1
//         } else if(string[i] === "["){
//             bracketsA +=1
//         } else if (string[i] === ")"){
//             parenthesisB +=1
//         } else if(string[i] === "}"){
//             bracesB +=1
//         } else if(string[i] === "]"){
//             bracketsB +=1
//         }
//     }
//     if (parenthesisA === parenthesisB && bracesA === bracesB && bracketsA ===bracesB){
//         return true
//     }
//     return false
// }

// testing = "(())[]"
// console.log(balancedBrackets(testing))


//CAN YOU FIND THEM IN PAIRS? AND IF THERE'S AN ODD ONE OUT THEN FALSE?
function balancedBrackets(nstring){
    var string = nstring.split("")
    for (var i =0; i < string.length; i++){
        for (var j = string.length -1; j >=0; j--){
            if (string[i] === "(" && string[j] === ")"){
                string.splice(i,1)
                string.splice(j,1)
                console.log(string)
            } else if (string[i] === "[" && string[j] === "]"){
                string.splice(string[i])
                string.splice(string[j])
            } else if (string[i] === "{" && string[j] === "}"){
                string.splice(string[i])
                string.splice(string[j])
        }
        if (string.length > 1)
            return false
        
    }
    return true

}

testing = "(())[{[]}"
console.log(balancedBrackets(testing))