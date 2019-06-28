function renderInventory(inventory){
    var flatList = ''
    for (var i =0; i<inventory.length;i++){
        var brandObj = inventory[i]
        for (var j = 0; j<brandObj['shoes'].length;j++){
            flatList += brandObj.name + ', ' + brandObj.shoes[j].name + ', ' + brandObj.shoes[j].price + '\n'
        }

    }
    return flatList
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