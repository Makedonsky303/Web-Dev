let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = 'Murphy';

alert(user ?? "Anonymous"); // Murphy (user is not null/undefined)



// || returns the first truthy value.
// ?? returns the first defined value.