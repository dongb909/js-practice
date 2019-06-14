//return the index of the first vowel in a string
function firstVowel(string){
    for (var i = 0; i< string.length; i++){
        if (string[i] =='a' || string[i] =='e' ||string[i] =='i' ||string[i] =='o' ||string[i] =='u'){
            return i
        }
    }
}

testing = "Hhhhi how are you"
console.log(firstVowel(testing)) 