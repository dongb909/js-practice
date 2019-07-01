function listAllBlackShoes(inventory) {
    var flatListArray = []
    for (var i = 0; i<inventory.length;i++){
        var designerObj = inventory[i]
        for (var j = 0; j<designerObj.shoes.length; j++){
            if (blackInString(designerObj.shoes[j].name)){
                flatListArray.push(designerObj.name + ", " + designerObj.shoes[j].name + ', ' + designerObj.shoes[j].price)
            } 

        }     
    }
    return flatListArray.join('\n')
}


function blackInString(string){
    var word = string.split(' ')
    for (var k = 0; k<word.length; k++){        // how come it doesn't work if i put else false?
        if (word[k] === 'black'){
            return true
        }
    }
    return false
}




var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain black suede moccasin', price: 1050}
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


  // console.log(listAllBlackShoes(currentInventory))

function blackShoes(currentInventory) {
  var mappedParsedEntries = currentInventory.map(function(object) {
    var currentName = object.name // Brunello
    var shoesThatAreBlack = object.shoes.filter(function(shoeEntry) {
      return shoeEntry.name.split(' ').includes('black') // tasseleledblack
    })
    var stringifiedEntries = []
    for (var i = 0; i < shoesThatAreBlack.length; i++) {
      var currentShoe = shoesThatAreBlack[i] // single shoe entry
      var stringEntry = currentName + ' ' + currentShoe.name + ' ' + currentShoe.price
      stringifiedEntries.push(stringEntry)
    }
    return stringifiedEntries.join('\n')
  })
  return mappedParsedEntries.join('\n')
}

console.log(blackShoes(currentInventory))