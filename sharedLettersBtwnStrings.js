//Given two strings, return a string containing only the letters shared between the two.

function sharedLetters(string1, string2){
    var letters = ""
    for (var i = 0; i< string1.length; i++){
        for (var j = 0; j<string2.length; j++){
            if(string1[i] === string2[j]){
                if (letters.indexOf(string1[i]) === -1){ 
                    letters = letters.concat(string1[i])
                }
                
            }
        }
    }
    return letters
}

console.log(sharedLetters("a", "a"))
