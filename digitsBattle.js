/*Starting from the left side of an integer, adjacent digits pair up in "battle" and the larger digit wins. If two digits are the same, they both lose. A lone digit automatically wins.

Create a function that returns the victorious digits.

To illustrate:

battleOutcome(578921445) ➞ 7925
// [57]: 7 wins; [89] 9 wins; [21] 2 wins;
// [44] neither wins; 5 (automatically) wins
Examples
battleOutcome(32531) ➞ 351
// 3 deffeats 2, 5 defeats 3, 1 is a single.

battleOutcome(111) ➞ 1
// 1 and 1 tie, so neither move on, last 1 is a single.

battleOutcome(78925) ➞ 895
Notes
There are no winners in a battle with equal digits (neither should be printed).
If the length of the number is odd, the lone digit should be printed at the end of the number.*/

function digitsBattle(num){
    var nums = String(num).split("")        //DOESN'T WORK BECAUSE YOU'RE COMPARING STRINGS AS IF THEY'RE NUMBERS
    var wins = ""
    while (nums.length >1) {
        console.log(nums)
        if (parseInt(nums[0])> parseInt(nums[1])){
            wins = wins.concat(nums[0])
            nums = nums.slice(2)
        } else if (parseInt(nums[1]) > parseInt(nums[0])){
            wins = wins.concat(nums[1])     
            nums = nums.slice(2)
        } else if (parseInt(nums[0]) === parseInt(nums[1])){
            nums = nums.slice(2)
        //} else if (parseInt(num[0]) && num[1] === undefined){       //no dont' do this bc it won't include the last single digit
           // wins = wins.concat(nums[0])
        }
        if (nums.length === 1){
            wins = wins.concat(nums[0])
        }
    }
    return wins
}

console.log(digitsBattle(578921455))