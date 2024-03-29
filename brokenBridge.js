/*A broken bridge can be represented by 1s and 0s, where contiguous 0s represent holes. You can walk across a bridge with a hole with a maximum width of 1, but any holes bigger than that you must fix first. For example, the bridge below is walkeable:

[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1]
This bridge is not:

[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
You own several wooden planks, each with different widths. You can patch the holes on the bridge with these planks. More specifically, a plank size n can fill a n-sized hole. If you had a plank of size 2, the un-walkeable bridge above could be filled in:

[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
But even if you only had a plank of size 1, you could still transform the unwalkeable bridge into a walkeable one:

[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
Write a function that takes in a broken bridge, an array of plank sizes, and returns true if the bridge can be patched up enough to walk over, and false otherwise.

Examples
canPatch([1, 0, 0, 0, 0, 0, 0, 1], [5, 1, 2]) ➞ true
// You can use the 5 plank to transform the 6 hole to a 1 hole.
// Leftover planks [1, 2] are okay.

canPatch([1, 0, 0, 0, 0, 0, 0, 1], [4, 1, 2, 3, 4]) ➞ false
// None of your planks are long enough (you can't combine them).

canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 2]) ➞ true

canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 1]) ➞ false
Notes
Individual planks may NOT be combined to form a longer plank.
Leftover planks are okay.*/

/**
 * i make an array that counts the size of holes
 * compare the largest hole with the largest plank, if hole - plank is > 1 fail
 * sort both arrays, then compare index by index
 */

function numSort(a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
}

function brokenBridge(bridge, planks) {
    var bridgeClone = bridge.slice()
    var holeSizes = []
    var currentHoleSize = 0
    while (bridgeClone.length > 0) {
        var currentVal = bridgeClone.shift() // shift's return value is the value that was removed (first element in the array)
        if (currentVal === 1) {
            if (currentHoleSize > 1) {
                holeSizes.push(currentHoleSize)
            }
            currentHoleSize = 0
        } else { // if is 0, aka hole
            currentHoleSize += 1
        }
    }
    var sortedHoles = holeSizes.sort(numSort)
    var sortedPlanks = planks.sort(numSort)

    if (sortedHoles.length > sortedPlanks.length) {
        return false
    }
    for (var i = 0; i < sortedHoles.length; i++) {
        if (sortedHoles[i] - sortedPlanks[i] > 1) {
            return false
        }
    }
    return true
}

console.log(brokenBridge([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 1]))







// [1, 10, 10, 10, 10] planks
// [4] holes



