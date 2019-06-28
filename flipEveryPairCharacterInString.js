function flipPairs(string){
    var newString = ''
    for (var i = 0; i< string.length; i+=2){
        if (string[i+1] !== undefined){
            newString = newString.concat(string[i+1])
            newString = newString.concat(string[i])
        } else {
            newString = newString.concat(string[i])

        }
    }
    return newString
}


var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output)
//answer output : hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!