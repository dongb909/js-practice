//return the number of time each letter appeared in a string
function letterTimes(sentence){
    var diction = {}
    for (var i = 0; i < sentence.length ;i++){
        if (diction[sentence[i].toLowerCase()]){           //check to see if present first. ORDER MATTERS!
            diction[sentence[i]] += 1
        } else if (sentence[i] === " "){            // take out spaces
            continue
        } else {
            diction[sentence[i].toLowerCase] = 1        //if not there THEN add
        }
        
    }
    return diction
}

console.log(letterTimes("hi how are you")) 