function generateLaceDetails(inventory){
    var finalArray = []
    for (var i = 0; i<inventory.length; i++){
        var currentObj = inventory[i]
        for (var j = 0; j < currentObj.shoes.length; j++){
            var laceDesignerObj = {}
            if (currentObj.shoes[j].name.includes('lace')){
                var laceArray = currentObj.shoes[j].name.split(" ")
                laceDesignerObj['nameWords'] = laceArray
                for (var k = 0; k<laceArray.length;k++){
                    if(laceArray[k].includes('lace')){
                        laceDesignerObj['targetWordIndex'] = k
                        
                    }
                }
                finalArray.push(laceDesignerObj)
            }
            
        }
            
    }
    return finalArray
}






/*want var expectedResult = [
  {"nameWords": ["tasselled", "black", "low-top", "lace-up"], "targetWordIndex": 3},{}]
*/

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

  console.log(generateLaceDetails(currentInventory))