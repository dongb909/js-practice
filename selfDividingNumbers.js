var selfDividingNumbers = function(left, right) {
    var selfDividingNum = []
    for (i = left; i<right+1; i++){
        if (i%i !== 0){
            continue
        }
        var numLength = String(i).length
        var varified = []
        for (j = 0; j<numLength;j++){
            if (i%String(i)[j] ===0){
                varified.push(String(i)[j])
            }
        }if (varified.length ===numLength){
                selfDividingNum.push(i)
        }
    }
    return selfDividingNum
}

console.log(selfDividingNumbers(1,22))