// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

function zeroes(string){
    var currentString = "";
    var longest = "";                       
    for (var i = 0; i <string.length; i++){
        if (string[i] === '0'){
            currentString = currentString.concat(string[i]);
        } else if (currentString.length > longest.length){
            longest = currentString
            currentString = ""
        }
    }
    if (currentString.length > longest.length){
        longest = currentString
    }
    return longest

}

testing = "01001110001111110000000"
console.log(zeroes(testing)) 