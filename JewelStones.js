var numJewelsInStones = function(J, S) {
    var jewelCount = 0
    var filtered =  S.split("").filter(function(char){
        if (J.includes(char)){
            jewelCount +=1
            }
            return jewelCount
    })
    
};


console.log(numJewelsInStones("aA", "aAAbbbb"))