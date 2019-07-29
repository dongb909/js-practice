// MOCK SECOND INTERVIEW
// IOCE
//THINGS TO ASK DURING INTERVIEW BEFORE SOLVING ANY PROBLEMS
// Input
// Output
// Constraints are special characters included , is it in a form of a string or a number
// Test Edge Cases
String()
toString()
JSON.stringify

let sentence = "This is a really long ongoing sentence that we are going to use for testing purposes";

function withinSentence(word, sentence){
  var caseSentence = sentence.toLowerCase()
  if (caseSentence.includes(word)){
    return true
  } else {
    return false
  }
}
console.log(withinSentence ('notinthesentence', sentence))


function firstIndex(word, sentence){
  var splitSentence = sentence.split(' ')
  for (var i = 0; i < splitSentence.length; i++){
    if (splitSentence[i] === word){
      return i
    }
  }
  return -1
}

function assert(actual, expected, descriptionOfExpected){
  if (actual === expected){
    return true
  } else {
    return 'Expected ' + descriptionOfExpected + ' but got, ' + actual + ' instead of ' + expected
  }
}

console.log(assert(firstIndex('long', sentence), 4, 'long should be index 4'))
//find the index of word in sentence