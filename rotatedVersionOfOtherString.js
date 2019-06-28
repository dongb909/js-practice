function rotatedVersion(string1,string2){
    var doubledString = string1.concat(string1)
    if (doubledString.includes(string2)){
        return true
    }
    return false
}


console.log(rotatedVersion('hello world', 'orldhello w'))