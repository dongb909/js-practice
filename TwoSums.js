var twoSum = function(nums, target) {
    for (i=0;i<nums.length;i++){
        for (j=nums.length-1;j>0;j--){
            if (nums[i] + nums[j] === target && i!==j){
                return [nums[i], nums[j]]
            }
        }
    }
};

console.log(twoSum([2,7,11,15],9))


var twoSum = function(nums, target) {
    for (i=0;i<nums.length;i++){
        for (j=i+1;j<nums.length;j++){
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};