var pets = ['cat', 'dog', 'parrot', 'lizard', 'hamster']

// function petTypeByLength(pets){
//     return pets.map(function(pet){
//         return pet.length
//     })
// }

// console.log(petTypeByLength(pets))


function petTypeByLength(pets){
    return pets.filter(function(pet){
        return pet.length ===3
    })
}

console.log(petTypeByLength(pets))