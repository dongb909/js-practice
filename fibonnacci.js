var fib = function(N) {
    var fibonacci = [0,1]
    if (N === 0){
        return 0
    } if (N === 1){
        return 1
    } 
    var i = 2
    while (i < N + 1){
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
        i++
    }
    return fibonacci[fibonacci.length -1]
};

console.log (fib(5))