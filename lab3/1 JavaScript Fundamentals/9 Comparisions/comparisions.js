// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
alert( true == 1 ); // true
alert( false == 0 ); // true

// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, 
// then a === b immediately returns false without an attempt to convert them.

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false

// Obviously, true.
// Dictionary comparison, hence false. "a" is smaller than "p".
// Again, dictionary comparison, first char "2" is greater than the first char "1".
// Values null and undefined equal each other only.
// Strict equality is strict. Different types from both sides lead to false.
// Similar to (4), null only equals undefined.
// Strict equality of different types.