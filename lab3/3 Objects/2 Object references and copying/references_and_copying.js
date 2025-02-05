// When an object variable is copied, the reference is copied,
//  but the object itself is not duplicated.

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference


let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true



let c = {};
let d = {}; // two independent objects

alert( c == d ); // false



// We can create a new object and replicate the structure of the existing one, 
// by iterating over its properties and copying them on the primitive level.

let student = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in student) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( student.name ); // still John in the original object


// We can also use the method Object.assign.
let clone2 = Object.assign({}, user);

// The call structuredClone(object) clones the object with all nested properties.


let user2 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone3 = structuredClone(user);

alert( user2.sizes === clone3.sizes ); // false, different objects

// user and clone are totally unrelated now
user2.sizes.width = 60;    // change a property from one place
alert(clone3.sizes.width); // 50, not related