////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture 8: Arrays                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////

let names = ['John', 'Smith', 'Other'];
let years = new Array(1990, 1969, 1948);
let john  = ['John', 'Smith', 1990, 'designer', false];
john.push('blue'); // Add an item to the end of the array
john.unshift('Mr.') // Add an item to the start of the array
john.pop(); // Remove the last item in the array
john.shift(); // Remove the first item in the array
john.indexOf('Smith') // Returns the position of the element that is referenced
console.log(john.toString() );
console.log(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
  console.log('John is not a teacher')
}
