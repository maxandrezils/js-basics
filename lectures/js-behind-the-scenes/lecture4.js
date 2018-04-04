////////////////////////////////////////////////////////////////////////////////
// Lecture 4: THIS keyword                                                    //
////////////////////////////////////////////////////////////////////////////////
// Regular Function Call: the this keyword points to the global object
// Method call: the this variable points to the object that is calling the Method
// The this keyword is not assigned a value until a function where it is defined is actually called
// console.log(this) shows the global object
function calculateAge(year){
  console.log(2018 - year);
}
calculateAge(1988)
let john  = {
  name: 'John',
  yearOfBirth: 1998,
  calculateAge: function(){
    console.log(this);
    console.log(2018 - this.yearOfBirth);
  }
};
john.calculateAge();

let mike = {
  name: 'Mike',
  yearOfBirth: 1990
}
mike.calculateAge = john.calculateAge;
mike.calculateAge();
