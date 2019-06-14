//A pandigital number contains all digits (0-9) at least once. 
//Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

// function pandigitalNum(num){
//     var numArray = num.split("")
//     for (var i =0 ; i <10; i++){
//         if (numArray.indexOf(i) === -1)
//             return false
//     }
//     return true
// }



function pandigitalNum(num){
    var numArray = num.split("")
    numArray = parseInt(numArray)
    for (var i = 0; i < numArray.length; i++){
        for (var j = 0; j <10; j++){
            if (numArray.includes(j)){
                continue
            } else {
                return j
            }
        }
    }
}  





testing = "012345679"
console.log(pandigitalNum(testing))