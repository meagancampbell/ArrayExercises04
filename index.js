let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2)+'\n');
console.log(holdCabinet1);

//b) Print a slice of two elements from each array. Does slice alter the original arrays? YES
console.log(`${holdCabinet1.slice(0,2)} ${holdCabinet2.slice(0,2)}`);
// NO: Slice only prints out the first two items in each array

console.log(holdCabinet1);
console.log(holdCabinet2);

//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse()+'\n');
//REVERSE: flips the order back to front

console.log( holdCabinet2.sort()+'\n'+ '\n');
//SORT: puts things alphabetically. Numbers then Words

console.log(holdCabinet1);
console.log(holdCabinet2);
// YES in that the code stays with the last iteration of the array

