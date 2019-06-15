/**
 * Compress string
 * Taking a string, turn sequential characters into the number of times they appear, with the letter in front
 * 
 * yummy => y1u1m2y1
 * google => g1o2g1l1e1
 * mississippi => m1i1s2i1s2i1p2i1  
 */

 function compressString(string){
     var letterCount = 0;
     var letterCountString = ''
     var currentChar = string[0];
     var finalString = '';
     for (var i = 0; i < string.length; i++){
        if (currentChar === string[i]){
            letterCount +=1
        } else {
            finalString = finalString.concat(currentChar)     //store currentChar
            currentChar = string[i]                           //reset currentChar to the new char
            letterCountString = letterCount.toString()        //make count to a string
            finalString = finalString.concat(letterCountString) //store the count
            letterCount = 1                                   //reset the count to 1   
                                                        
        }
// it's not adding the last letter so have to do so outside the FOR loop NOT the if loop but without the need to reset again
     }
     finalString = finalString.concat(currentChar)
     letterCountString = letterCount.toString()
     finalString = finalString.concat(letterCountString)
     return finalString
 }

 console.log(compressString("yummmyy"))