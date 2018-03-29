////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture 9: Objects and Properties                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////

let john = {
  name : 'John',
  lastname: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(john.name);
console.log(john['lastname'])

john.lastname = 'Miller';
console.log(john);

let jane = new Object();
jane.name = 'Jane';
jane.lastname = 'Smith';
console.log(jane);
