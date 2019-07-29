var peakIndexInMountainArray = function(A) {
    if (A.length <3){
        return 'A is not a mountain'
    }
    var finalPeak = 0
    for (var i = 1; i<A.length;i++){
        var left = A[i-1]
        var peak = A[i]
        var right = A[i+1]
        if (right === undefined){
            break
        }
      console.log(left, peak, right)
        if (left < peak && peak>right){
            finalPeak = peak
            var leftSide = A.slice(0,left+1)
            var rightSide = A.slice(right)
     
//---------------------------------------------------------------------
            while (leftSide.length > 1){
                if (leftSide[0]<leftSide[1]){
                    leftSide = leftSide.slice(1)
                } else if (leftSide [0]>leftSide[1]){
                    return 'A is not a mountain: ' + leftSide[0] + ' > ' + leftSide[1]
                }
            } 
            while (rightSide.length >1) {
                if (rightSide[0] > rightSide[1]){
                    rightSide = rightSide.slice(1)
                
                } else if (rightSide[0] < rightSide[1]){
                    return 'A is not a mountain: ' + rightSide[0] + ' < ' + rightSide[1]
                }
            }
        } 
        
    }
    return finalPeak
};


console.log(peakIndexInMountainArray([0,1,0]))

if (1 === 0){
    console.log('first if')
} else {
    console.log('second if')
}