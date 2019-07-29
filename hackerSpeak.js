// function hackerSpeak(nstring){
//     var string = nstring.split("")
//     var newString;
//     for (var i = 0; i < string.length; i++){
//         if (string[i].toLowerCase() === 'a'){
//             string[i] = 4
//         } else if (string[i].toLowerCase() === 'e'){
//             string[i] = 3 
//         } else if (string[i].toLowerCase() === 'i'){
//             string[i] = 1
//         } else if (string[i].toLowerCase() === 'o'){
//             string[i] = 0
//         } else if (string[i].toLowerCase() === 's') {
//             string[i] = 5
//         }
//     }
//     newString = string.join("")
//     return newString
// }

// testing = "hi speaking"
// console.log(hackerSpeak(testing))



// OR don't even have to assign a new var, can use the same one
function hackerSpeak(nstring){
    nstring = nstring.split("")
    var newString;
    for (var i = 0; i < nstring.length; i++){
        if (nstring[i].toLowerCase() === 'a'){
            nstring[i] = 4
        } else if (nstring[i].toLowerCase() === 'e'){
            nstring[i] = 3 
        } else if (nstring[i].toLowerCase() === 'i'){
            nstring[i] = 1
        } else if (nstring[i].toLowerCase() === 'o'){
            nstring[i] = 0
        } else if (nstring[i].toLowerCase() === 's') {
            nstring[i] = 5
        }
    }
    nstring = nstring.join("")
    return nstring


// function hackerSpeak(nstring){
//     var dict = {
//         a: 4, 
//         e: 3,
//         i: 1,
//         o: 0,
//         s: 5
//     }
//     var string = nstring.split("")
//     for (var i = 0; i <string.length; i++){
//         if (string[i] in dict){
//             string[i] = dict[string[i]]
//         }
//     }
//     var newString = string.join("")
//     return newString
// }   

// testing = "hi speaking"
// console.log(hackerSpeak(testing))


