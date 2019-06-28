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




// function countAllCharacters(string){
//     var dict = {}
//     for (var i = 0; i <string.length; i++){
//         if (dict[string[i]]){             ///NOT if (string[i] in dict) ------------------------------
//             dict[string[i]] +=1
//         } else{
//             dict[string[i]] = 1  
//         }
        
//     }
//     return dict
// }

// console.log(countAllCharacters("banana"))

// var answer = 4;
// console.log('should be true:', answer === 4);       // the string to print, the numeric/boolean to print


// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// test.forEach(function(num) {
//     if (num % 3 === 0){
//         num += 100
//     console.log(num)
//     }
    
// })
// console.log(test)

// ^^^^^^^^^^^?????????????????????????
// ????????????????????????????
// function modulo(num1, num2) {
//     if (num2 ===0){
//       return NaN
//   } if (num1 ===0){
//       return 0
//   } if (num1 === NaN || num2 === NaN){
//       return NaN
//   }
// }





// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The product between 1 and 4 is 1 * 2 * 3 = 6.
// If num2 is not greater than num1, it should return 0.

// function getElementsThatEqual10AtProperty(obj, key) {
//     // your code here
//     var newA = []
//     if (obj[key]===undefined){
//         return []
//     }
//     for (var i = 0; i < obj[key].length; i++){
//         if (obj[key][i] ===10){
//             newA.push(obj[key][i])
//         } else if (obj[key].length ===[]){
//           return []
//         } else if (Array.isArray(obj[key]) ===false){
//             return []
//         }
//     }
//     return newA
//   }


//   var obj = {
//     key: []
//   };
//   var output = getElementsThatEqual10AtProperty(obj, 'key');
//   console.log(output);
function renderInventory(inventory) {
    var fullArray = []
    for (var i = 0; i<inventory.length; i++){
        console.log(inventory[i].name)
       var eachLine = []
        for (var keyOutter in inventory[i]){
            if (Array.isArray(inventory[i][keyOutter]) === false){
                eachLine.push(inventory[i][keyOutter])
            }
            if (Array.isArray(inventory[i][keyOutter])){
                eachObjItemInner = innerObjsOfArray(inventory[i][keyOutter])
                // console.log(eachObjItemInner)
                for (var j = 0; j< eachObjItemInner.length;j++){
                    var subArr = eachObjItemInner[j].join(', ')
                    // tempArr = eachLine.slice()
                    // tempArr.push(subArr)
                    eachLine.push(subArr)
                    // console.log(eachLine)
                    fullArray.push(eachLine)
                    fullArray.push('\n')
                    eachLine = eachLine.slice(0, 1)
                    // console.log(eachLine)
                    // eachLine = eachLine.concat(eachObjItemInner[i])
                    // fullArray = fullArray.concat(eachLine, '\n')
                    // eachLine.pop()
                }
            } 
        }
    }
    final = fullArray.join(" ")
    return final
}

  
  
  function innerObjsOfArray(arr){
      var flatArrayInner = []
      for (var i = 0; i<arr.length; i++){
          var eachItem = []
          for (var keyInner in arr[i]){
            eachItem.push(arr[i][keyInner])
        }
        flatArrayInner.push(eachItem)
      }
    //   console.log(flatArrayInner)
      return flatArrayInner
    }

    var currentInventory = [
        {
          name: 'Brunello Cucinelli',
          shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
          ],
        },
        {
          name: 'Gucci',
          shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
          ]
        }
      ];

console.log(renderInventory(currentInventory))