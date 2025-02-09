// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false


// create a function and immediately call it with new
let user_unique = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};
// This constructor can’t be called again, because it is not saved 
// anywhere, just created and called. So this trick aims to encapsulate
// the code that constructs the single object, without future reuse.
