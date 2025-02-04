// Note that if any of the operands is a string, 
// then the other one is converted to a string too.

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"


alert(2 + 2 + '1' ); // "41" and not "221"
// Here, operators work one after another. The first + sums two numbers, so it returns 4, 
// then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

alert('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other two operands as 
// strings too. The 2 gets concatenated to '1', 
// so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// Here’s the demo for subtraction and division:

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

// Unary plus
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0


// Assignment = returns a value
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

let s, t, w;

s = t = w = 3; // chain assignments
w++; // increment 
s--; // decrement 




// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)

// The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
// The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
// The addition with a string appends the number 5 to the string.
// The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
// null becomes 0 after the numeric conversion.
// undefined becomes NaN after the numeric conversion.
// Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.