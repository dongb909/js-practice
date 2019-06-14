// var anima = ['dog', 'cat', 'penguin', 'pig']

// function findAnimal(animal, animals) {
//     if (animals.includes(animal)) {
//         return true;
//     }
// //     return false;
// // }


// var anima = ['dog', 'cat', 'penguin', 'pig']

// function findAnimal(animal, animals) {
//     for (var i = 0; i < animals.length; i++) {
//         if (animal === animals[i]){
//             return true
//         }
//     }
//     return false
// }

// console.log(findAnimal('horse', anima))


function itemInArray(item, array) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]){
            return true;
        }
    }
    return false;
}

names = ['Eric', 'Jules', 'Andrew', 'Allen']
console.log(itemInArray('Eric', names)) 