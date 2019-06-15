function factoral(num){
    var factoralArray = []
    for (var i = 1; i <=num; i++){
        if (num % i === 0){
            factoralArray.push(i)
        }
    }
    return factoralArray
}

console.log(factoral(12))