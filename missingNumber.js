//Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNum(array){
   for (var j = 1; j <=10; j++){
        if (array.includes(j)){
            continue
        } else {
             return j    
        }
            
            
        
    }
}

testing = [10,8,5,3,2,4,7,1,9]
console.log(missingNum(testing)) 

// //this is the 2nd time you did this and you did a better job
// function missingNumber(array){
//     var missing = []
//     for (var i = 0; i < 11; i++){
//         if (array.indexOf(i) === -1){
//             missing.push(i)
//         }
//     }
//     return missing
// }

// testing = [0,1,2,3,4,5,6,8,9]
// console.log(missingNumber(testing))


// //therefore, can use .include() or .indexOf