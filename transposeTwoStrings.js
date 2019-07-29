// function transposeTwoStrings(string1, string2){
//     var finalString = ''
//     if (string1.length>=string2.length){
//       var longestString = string1
//     } else if (string2.length > string1.length){
//       longestString = string2
//     }
//     for (var i = 0; i<longestString.length;i++){
//       if (string1[i] === undefined){
//         finalString = finalString.concat('  ' + string2[i] + '\n')
//       } else if (string2[i] === undefined){
//         finalString = finalString.concat(string1[i] + '  ' + ' \n')
//       } else{
//       finalString = finalString.concat(string1[i] + ' ' + string2[i] + '\n')
//       }

//     }
//   return finalString
// }



function transposeTwoStrings(str1, str2){
  var str1Arr = str1.split("")
  var str2Arr = str2.split("")
  var longestArr = str1Arr
  var shortestArr = str2Arr
  if (str2Arr.length>str1Arr.length){
    longestArr = str2Arr
    shortestArr = str1Arr
  }
  var transposedStrings = longestArr.map(function(char,index){
    if (shortestArr[index] === undefined){
      return char + '  ' //2 spaces 
    } else{
      return char + ' ' + shortestArr[index]
    }
  })
  return transposedStrings.join('\n')
}

console.log(transposeTwoStrings('Hello','Worlddddddddddddd'))