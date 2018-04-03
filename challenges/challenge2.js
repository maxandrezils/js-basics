// //////////////////////////////////////
// Challenge 2
// //////////////////////////////////////
/*

  1. Create an Array of years for yob
  2. Create an empty array, just []
  3. Use a loop to fill the array with the ages of the persons
  4. Use another loop to log into the console whether each person is of full
     age (18 or older as well as their age)
  5. Create a function called printFullAge() which receives the vector of years
     as an argument, executes the steps 2, 3 and 4 and returns a vector of
     true/false boolean values: true if the person is of full age and false
     if not.
  6. Call the function with 2 different vectors and store the results in two
     variables: full_1 and full_2

  Example input: [1965, 2008, 1992]
  Example output: [true, false, true]
*/
let yearsOfBirth = [1965, 2008, 1992];
let ages = [];
for (let i = 0; i < yearsOfBirth.length; i++) {
  ages[i] = parseInt(new Date().getFullYear() - yearsOfBirth[i]);
}
for(let l = 0; l < ages.length; l++){
  if(ages[l] >= 18){
    console.log(`With an age of ${ages[l]} person is of age`)
  }else{
    console.log(`With an age of ${ages[l]} person is under age`)
  }
}

function printFullAge(yearOfBirth){
  let age = parseInt(new Date().getFullYear() - yearOfBirth);
  let ofAge;
  if(age >= 18){
    ofAge = true;
  }else{
    ofAge = false;
  }
  return ofAge;
}
full_1 = printFullAge(1988);
full_2 = printFullAge(2010);
