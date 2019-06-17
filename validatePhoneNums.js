/*Write a function that returns true if the phone number is in a valid format. The valid formats are:
With Country Code

+1-892-445-7663
1-892-445-7663
1 (892) 445-7663
1.892.567.8901
1/892/567/8901
1 892 567 8901
18925678901
Without Country Code

892-445-7663
892.567.8901
892/567/8901
892 567 8901
(892) 445-7663
8925678901

EXAMPLES
validate("578-332-1114") ➞ true

validate("57-332-1114") ➞ false

validate("577 332  1114") ➞ false
# More than one space in between digits clusters.

validate("57 332 1114") ➞ false
# Unacceptable digit cluster length.

validate("157%332-1114") ➞ false
# Unacceptable delimiter.

Notes
The country code will always be +1 or 1.
Each phone number will contain either 10 or 11 digits (depending on whether the country code exists).
There must either be exactly one space, a delimiter, or no space at all between the digit clusters.
You do not have to worry about extensions.
*/

function no_1(num){
    var integers = '0123456789'
    for(var i = 0; i<num.length; i++){
        if (integers.indexOf(num[i]) ===)
    }
}

/*
function1 = ### ### #### if index 0,1,2,4,5,6,8,9,10 are numbers and if index 3 and 7 are not numbers but value 3 = value 7 where the value is a space, -, /, or .
    return true
    can do if length = 10 or length = 11
function 2 = if index 0 ===( and index 4 ===) and index 8 === -
    if length = 10 or length = 11dig
function 3 = where all ten digits are numbers only 
        can also be combined with the 11 digit number


function4 = for +1 part

final function does if/else if statements while calling all the above functions
