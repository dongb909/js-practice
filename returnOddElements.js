// var animals = ['dog','cat','penguin', 'pig'];

// function oddPositions(someList) {
//     var newArray = []
//     for (var i = 0; i < someList.length; i++) {
//         if (i % 2 !== 0) {
//             newArray.push(someList[i]);
//         }
//     }
//     return newArray;
// }

// console.log(oddPositions(animals))

oddArray = []

function oddElements(someArray) {
    for (var i = 0; i < someArray.length; i++){
        if (i % 2 !== 0) {
            oddArray.push(someArray[i]);
        }
    }
    return oddArray
}

food = ['figs', 'berries', 'fries', 'oranges', 'apples']
console.log(oddElements(food))