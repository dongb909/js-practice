function findingAZ(string) {
    string.toLowerCase()
    count = 0
    position=[]
    for (let i = 0; i<string.length; i+=2){
        let j = i+1;
        if (string[i] === 'a' && string[j] ==='z');
            count +=1
            position.push([i,j])
    }
    return (position, count)    // how to print both???
} 

random = "azaz"
console.log(findingAZ(random))