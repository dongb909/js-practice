 //given an string of numbers, return an array or numbers greater than 10

 var stringOfNumbers = "1,19,20,7,8,22"

 function numGreaterThanTen(string){
     var stringArray = string.split(",")
     var finalArray = stringArray.map(function(stringNumber){
         return parseInt(stringNumber)
     }).filter(function(num){
         return num > 10

     })
     return finalArray = finalArray.join(", ")      //don't use String()
    //  return JSON.stringify(finalArray)      //STRINGS THE ENTIRE ARRAY

 }

 console.log(numGreaterThanTen(stringOfNumbers))