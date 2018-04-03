// Lecture 2:Hoisting

/**
* calculateAge calculates the age based on year of yearsOfBirth
* @param {int} year year of birth
* @returns {int} age.
*/

function calculateAge(year) {
  return parseInt(new Date().getFullYear() - year);
}
