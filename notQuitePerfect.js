/*A perfect number is a number that is equal to the sum of all its proper (non-self) divisors. Take 6 for example:

6 = 1 + 2 + 3
A number that is equal to the sum of all its proper divisors -- provided that one of them is negative -- is not quite perfect, but admirable.

To illustrate. The proper divisors of 12 are 1, 2, 3, 4, 6, totalling 16. However, if 2 is negative, the total would be 12, the number itself. 12 is therefore an admirable number.

12 = 1 - 2 + 3 + 4 + 6
Create a function that takes a number n as input.

If n is perfect, return "Perfect".
If n is admirable, return the proper divisor that must be rendered negative to make the sum of the proper divisors equal to n.
If n is neither perfect nor admirable, return "Neither".
Examples
admirable(6) ➞ "Perfect"

admirable(12) ➞ 2

admirable(18) ➞ "Neither"*/


// 12-4=8
// 12+4 = 16       4*2 = 8
// 8+8 = 16



function admirable(num){
    //set num divided by any number smaller than it and make an array of those numbers if modulo is 0
    //sum up the array and set if equal to num
    //if not equal then iterate through the array and subtract(instead of add like before) to see if equal to num
    //if not then return Neither
    var divisibleNums = []
    var sum = 0
    for (var i = 1; i<num; i++){
        if (num % i ===0){
            divisibleNums.push(i)
            sum+=i
        }
    } 
    if (sum === num){
        return 'Perfect'
    } 

    for(var j = 0; j < divisibleNums.length; j++){
        if (sum - divisibleNums[j] === num){            //NO!! because if num is 12, sum is 16, if want 12 then must subtract 4 but 1-2+3+4+6 = 12 while 1+2+3-4+6 = 9!!!!
            return divisibleNums[j]/2                     // 2 is 1/2 of 4 and it'll always be like that
        }                                               //return what is subtracted DIVIDED by 2, but don't subtract AFTER dividing
    }
  
    return 'Neither'
}

console.log(admirable(9))