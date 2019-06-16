//Write a function that sorts the positive numbers in ascending order, 
//and keeps the negative numbers untouched (even the indexes)

function sortPosKeepNeg(array){
    var index = []
    var posNum = []
    for (var i = 0; i <array.length; i++){
        if (array[i] >= 0){
            index.push(i)
            posNum.push(array[i])
        }
    }
    posNum = posNum.sort()
    for (var j = 0; j < index.length; j++){
        array[index[j]] = posNum[j]
    }
    return array
}

testing = [6,3,-2,5,-8,2,-2]
console.log(sortPosKeepNeg(testing)) 