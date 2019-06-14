//remove all duplicates from an array and return an array of only unique numbers
function duplicateArray(dups){
    var unique = []
    for (var i = 0; i < dups.length;i++){
        if (unique.indexOf(dups[i]) === -1){
            unique.push(dups[i])
        }
    }
    return unique
}





testing = [1,1,3,4,6,7,7,9,9]
console.log(duplicateArray(testing))




