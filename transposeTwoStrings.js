function transposeTwoStrings(string1, string2){
    var finalString = ''
    if (string1.length>=string2.length){
      var longestString = string1
    } else if (string2.length > string1.length){
      longestString = string2
    }
    for (var i = 0; i<longestString.length;i++){
      if (string1[i] === undefined){
        finalString = finalString.concat('  ' + string2[i] + '\n')
      } else if (string2[i] === undefined){
        finalString = finalString.concat(string1[i] + ' ' + ' \n')
      } else{
      finalString = finalString.concat(string1[i] + ' ' + string2[i] + '\n')
      }

    }
  return finalString
}

console.log(transposeTwoStrings('Hello','WorldABC'))
