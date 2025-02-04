// alert("Hello");
// // It shows a message and waits for the user to press “OK”.


// //The function prompt accepts two arguments:
let default_number = 18;
let title = "How old are you?";
// age = prompt(title, [default_number]);
// or 
age = prompt(title, "");
// // It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
alert(`You are ${age} years old!`);

// Confirm
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
