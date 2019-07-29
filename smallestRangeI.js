var smallestRangeI = function(A, K) {
    var arrB = A.map(function(num,){
        return num + K
    })
    arrB.sort(function(a,b){
        if (a>b){
            return 1
        } else if (a < b){
            return -1
        } else {
            return 0
        }
    })
    
    var arrBDifference = arrB[arrB.length - 1] - arrB[0]
    return arrBDifference
   
};


console.log(smallestRangeI([0,10],2))