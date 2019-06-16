function positiveDominant(array){
    var uniquePos = []
    var uniqueNeg = []
    for (var i = 0; i < array.length; i++)
        if (array[i] < 0){
            if (uniqueNeg.indexOf(array[i]) === -1){
                uniqueNeg.push(array[i])
            }
                
        } else {
            if (uniquePos.indexOf(array[i]) === -1){
                uniquePos.push(array[i])
            }
        
    }
    if (uniquePos.length > uniqueNeg.length) {
        return true
    } 
    return false
}

testing = [1, 1,1,1,1 -1, -2, -2, -3]
console.log(positiveDominant(testing))

function pos(array) {
    const uniqueVals = [...new Set(array)]
    const posNumCount = uniqueVals.filter(num => num >= 0).length
    const negNumCount = uniqueVals.filter(num => num < 0).length
    return posNumCount > negNumCount
}
