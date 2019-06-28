function detectOutlierValue(string){
    var numbers = string.split(' ')
    var oddCount = 0
    var evenCount = 0
    var outlierOddIndex = 0
    var outlierEvenIndex = 0
    for (var i = 0; i< numbers.length; i++){
        var currentNum = Number(numbers[i])
        if (currentNum %2 ===0){
            evenCount +=1
            outlierEvenIndex = i
        } else if (currentNum %2 ===1 || currentNum ===1){
            oddCount +=1
            outlierOddIndex = i
        }
    }    if (evenCount === 1 && evenCount < oddCount){
        return 'The outlier number is an even ' + numbers[outlierEvenIndex] +' at index number ' + (outlierEvenIndex +1)
    } else if (oddCount === 1 && oddCount < evenCount){
        return 'The outlier number is an odd ' + numbers[outlierOddIndex] +' at index number ' + (outlierOddIndex +1)
    }
}

console.log(detectOutlierValue("2 4 7 8 10"))