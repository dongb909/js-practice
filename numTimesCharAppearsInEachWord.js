function numCharPerWord(nSentence, character){
    var sentence = nSentence.split(" ")
    var charNum = []
    var charPerWord = 0
    for (var i = 0; i < sentence.length; i++){                          // for each WORD
        for (var j = 0; j < sentence[i].length;j++){                    //for each CHARACTER/INDEX
            if (sentence[i][j].toLowerCase() === character.toLowerCase()){
                charPerWord +=1
            }
        }
    charNum.push(charPerWord)       //still within forloop of each word but out of each character forloop
    charPerWord = 0
    }
    return charNum
}

console.log(numCharPerWord("Sally sold seashells by the seashore.", "s"))