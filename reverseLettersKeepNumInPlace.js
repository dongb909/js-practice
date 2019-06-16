function revLetKeepNum(nstring){
    var string = nstring.split("")
    var alpha = "abcdefghijklmnopqrstuvwxyz"
    var index = []
    var stringLetters = []
    for (var i = 0; i<string.length; i++){
        if (alpha.indexOf(string[i]) !== -1){
            index.push(i)
            stringLetters.push(string[i])
        }
      
        var newStringLetters = Array.from(stringLetters)        //must make a copy! AND SET TO NEW VARIABLE!
        newStringLetters = newStringLetters.reverse()
    for (var j = 0; j<index.length; j++){
        string[index[j]] = newStringLetters[j]              //BE CAREFUL IT's INDEX OF INDEX NUMBER VALUE
    }
    }
    var finalString = string.join("")
    return finalString
}


testing = "abcde 123fg45h"
console.log(revLetKeepNum(testing))