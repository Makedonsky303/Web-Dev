// A transpiler is a special piece of software that translates
//  source code to another source code.

// A transpiler would analyze our code and rewrite 
// height ?? 100 into 
// (height !== undefined && height !== null) ? height : 100.

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;





// A script that updates/adds new functions is called “polyfill”.
 
// It “fills in” the gap and adds missing implementations.

//For this particular case, the polyfill for Math.trunc is a script 
// that implements it, like this:

if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}