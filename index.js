let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log('This is the concat line:'+ holdCabinet1.concat(holdCabinet2)+'\n');

console.log(holdCabinet1);
console.log(holdCabinet1.slice(1));
console.log(holdCabinet1.reverse()+'\n');

console.log( holdCabinet2.sort()+'\n'+ '\n');


//b) Print a slice of two elements from each array. Does slice alter the original arrays? YES
console.log(holdCabinet1.slice(3)); //cuts off everything in front of 3
console.log(holdCabinet1+'\n'); //this is the remainder after the first 1,2 are removed

console.log(holdCabinet2.slice(3,5));// this goes with line 11 and removes everything past 3. So 3 and 4 in the array 
console.log(holdCabinet2);


//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
//reverse: reverses the order
//sort: sorts numbers first, then words
