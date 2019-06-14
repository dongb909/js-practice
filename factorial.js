total = 1
function factorial (number) {
    for (let i =1; i <= number; i++){
        total *=i
    }
    return total
}
console.log(factorial(4))