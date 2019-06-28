function flipEveryNCharater(string, n){
    var stringCharacters = string.split("")
    var reversedArr = []
    for (var i = 0; i<stringCharacters.length; i+=n){
        if (i+n === undefined){
            continue
        }
        currentArr = stringCharacters.slice(i,i + n)
        reversedCurrent = currentArr.reverse()
        reversedArr = reversedArr.concat(reversedCurrent)
    }
    return reversedArr.join('')
} 

testing = 'abcde'
console.log(flipEveryNCharater(testing, 3))
