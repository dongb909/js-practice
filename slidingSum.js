function sumfunc(subarray){
    var sum = 0
    for (var s = 0; s < subarray.length; s++){
        sum += subarray[s]    
    }
    return sum
}

function slidingSum(array, n, total){
    var currentArray = []                                   
    var finalArray = []                             //arrays that sum to total
    for (var i = 0; i < n;i++){                     //creating the an array of the first n of numbers (not the whole array)
        currentArray.push(array[i])
    } 

    if (sumfunc(currentArray) === total){           //if adds to total then place the array in the final array variable
        finalArray.push(Array.from(currentArray))              //if not then it doesn't do anything
// CAN'T JUST DO finalArray.push(currentArray) because you're using a REFERENCE!!!
// ALSO CANNOT DO         finalArray.push(currentArray.from())   BC IT DOESN'T WORK
            // ?????????????????SO THEN WHEN CAN DO USE A METHOD AND YOU LIKE () EMPTY VS WHEN YOU HAVE TO PUT SOMETHING IN THE () like currentArray.shift()??????????
//have to make an entire new copy
//basically, you can push INDIVIDUAL characters ok. but if you want to push an ARRAY, you have to push a COPY for it to work
//don't worry about the WHY. it's like how you can't modify a string. it's just a property you just have to know
    }

//THINGS ARE RIGHT UP TO HERE=================================================
    for (var j = n; j< array.length; j++){  //starting at n and not 1 because it's already in the current array, now we're pushing the next number into the current array
        currentArray.shift()                // take out 1st number
        currentArray.push(array[j])         // add next number until you reach the last number in the orginal array
        if (sumfunc(currentArray) === total){
            finalArray.push(Array.from(currentArray))       //if equal total then add another array to the final array
            //Even though it's the first array window, you have to push it to get an array in an array, you can't just reassign because later when you add other windows, it'll look like [1,2,3,[4,5,6]] which isn't waht you want
        } //??????????????????????WHEN CAN WE USE Array.METHOD() VS DOING IT DIRECTLY ON A VARIABLE? IS THERE A SET WHERE YOU JUST USE Array.METHOD?
// even if you already made a finalArray you STILL HAVE TO MAKE A NEW COPY OF THE ADDITIONAL CURRENT STRING

    }
    return finalArray
}

testing = [3,4,1,9,9,0,3,5,4]
console.log(slidingSum(testing,3,8))


//Array is a class with functions within (aka method)
//static from is scoped inside the Array, not acts on the object you're doing it to.