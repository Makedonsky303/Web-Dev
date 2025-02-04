let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) alert( 'You are right!' );

// If we want to execute more than one statement, we have to wrap our code block inside curly braces:

if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }

// Conditional operator ‘?’
let age = prompt('How old are you?', '');

let accessAllowed = (age > 18) ? "You are welcome!" : "You are young yet";

alert(accessAllowed);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );


// Sometimes the question mark ? is used as a replacement for if:

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');