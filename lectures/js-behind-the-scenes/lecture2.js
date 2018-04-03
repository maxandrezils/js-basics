////////////////////////////////////////////////////////////////////////////////
// Lecture 2: Hoising Explained                                               //
////////////////////////////////////////////////////////////////////////////////
/**
 * calculateAge - Accepts the year of birth as an argument and returns the age.
 *
 * @param {int} year  year of birth
 *
 * @returns {int} age
 */
function calculateAge(year) {
  return parseInt(new Date().getFullYear() - year);
}

/**
 * retirement - Description
 *
 * @param {int} year enter the year of birth as a argument
 *
 * @returns {int} the years until retirment
 */
let retirement = function (year){
  return (65 - parseInt(new Date().getFullYear() - year));
}
console.log(retirement(1999));
