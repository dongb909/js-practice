/*Create a function that returns true if a given inequality expression is correct and false otherwise.

Examples
correctSigns("3 < 7 < 11") ➞ true

correctSigns("13 > 44 > 33 > 1") ➞ false

correctSigns("1 < 2 < 6 < 9 > 3") ➞ true*/

//make an array of numbers
//make an array of comparators by using filter(ALWAYS HAS CALLBACK!!!!!!!)
//iterate through number pairs and place comparators in btwn so lie num1 + comparat1 + num2
// see if true or false, if false then return false because you're checking to see if the whole thing is true 


function correctSigns(string){
  //don't filter bc you'll lose the index          
    var mappedArr = string.split(' ').map(function(char,index){
     //   if ("0123456789".split('').includes(char)){                     //can't do this bc yes they have the digits but it doesn't account for numbers bigger than 1 digit
     //       return parseInt(char)
        if (index % 2 ===0){
            return parseInt(char)
        } else {
            return char //can't do continue here because there must always be a return for each index 
        }
    })
   console.log(mappedArr)
    while(mappedArr.length >2){
        if (mappedArr[1] === '<'){
            if(mappedArr[0] > mappedArr[2]){
                return false
            } else {
                mappedArr = mappedArr.slice(2)
            }
        } 
        else if (mappedArr[1] === '>'){
            if (mappedArr[0] < mappedArr[2]){
                return false
            } else {
                mappedArr = mappedArr.slice(2)
            }
        }
            
    }
    return true

}
// console.log(correctSigns("5 > 4 > 0 > 1"))

function equalityCheck(comparators) {
    var elementsArr = comparators.split(' ').map(function(elements){
        if (elements !== '<' && elements !== '>') {
            return Number(elements)
        } else {
            return elements
        }
    })
    var numbers = elementsArr.filter(function(el){
        return el !== '<' && el !== '>'
    })
    var equalties = elementsArr.filter(function(el) {
        return el === '<' || el === '>'
    })
    while (equalties.length > 0) {
        var currentEquality = equalties.shift()
        var num1 = numbers[0]
        var num2 = numbers[1]
        if (currentEquality === '<') {
            if (num1 > num2) {
                return false
            }
        } else {
            if (num1 < num2) {
                return false
            }
        }
        numbers.shift()
    }
    return true
}

console.log(equalityCheck("5 > 4 > 2 > 1"))