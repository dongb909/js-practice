function doubleLetters(word){
    for (var i = 0; i < word.length; i++){
        if (word[i] === word[i+1]){
            return true
        }
    }
    return false
}

console.log(doubleLetters("yumy"))