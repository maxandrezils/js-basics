/**
 * calculateAge - Description
 *
 * @param {int} year of birth
 *
 * @returns {int} age
 */
function calculateAge(year) {
  return parseInt(new Date().getFullYear() - year);
}
