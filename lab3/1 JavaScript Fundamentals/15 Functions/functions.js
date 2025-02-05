function showMessage() {
    let message = 'Hello everyone!';
    alert( message );
  }
  
showMessage();


// A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John


// The function has full access to the outer variable. It can modify it as well.

let userName2 = 'John';

function showMessage() {
  userName2= "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName2;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

// If a function is called, but an argument is not provided, 
// then the corresponding value becomes undefined. No errors

function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given