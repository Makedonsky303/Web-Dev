alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// Short-circuit evaluation.
true || alert("not printed");
false || alert("printed");

// if the first operand is truthy,
// AND returns the last operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


// double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false

// Boolean function:

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false


// The answer is 2, that’s the first truthy value.

alert( null || 2 || undefined );


alert( alert(1) || 2 || alert(3) );
// The answer: first 1, then 2.

// The call to alert does not return a value. Or, in other words, it returns undefined.

// The first OR || evaluates its left operand alert(1). That shows the first message with 1.
// The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.


alert(1 && null && 2);
// The answer: null, because it’s the first falsy value from the list.