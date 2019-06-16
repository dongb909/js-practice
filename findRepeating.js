/*Create a function that accepts a string and groups repeated values. 
The groups should have the following structure: [[value, first_index, last_index, times_repeated], ..., 
[value, first_index, last_index, times_repeated]].
value: Character being assessed.
first_index: Index of characters first appearance.
last_index: Index of characters last appearance.
times_repeated: Number of consecutive times character repeats.
An empty string should return an empty array: "" ➞ []
Non-repeated values should start and end on the same index.
*/

function findRepeating(string){
    var repeatsFound = []
    var charRepeat = 1
    var currentChar = string[0]     //A
    var startIndex = 0
    var endIndex; 
    for (var i = 1; i<string.length; i++){
        if (string[i] === string[i-1]){
            charRepeat +=1
        } else {
            endIndex = i-1
            var currentArray = [currentChar, startIndex, endIndex, charRepeat]
            var current = Array.from(currentArray)                                    // can't do repeatsFound = repeatsFound.push(Array.from(currentArray))
            repeatsFound.push(current)
            currentChar = string[i]
            startIndex = i
            charRepeat = 1
        }

    }

   return repeatsFound
}

console.log(findRepeating("aabbbc"))