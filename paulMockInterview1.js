// const inventors = [
//       { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//       { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//       { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//       { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//       { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//       { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//       { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//       { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//       { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//       { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//       { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//       { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
//     ]

// // use .filter to return back an array of people born in the year 1700 and after

// function bornAfter1700(inventors){
//   var people =[]
//   for (var i = 0; i< inventors.length;i++){
//     var currObj = inventors[i]
//     if (currObj.year >= 1700){
//       people.push(inventors[i])
//     }
//   }
//   return people
// }

// console.log(bornAfter1700(inventors))

// // return back an array of people's first  and last names as 
// // HW: figure out how to do this with .map

// function firstAndLast(inventors){
//   var fullNames = []
//   for (var i =0; i<inventors.length;i++){
//     var currObj = inventors[i]
//     var stringNames = currObj.first + ' ' + currObj.last
//     fullNames.push(stringNames)
//   }
//   return fullNames
// }

// console.log(firstAndLast(inventors))

// HW: read over .sort on MDN
// return back the inventors array in terms of year born from recently born

// CLARIFY INPUTS AND OUTPUTS WITH INTERVIEWER!!!!!!

// create a fn that takes two inputs
// return back which input has the higher version number acccording to the last block

// I: two strings
// O: strings 


// HW: learn how to do this problem with split method and parseInt()

const one = "15.75.99";
const two = "42.1688";

function largerNum(num1, num2){
  var numberedOne = getNum(num1)
  var numberedTwo = getNum(num2)
  if(numberedOne > numberedTwo){
    return "Input one has the largest number"
  } else if (numberedTwo > numberedOne){
    return "Input two has the largest number"
  } else{
    return "Input one and input two are even"
  }
}

function getNum(num){
  var numArray = []
  for (i = num.length-1; i>=0;i--){
    if (num[i] ==='.'){
      break
    } else {
      numArray.unshift(num[i])
    }
  }
  numArray = numArray.join("")
  return Number(numArray)
}
console.log(largerNum(one,two))


function assert(actualOutput, expectedOutput, descriptionOfWhatShouldHappen){
  if (actualOutput === expectedOutput){
    return 'hell yeahhhhhhhh'
  } else if{
    return descriptionOfWhatShouldHappen
  }
}

/**
 * great job actually getting the solution
 * great job debugging/ catching errors as they come
 * 
 * points of improvement
 * TALK TO THE INTERVIEWER - practice rubber ducking
 * make sure to test right away 
 * variable naming
 * review assert// review all homework parts and re-do the problems using what I suggested to build a better understanding
 */