
function cipher(n){
    var alpha = "abcdefghijklmnopqrstuvqxyz"
    var alphaArray = alpha.split("")
    var alphaCopy = alphaArray.slice()
    var alphaDict = {}
    for (var i=0; i<n; i++){
        alphaCopy.push(alphaCopy.shift())
    }
    for (var j = 0; j < alpha.length; j++){
        alphaDict[alpha[j]] = alphaCopy[j]
    }
    return alphaDict
}



function cipherString(nstring,n){
    var newAlpha = cipher(n)
    var string = nstring.split("")
    for (var i = 0; i < string.length; i++){
        if (string[i] in newAlpha){
           string[i] = newAlpha[string[i]] 
        }
    }
    var finalString = string.join("")
    return finalString
}

testing = "abc4547878defg"

console.log(cipherString(testing,2))

// function cipher(n){
//     var alpha = "abcdefghijklmnopqrstuvqxyz"
//     var alphaArray = alpha.split("")
//     var cipherdict = {}
//     for (var i = 0; i<alpha.length-n; i++){
//         cipherdict[alpha[i]] = alphaArray[i+n];   //prints key = x and value = z
//     }
//     // for (var j = alpha.length -n; j < alpha.length; j++){
//     //     cipherdict[alpha[j]] = alphaArray[j-n]
//     // }
//   return cipherdict
// }

