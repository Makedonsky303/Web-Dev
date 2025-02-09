let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


// The arr.forEach method allows to run 
// a function for every element of the array.

arr.forEach(function(item, index, array) {
  // ... do something with an item
});


// arr.indexOf(item, from) – looks for item starting 
// from index from, and returns the index 
// where it was found, otherwise -1.

// arr.includes(item, from) – looks for item 
// starting from index from, returns true if found.

let arr2 = [1, 0, false];

alert( arr2.indexOf(0) ); // 1
alert( arr2.indexOf(false) ); // 2
alert( arr2.indexOf(null) ); // -1

alert( arr2.includes(1) ); // true



// Imagine we have an array of objects. How do we find an object with a specific condition?

// Here the arr.find(fn) method comes in handy.

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});




// The find method looks for a single (first) element that makes the function return true.

// If there may be many, we can use arr.filter(fn).

// The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});




// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.


let result2 = arr.map(function(item, index, array) {
  // returns the new value instead of item
});



// The call to arr.sort() sorts the array in place, changing its element order.

// It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

let arr3 = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr3 );  // 1, 15, 2


arr.reverse();

alert( arr ); // reversed array


let names = 'Bilbo, Gandalf, Nazgul';

arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}