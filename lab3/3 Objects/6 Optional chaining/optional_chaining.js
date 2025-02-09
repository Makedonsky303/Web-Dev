// let user = {}; // a user without "address" property

// alert(user.address.street); // Error!

// value?.prop:

// works as value.prop, if value exists,
// otherwise (when value is undefined/null) it returns undefined.
// Here’s the safe way to access user.address.street using ?.:

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)