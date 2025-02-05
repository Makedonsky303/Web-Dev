// In most JavaScript projects curly braces are written in “Egyptian” style 
// with the opening brace on the same line as the corresponding keyword – 
// not on a new line. There should also be a space before the opening bracket, like this:

if (condition) {
  // do this
  // ...and that
  // ...and that
}



// 😠 Beginners sometimes do that. Bad! Curly braces are not needed:
if (n < 0) {alert(`Power ${n} is not supported`);}
// 😠 Split to a separate line without braces. Never do that, easy to make an error when adding new lines:
if (n < 0)
  alert(`Power ${n} is not supported`);
// 😏 One line without braces – acceptable, if it’s short:
if (n < 0) alert(`Power ${n} is not supported`);
// 😃 The best variant:
if (n < 0) {
  alert(`Power ${n} is not supported`);
}



// No one likes to read a long horizontal line of code. It’s best practice to split them.

// backtick quotes ` allow to split the string into multiple lines
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;


// And, for if statements:

if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}

// Try to avoid nesting code too many levels deep.