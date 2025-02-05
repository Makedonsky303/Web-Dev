let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

// another example 

let j = 3;
while (j) { // when j becomes 0, the condition becomes falsy, and the loop stops
    console.log( j );
    j--;
}

// the shortest version
// let i = 3;
// while (i) alert(i--);

// "for" is pretty similar to c++ or java "for"
for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  
//   for (;;) {
//     // repeats without limits
//   }

// "break;" breaks a loop
// "continue;" continue to a next 


// The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');