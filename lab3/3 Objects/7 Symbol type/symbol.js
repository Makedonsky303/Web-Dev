// id is a symbol with the description "id"
// let id = Symbol("id"); // Symbols are guaranteed to be unique.

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false


alert(id); // TypeError: Cannot convert a Symbol value to a string
// That’s a “language guard” against messing up,
//  because strings and symbols are fundamentally different and
//  should not accidentally convert one into another.

alert(id.toString()); // Symbol(id), now it works
alert(id.description); // Or get symbol.description property to show the description only


// Symbolic properties do not participate in for..in loop.

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123


// read from the global registry
let some_id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true
// Symbols inside the registry are called global symbols. 
// If we want an application-wide symbol, accessible everywhere
//  in the code – that’s what they are for.


// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id