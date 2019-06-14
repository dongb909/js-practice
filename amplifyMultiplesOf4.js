// take in a number and return an array from 1 to that number, multiplying 10 if divisible by 4
function sumNum(num){
    numArray =[]
    for (var i = 1; i<=num; i++){
        if (i%4 ==0){
            numArray.push(i*10)
        }
        numArray.push(i)
    }
    return numArray
}

console.log(sumNum(7))  //why not 0?