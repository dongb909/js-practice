function hackerSpeak(nstring){
    var string = nstring.split("")
    var newString;
    for (var i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === 'a'){
            string[i] = 4
        } else if (string[i].toLowerCase() === 'e'){
            string[i] = 3 
        } else if (string[i].toLowerCase() === 'i'){
            string[i] = 1
        } else if (string[i].toLowerCase() === 'o'){
            string[i] = 0
        } else if (string[i].toLowerCase() === 's') {
            string[i] = 5
        }
    }
    newString = string.join("")
    return newString
}

testing = "hi speaking"
console.log(hackerSpeak(testing))