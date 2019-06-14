//******** take in an array of numbers and return the smallest and largest numbers
function numbersFunc(num){
    num.sort()
    console.log(num[0] +" is the smallest number and " +num[num.length-1] +" is the largest number")
}


arrayNum = [1,8,9,19]
numbersFunc(arrayNum)