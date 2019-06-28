function findPairForSum (arr,sum){
    var sumPairs = []
    for(var i = 0; i<arr.length; i++){
      for (var j = arr.length -1; j>=i; j--){       //where j>=i, i will take care of itself as it goes through all j's at a time
        if (i===j){             // i and j would have the same numbers
          continue
        } else if (arr[i] + arr[j]=== sum){
          var singlePairs = [arr[i], arr[j]]
          sumPairs.push(singlePairs)
        }
      }
    }
    return sumPairs
  }
  
  
  console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9))