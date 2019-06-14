// // var num = prompt("Please enter a whole number: ");
// // function isPrime(num){
// //     if (num === 2) {
// //         return(num + " is a prime number");
// //     }
// //     else if (num === 3) {
// //         return(num + " is a prime number");
// //     }
// //     else if (num %2 !== 0 && num %3 !==0) {
// //         return(num + " is a prime number");
// //     }
// //     else {
// //         return(num + " is NOT a prime number");
// // //     }
// // // }

function isPrime(num) {
    for (var i = 2; i < Math.abs(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(-10))
