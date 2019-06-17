/*
arrayNAme.splice(index, howMany, new item 1 to add, new item 2 etc) so really there's only 3 "parameters"

index/start = Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
    The index at which to start changing the array. If greater than the length of the array, start will be set to the length of the array. If negative, it will begin that many elements from the end of the array (with origin -1, meaning -n is the index of the nth last element and is therefore equivalent to the index of array.length - n). If the absolute value of start is greater than the length of the array, it will begin from index 0. 


howmany/deleteCount =	Optional. The number of items to be removed. If set to 0, no items will be removed
    An integer indicating the number of elements in the array to remove from start.
If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.
If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

item1, ..., itemX = Optional. The new item(s) to be added to the array
    The elements to add to the array, beginning from start. If you do not specify any elements, splice() will only remove elements from the array.

if just 1 parameter --> tells to insert at that point
if you have start and deleteCount but no items, it will only delete elements from the array and not add any


The return value will be the items deleted. if none deleted then it will return an empty array

ex1: Remove 0 (zero) elements from index 2, and insert "drum"
var removed = myFish.splice(2, 0, 'drum');

ex2: Remove 1 element from index 3
var removed = myFish.splice(3, 1);

ex3: Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

ex4: Remove all elements after index 2 (incl.)
var removed = myFish.splice(2);
*/