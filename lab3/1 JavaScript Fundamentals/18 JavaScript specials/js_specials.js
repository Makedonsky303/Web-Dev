// Usually, a line-break is also treated as a delimiter, so that would also work:

alert('Hello')
alert('World')

// Sometimes it doesn’t work, and it's better to use semicolon

// Semicolons are not required after code blocks {...} 
// and syntax constructs with them like loops:

function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}


// Variables can be declared using:

// let
// const (constant, can’t be changed)
// var (old-style)