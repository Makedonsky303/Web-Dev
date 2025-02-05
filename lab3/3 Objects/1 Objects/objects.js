let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};
// Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30


// To remove a property, we can use the delete operator:

delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user2 = {
  name: "John",
  age: 30,
  "likes birds": false  // multiword property name must be quoted
};
user2["likes birds"] = true;
alert(user2["likes birds"]); // true
  
let key = prompt("What do you want to know about the user?", "name");
  
// access by variable
alert( user[key] ); // John (if enter "name")

// The dot notation cannot be used in a similar way: 
alert( user.key ) // undefined



// We can use square brackets in an object literal, when creating an object. 
// That’s called computed properties.

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"


function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
user = makeUser("John", 30);
alert(user.name); // John

// in operator
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist


for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }
// Are objects ordered? In other words, if we loop over an object, 
// do we get all properties in the same order they were added? 
// Can we rely on this?

// The short answer is: “ordered in a special fashion”: integer properties 
// are sorted, others appear in creation order. The details follow.