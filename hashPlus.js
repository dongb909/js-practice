function hashPlus(symbols){
    hashes = 0
    pluses = 0
    for (var i = 0; i < symbols.length; i++){
        if (symbols[i] === "#"){
            hashes +=1
        }
        else if (symbols[i] === "+"){
            pluses +=1
        }
    }
    return [hashes,pluses]
}

testing ="HI#+)#($#+####+"

console.log(hashPlus(testing)) 