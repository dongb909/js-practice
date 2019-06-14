//take in an array of names and print a string of their first initial
function names(array){
    var newString = ""
    for (var i = 0; i<array.length; i++){
        newString = newString.concat(array[i][0])
    }
    return newString
}

var namesArray = ["Alli", "Eric", "Adam"]
console.log(names(namesArray)) 