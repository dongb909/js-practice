// accepts an array and an index. reverse based on that pivot point for each half
// [1,2,3,4,5, 6], 2 => [,2,1,3,6,5,4]

function reverseByPivot(array, p) {
    var firstHalf = array.slice(0,p)
    var firstReverse = firstHalf.reverse()
    var secHalf = array.slice(p+1, array.length)
    var secReverse = secHalf.reverse()
    // var pivot = []
    // pivot.push(array[p])
    var pivotArray = []
    pivotArray = pivotArray.concat(firstHalf)
    pivotArray = pivotArray.concat(array[p])        //cannot add arrays with +...weird...
    pivotArray = pivotArray.concat(secReverse)
    return pivotArray
}
testing = [1,2,3,4,5,6]
console.log(reverseByPivot(testing,2))