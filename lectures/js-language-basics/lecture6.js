////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture 6: Functions                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateAge (yearOfBirth) {
  let age = 2018 - yearOfBirth;
  return age;
}
let ageJohn  = calculateAge(1990);
let ageSmith = calculateAge(1969);
let ageOther = calculateAge(1948);

console.log(ageJohn);
console.log(ageSmith);
console.log(ageOther);

function yearsUntilRetirement(name, year) {
  let age = calculateAge(year);
  let retirement = 65 - age;
  if(retirement >= 0){
    console.log(`${name} retires in ${retirement} years`);
  }else{
    console.log(`${name} is already retired`);
  }
}

yearsUntilRetirement('john', 1990);
yearsUntilRetirement('Smith', 1900);
