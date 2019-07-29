// function flatlist(objArray){
//   var flatString = ""
//   for (var i = 0; i < objArray.length; i++){
//     var designerName = objArray[i].name 
//     for (var j = 0; j < objArray[i].shoes.length; j++){
//         flatString += designerName + ', '+ objArray[i].shoes[j].name + ', ' + objArray[i].shoes[j].price + '\n' 
//     }
    
//   }
//   return flatString
// }




var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];



// console.log(flatlist(currentInventory))



// function calculateAveragePricePerDesigner(inventory){
//     var avgCost = {'designers':[]}
//     for (var i = 0; i < currentInventory.length; i++){
//         var designerObj = {};
//         designerObj['name'] = currentInventory[i].name;
//         var sumOfShoes = 0
//         for (var j = 0; j < currentInventory[i].shoes.length; j++){
//             sumOfShoes += currentInventory[i].shoes[j].price
//         }
//         var avgShoeCost = sumOfShoes/currentInventory[i].shoes.length
//         designerObj['averagePrice'] = avgShoeCost
//         avgCost.designers.push(designerObj)
//     }
    
//     return avgCost
// }

// console.log(calculateAveragePricePerDesigner(currentInventory))





// function listAllBlackShoes(inventory){
//     var flatList = ""
//     for (var i = 0; i < inventory.length; i++){
//         for (j = 0; j< inventory[i].shoes.length; j++){
//             if (inventory[i].shoes[j].name.includes('black')){
//                 flatList += inventory[i].name + ', '+ inventory[i].shoes[j].name + ', ' + inventory[i].shoes[j].price + '\n'
//             }
//         }
//     }
//     return flatList
// }

// console.log(listAllBlackShoes(currentInventory))


// function flipEveryNCharater(string, n){
//     var stringCharacters = string.split("")
//     var reversedArr = []
//     for (var i = 0; i<stringCharacters.length; i+=n){
//         if (i+n === undefined){
//             continue
//         }
//         currentArr = stringCharacters.slice(i,i + n)
//         reversedCurrent = currentArr.reverse()
//         reversedArr = reversedArr.concat(reversedCurrent)
//     }
//     return reversedArr.join('')
// } 

// console.log(flipEveryNCharater('a sho',5))


// function generateLaceDetails(inventory){
//     var expectedResults = []
//     for (var i = 0; i<inventory.length;i++){
//         for (var j = 0; j<inventory[i].shoes.length;j++){
//             var nameWord = {}
//             if (inventory[i].shoes[j].name.includes('lace')){
//                 var eachword = inventory[i].shoes[j].name.split(' ')
//                 var index = eachword.indexOf('laced')
//                 nameWord['nameWords'] = eachword
//                 nameWord['targetWordIndex'] = index
//                 expectedResults.push(nameWord)
//             }
//         }
//     }
//     return expectedResults
// }


// console.log(generateLaceDetails(currentInventory))



// function findPairForSum (arr,sum){
//     for(var i = 0; i<arr.length; i++){
//       for (var j = arr.length -1; j>=i; j--){
//         if (i===j){
//           continue
//         } else if (arr[i] + arr[j]=== sum){
//           var singlePairs = [arr[i], arr[j]]
//         }
//       }
//     }
//     return singlePairs
//   }


//   console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9))


function rotatedVersion(string1,string2){
    var doubledString = string1.concat(string1)
    if (doubledString.includes(string2)){
        return true
    }
    return false
}

console.log(rotatedVersion('hello world', 'orldhello w'))