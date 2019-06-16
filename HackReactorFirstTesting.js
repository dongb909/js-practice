// function indexOfString(string1, string2) {
//     var stringIndex = string1.indexOf(string2);
//     return stringIndex
// }
// console.log(indexOfString("Hello","ll"))


// function useSlice(array, start, end) {
//     var newArray = array.slice(start,end)       //MUST REASSIGN!
//     return newArray
//   }

// testing = [1,2,3,4]
// console.log(useSlice(testing, 1,3))

// function usingSplice(array, start, deleteCount, item) { //???????????????????/ #13
//     var newArray
//   }


// function indexOfArray(array, item) {
//     var stringIndex = array.indexOf(item);
//     if (stringIndex === -1){
//         return stringIndex
//     }
//     return stringIndex
//   }

// testing = [1,2,3,4]
// console.log(indexOfArray(testing,5))

// var dict = {}
// function addProperty(obj, key, value) { 
//     obj[key] = value
//     return obj     
// }

// console.log(addProperty(dict, "a", 1))





// function removeProperty(obj, key) {
//     delete obj[key];                //instead of delete obj.key;
//     return obj
//   }


// testDict = {"a":1, "b":2, "c":3, "d":4}                 //iterate over dictionary? getting values?? getting keys

// function iterate(dict){
//     for (var i = 0; i<dict.length; i++){
//         return dict[i]
//     }
// }

// console.log(iterate(testDict))




function countAllCharacters(string){
    var dict = {}
    for (var i = 0; i <string.length; i++){
        if (dict[string[i]]){             ///NOT if (string[i] in dict) ------------------------------
            dict[string[i]] +=1
        } else{
            dict[string[i]] = 1  
        }
        
    }
    return dict
}

console.log(countAllCharacters("banana"))