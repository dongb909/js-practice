function isPrime(number) {
    for (let i = 2; i < Math.abs(number); i++){
        if (number % i === 0){
            return false
        }
    }
    return true
}

function nthPrime(n){
    primeArray = []
    for (let i = 2; primeArray.length <= n ; i++){
        if (isPrime(i)) {
            primeArray.push(i)
        }
    }
    return primeArray[n-1]
}

console.log(nthPrime(3)) 