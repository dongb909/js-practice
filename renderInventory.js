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
                    var subArr = eachObjItemInner[j]
                    // console.log(subArr)
                    // tempArr = eachLine.slice()
                    // tempArr.push(subArr)
                    eachLine = eachLine.concat(subArr)
                    // console.log(eachLine)
                    fullArray.push(eachLine.join(", "))
                    // fullArray.push(' \n ')
                    eachLine = eachLine.slice(0, 1)
                    // console.log(eachLine)
                    // eachLine = eachLine.concat(eachObjItemInner[i])
                    // fullArray = fullArray.concat(eachLine, '\n')
                    // eachLine.pop()
                }
            } 
        }
    }
    final = fullArray.join(" \n ")
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