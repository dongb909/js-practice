
function sumDigits(num) {
    var string = num.toString()
    var nNum = string.split("")
    var sum = 0
    if (num < 0){       
        nNum[1] = -nNum[1]  
        for(var i = 1; i < nNum.length; i++){
            sum += Number(nNum[i])
        }
    } else {
        for(var i = 0; i < nNum.length; i++){
            sum += Number(nNum[i])
        }
    }
    return sum
  }





