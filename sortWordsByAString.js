// Create a function that sorts words by a given string. and the string may have excess letters

function sortWords(words, string){
    var sortedWords = []
    for (var i =0; i< string.length;i++){
        for (var j = 0; j < words.length; j++){
          if (words[j][0] === string[i])
            sortedWords.push(words[j])  
        }
    }
    return sortedWords
}

testing = ["apple", "banana", "cherry", "date"]
console.log(sortWords(testing,"dbca")) 