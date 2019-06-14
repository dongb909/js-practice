function powerOfTwo (number) {
    rootNum = Math.sqrt(number);
    if (rootNum === Math.round(rootNum)){
        return true
    }
    return false
}

console.log(powerOfTwo(100)) 