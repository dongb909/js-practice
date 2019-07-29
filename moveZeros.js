var moveZeroes = function(nums) {
    for (var i = 0; i< nums.length; i++){
        if (nums[i]===0){

        }
    }
};

console.log(move([0,1,0,3,12]))
// 1 0 3 12 0
// 1 3 12 0 0 

function move(nums) {
    var copiedArr = nums.slice()
    while(nums.length > 0) {
        nums.shift()
    }
    var nonZeroNums = copiedArr.filter(function(num) {
        return num !== 0
    })
    var zeros = copiedArr.filter(function(num) {
        return num === 0
    })
    while (nonZeroNums.length > 0) {
        nums.push(nonZeroNums.shift())
    }
    while (zeros.length > 0) {
        nums.push(zeros.shift())
    }
    return nums
}

//doing this because the question doesn't want you to return a NEW array. 