//Create a function that moves all capital letters to the front of a word

function toFront(string){
    var separateString = string.split(" ")
    var finalArray = []
    var newString = ""
    for (var i = 0; i < separateString.length; i++){
        var newSeparateString = ""
        var capital = ""
        var lowerCase = ""       //creating new strings and arrays instead of separating the word again and modifying
        for (var j =0 ; j < separateString[i].length; j++){
            if (separateString[i][j] === separateString[i][j].toUpperCase()){
                capital = capital.concat(separateString[i][j])
            } else {
                lowerCase = lowerCase.concat(separateString[i][j])  
            }
            
        }
        newSeparateString = capital + lowerCase
        finalArray.push(newSeparateString)
    }
    newString = finalArray.join(" ")   // need the (" ") to get rid of the commas
    return newString
}


testing = "Hi HoW Are YoU"
console.log(toFront(testing))