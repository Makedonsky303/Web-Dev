// There are two syntaxes for creating an empty array:

let arr_empty = new Array();
let arr_empty2 = [];

// The total count of the elements in the array is its length:

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3


// An array can store elements of any type.

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello


alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

shift
// Extracts the first element of the array and returns it:

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear


// unshift
// Add the element to the beginning of the array:

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear


// Methods push/pop run fast, while shift/unshift are slow.

// So, how to compare arrays?

// That’s simple: don’t use the == operator.
//  Instead, compare them item-by-item in a loop 