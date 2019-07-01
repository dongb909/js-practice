function detectOutlierValue(string) {
    var numbers = string.split(' ')
    var oddCount = 0
    var evenCount = 0
    var outlierOddIndex = 0
    var outlierEvenIndex = 0
    for (var i = 0; i < numbers.length; i++) {
        var currentNum = Number(numbers[i])
        if (currentNum % 2 === 0) {
            evenCount += 1
            outlierEvenIndex = i
        } else if (currentNum % 2 === 1 || currentNum === 1) {
            oddCount += 1
            outlierOddIndex = i
        }
    } if (evenCount === 1 && evenCount < oddCount) {
        return 'The outlier number is an even ' + numbers[outlierEvenIndex] + ' at index number ' + (outlierEvenIndex + 1)
    } else if (oddCount === 1 && oddCount < evenCount) {
        return 'The outlier number is an odd ' + numbers[outlierOddIndex] + ' at index number ' + (outlierOddIndex + 1)
    }
}

console.log(outlierFindUsingObject("2 4 7 8 10"))

// filter twice
// fitler evens
// filter odds
// compare lengths

function outlierFind(numString) {
    var numArray = numString.split(' ').map(function (strNum) {
        return Number(strNum)
    })
    var oddNums = numArray.filter(function (num) {
        return num % 2 === 1
    })
    var evenNums = numArray.filter(function (num) {
        return num % 2 === 0
    })
    var oddLength = oddNums.length
    var evenLength = evenNums.length
    if (oddLength === 1 && evenLength > 1) {
        return 'odd is outlier'
    } else if (evenLength === 1 && oddLength > 1) {
        return 'even is outlier'
    } else {
        return 'no outliers'
    }
}

function outlierFindUsingObject(numString) {
    var numArray = numString.split(' ').map(function (strNum, idx) {
        return {
            number: Number(strNum),
            idx: idx
        }
    })
    var oddNums = numArray.filter(function (obj) {
        return obj.number % 2 === 1
    })
    console.log(oddNums)
    var evenNums = numArray.filter(function (obj) {
        return obj.number % 2 === 0
    })
    console.log(evenNums)
    var oddLength = oddNums.length
    var evenLength = evenNums.length
    if (oddLength === 1 && evenLength > 1) {
        return 'odd is outlier' + oddNums[0].idx
    } else if (evenLength === 1 && oddLength > 1) {
        return 'even is outlier' + evenNums[0].idx
    } else {
        return 'no outliers'
    }
}