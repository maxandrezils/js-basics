////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture 10: Objects and Methods                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////

let john = {
  name : 'John',
  lastname: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family : ['Jane', 'Smith', 'John'],
  calculateAge: function(){
    return parseInt(new Date().getFullYear() - this.yearOfBirth); // used new Date().getFullYear() to return the current year
    // the keyword this refers to the object john
  }
};

console.log(john.calculateAge());
let age = john.calculateAge();
console.log(`Age is ${age}`)
