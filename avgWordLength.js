/* Create a function that takes in a sentence and returns the average length of each word in that sentence. Return a float value that is rounded to two decimal places.

Examples
averageWordLength("A B C.") ➞ 1.00

averageWordLength("What a gorgeous day.") ➞ 4.00

averageWordLength("Dude, this is so awesome!") ➞ 3.80
Notes
Ignore punctuation when counting the length of a word. */
['a', 'b'].includes('a')


function avgWordLength(string){
    var stringArray = string.split(" ")
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    var lengthOfWordsArr = stringArray.map(function(word){
        var wordLength = 0
        for (var i = 0; i< word.length; i++){
            if (alphabet.includes(word[i].toLowerCase())){      //includes returns true or false. if true then do the following.
                wordLength += 1
            }
        }
        return wordLength
    })
    var sum = 0
    for (var i = 0 ; i< lengthOfWordsArr.length; i++){
        sum += lengthOfWordsArr[i]
    }
    var avg = parseFloat(sum/stringArray.length)
    return avg
}

console.log(avgWordLength('Dude, this is so awesome'))