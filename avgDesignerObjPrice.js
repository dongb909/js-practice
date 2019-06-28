function calculateAveragePricePerDesigner(inventory) {
    var allDesignersObj = {}
    allDesignersObj['designers'] = []
    for (var i =0; i<inventory.length;i++){
        var sum = 0
        var eachDesignerObj = {}
        var inputDesignerObj = inventory[i]
        eachDesignerObj['name'] = inputDesignerObj.name
        for (var j = 0; j<inputDesignerObj.shoes.length;j++){
            sum += inputDesignerObj.shoes[j].price
        }
        var avg = sum/inputDesignerObj.shoes.length
        eachDesignerObj['averagePrice'] = avg
        allDesignersObj['designers'].push(eachDesignerObj)
    }
    return allDesignersObj
    
}




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


  console.log(calculateAveragePricePerDesigner(currentInventory))