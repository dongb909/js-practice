
function bubbleSort(array){
    var isSorted = true
    while (isSorted){
        isSorted = false
        for (var i = 0; i<array.length; i++){
            if (array[i] > array[i+1]){
                var holding = array[i]
                array[i] = array[i+1]
                array[i+1] = holding
               isSorted = true 
            }
            
        }
        
    }
    return array
}

testing = [5,2,4,1,9]
console.log(bubbleSort(testing))