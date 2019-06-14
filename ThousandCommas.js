//Create a function that takes a number as an argument and returns a string formatted to separate thousands.

function thousandCommas(num){
    var newNum = ""
    var incre = 0
    for (var i = num.length - 1; i >=0; i--){
        newNum = num[i] + newNum
        incre += 1
        if (incre === 3){
            newNum = ',' + newNum
            incre = 0
        }
    }
    return newNum
}



testing = "10000000000"
console.log(thousandCommas(testing))
