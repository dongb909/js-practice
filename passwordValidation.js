/*Create a function that validates a password to conform to the following rules:

Length between 6 and 24 characters.
At least one uppercase letter (A-Z).
At least one lowercase letter (a-z).
At least one digit (0-9).
Maximum of 2 repeated characters.
Supported Special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .
Examples
validatePassword("P1zz@") ➞ false  // too short
validatePassword("iLoveYou") ➞ false  // missing number
validatePassword("Fhg93@") ➞ true  // OK */

// function passwordValidation(string){
//     var stringArr = string.split('')
//     var upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//     var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     var num = '0123456789'.split('')
//     var specialCharacters = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .'.split(' ')
//     var pwlength = true
//     var oneUpper = false
//     var oneLower = false
//     var onedigit = false
//     // var doubleConsecOnly = true      can just return false
//     if (string.length < 6 || string.length > 24){
//         return false
//     }
//     for (var i = 0; i< stringArr.length; i++){
//         if (upperAlphabet.includes(string[i])){
//             stringArr.find(function(char){

//             })
//             oneUpper = true
//         } if (lowerAlphabet.includes(string[i])){
        
//         } if ('0123456789'.includes(string[i])){
//             onedigit = true
//             console.log(onedigit)
//             continue
//         } if (!upperAlphabet.includes(string[i]) && !lowerAlphabet.includes(string[i]) && !specialCharacters.includes(string[i]) && !num.includes(string[i])){
//             return false
//         } if (stringArr[i] === stringArr[i+1] ===stringArr[i+2]){
//             return false
//         }
//     }if (pwlength === true && oneUpper ===true && oneLower ===true && onedigit ===true){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(passwordValidation("Aabcde2341232432"))




// find takes in a function that returns true or false. the first time it hits true then it'll break out and return that VALUE for you. if it can't find it then it returns UNDEFINED thought it USES TRUE OR FALSE AS EVALUATION
// it iterates through the arr you call the method it and iterates on its own. no need forloop. THUS MUST SET TO A VARIABLE TO SAVE ANSWER



function passwordValidation(string){
        var stringArr = string.split('')
        var upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
        var num = '0123456789'.split('')
        var specialCharacters = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .'.split(' ')
        if (string.length < 6 || string.length > 24){
            return false
        } 
        var upperPresent = stringArr.some(function(char){//some returns a boolean if at least 1 meets the condition and it'll return true or false
            return upperAlphabet.includes(char)});          // some you can pass in a function to check something exists for find returns first appearance, include you can only check 1 character at a time
              //when it 'finds' a char that MEETS your function's CONDITION of true or flase THEN it'll return that char
        // your function must ALWAYS RETURN a boolean or else the .find method will return undefined
        var lowerPresent = stringArr.find(function(char){
            return lowerAlphabet.includes(char)});   
        var digitPresent = stringArr.find(function(char){
            return '0123456789'.includes(char)});
        // var specialCharPresent = stringArr.find(function(char){
            // return specialCharacters.includes()
        // })
        // if (upperPresent && lowerPresent && digitPresent && !specialCharacters.includes(string[i]) {    //NO!! there's no way to do it with .find on specialcharacters alone bc password can just not have one. 
        //in order to do then then concat all arrays and make the condition where the char doesn't match anything at all and return undefined or return the character depending on how you right it
        var allChar = upperAlphabet.concat(lowerAlphabet,num,specialCharacters)
        var badSpecialChar = stringArr.find(function (char){
            return !allChar.includes(char)
        });       
             //if NOT included
        for (var i = 0; i<stringArr.length;i++){
            if (stringArr[i] === stringArr[i+1] && stringArr[i] ===stringArr[i+2]){
                return false
            }
        }
        console.log(badSpecialChar, upperPresent, lowerPresent, digitPresent)
        if (upperPresent === undefined || lowerPresent === undefined || digitPresent === undefined || badSpecialChar !== undefined){
            return false
        } else{
            return true
        }
    }
    
    console.log(passwordValidation("Aacd!!e234"))






    // can only check for values in includesbut for sum you can do a function to return true if num > 100 without knowing the values
    // ex: arry.some(function(num):
    // return num>100) will return true

    // .every also takes in a function but everything in the arr must meet the condition returns true or false
    // use find when care about the value of first one and use some when you only care that it exists true or false

    // don't use indexOf, use findIndex instead (take in function)