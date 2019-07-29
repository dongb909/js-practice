var sortedSquares = function(A) {
    var squarredArr = A.map(function(num){
        return num**2                   //don't forget to RETURN!!
    }).sort(function(a,b) { //just continue the method and sort after mapping
        if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }                    
    })
    
    return squarredArr
};

console.log(sortedSquares([-7,-3,2,3,11]))