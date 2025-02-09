function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });
// Function marry “marries” two objects by giving them references
//  to each other and returns a new object that contains them both.

// Now let’s remove two references:

delete family.father;
delete family.mother.husband;

// Outgoing references do not matter. 
// Only incoming ones can make an object reachable. 
// So, John is now unreachable and will be removed from the memory 
// with all its data that also became unaccessible.

// After garbage collection:
// <global>(family) -> Object -> Object(mother)

