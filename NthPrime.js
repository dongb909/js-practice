function isPrime(number) {
    for (let i = 2; i < Math.abs(number); i++){
        if (number % i === 0){
            return false
        }
    }
    return true
}

function nthPrime(n){
    var primeFound = 0
    for (let i = 2; primeFound <= n ; i++){
        if (isPrime(i)) {
            primeFound +=1
            if (primeFound === n){
                var ourPrime = i
            }
        }
    }
    return ourPrime
}

console.log(nthPrime(5)) 


// define i outside
//terminating condition
//code
// incrementing i++
// git add -A
//dash is a flag a notation. do this under this condition
