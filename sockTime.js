/*Joseph is in the middle of packing for a vacation. He's having a bit of trouble finding all of his socks, though.

Write a function that returns the number of sock pairs he has. A sock pair consists of two of the same letter, such as "AA". The socks are represented as an unordered sequence.

Examples
sockPairs("AA") ➞ 1

sockPairs("ABABC") ➞ 2

sockPairs("CABBACCC") ➞ 4
Notes
If given an empty string (no socks in the drawer), return 0.
There can be multiple pairs of the same type of sock, such as two pairs of CC for the last example.*/

//create an object of the diffent types of socks
//assuming all characters are capitalized
//key 1 = sockType, value = character
//key 2 = pairArr   value = arr with 2 indexes filled or not
//key 3 = pairCount value = count
//iterate through the arr using forloop
//add sockType if not present
//fill out array in pairArr at each character hit
//if pairArr is full with index 1 ===char then increment pairCount by 1
// reset the full arr to an empty arr
// at the end, disregard unpaired socks in count and results
//TOOOOO LONGGGGG
//PUSH TO ARRAY OF EACH CHAR AND THEN DIVIDE ARRAY LENGTH OF EACH BY 2.floor AND SUM THEM ALL AT END



// function sockTime(string){
//     var sockTypesObj = {}
//     for (var i = 0; i<string.length;i++){
//         if (!(string[i] in sockTypesObj)){
//            // sockTypesObj[string[i]] = [string[i]]           //don't need the array if you're already counting each sock
//             sockTypesObj[string[i]] = 1
//         } else {
//             //sockTypesObj[string[i]].push(string[i])
//             sockTypesObj[string[i]] += 1
//         }
    
//     }
//     var totalSum = 0
//     for (var key in sockTypesObj){
//         totalSum += Math.floor(sockTypesObj[key]/2)
//     }
//     return totalSum
// }


// console.log(sockTime('las'))

// function sockTime(string) {
//     var sockSet = new Set()
//     var totalSockPairs = 0
//     for (var sock of string) {
//         if (!sockSet.has(sock)) {
//             sockSet.add(sock)
//         } else {
//             totalSockPairs += 1
//             sockSet.delete(sock)
//         }
//     }
//     return totalSockPairs
// }

// console.log(sockTime('lalsss'))

// function sockTime(string) {
//     var sortedSocks = string.split('').sort()
//     var totalSockPairs = 0
//     while (sortedSocks.length > 0) {
//         if (sortedSocks[0] === sortedSocks[1]) { //match
//             totalSockPairs += 1
//             sortedSocks = sortedSocks.slice(2)
//         } else {
//             sortedSocks = sortedSocks.slice(1)
//         }
//     }
//     return totalSockPairs
// }

// console.log(sockTime('lalsss'))

/*Examples
sockPairs("AA") ➞ 1

sockPairs("ABABC") ➞ 2

sockPairs("CABBACCC") ➞ 4
Notes
If given an empty string (no socks in the drawer), return 0.*/

//USE SET DATA STRUCTURE
// function sockTime(string){
//     var singleSocks = new Set()
//     for (var i = 0; i<string.length; i++){

//     }
// }






// USE SLICE METHOD
function sockTime(string){
    var separateSocks = string.split('')                 //cannot slice string only arrays
    separateSocks.sort()
    var sockPairCount = 0
    //for (var i = 0; i<separateSocks.length; i +=2){     // dont' use this for the slicing bc i won't be for the new arrays
    while (separateSocks.length >0){                    //don't need var i because separateSocks is already the variable used and you're already iterating with the slices
        if (separateSocks[0] === separateSocks[1]){
            sockPairCount +=1           // must slice so it starts at the right index
            separateSocks = separateSocks.slice(2)
        } else{
            separateSocks = separateSocks.slice(1)
        }
    }                                    //slice equivalent in string is .substring
    return sockPairCount
}

console.log(sockTime("CBBCTA"))






