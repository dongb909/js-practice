//Create a function takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
function indexShuffle(shuffle){
    var odd = ""
    var even = ""
    for (var i = 0; i < shuffle.length; i++){
        if (i % 2 === 1){
            if (shuffle[i] !=" "){
               odd = odd.concat(shuffle[i]); 
            }     
        } else {
            if (shuffle[i] !=" "){
                even = even.concat(shuffle[i])
            }
        }
            
            
    }
    var oddEven = odd + even
    return oddEven
}


var testing = "Hi how are you"
console.log(indexShuffle(testing)) 