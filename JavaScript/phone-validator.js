/**
 * @file Contains a function that will test if a given string is a valid US phone number.
 * @author Kylie Scott
 */

/**
 * Tests if a string is a valid US phone number. 
 * Can include parenthesis and/or hyphens and/or US country code as long as they are in the correct positions.
 * 
 * @param {string} str Phone number to be validated
 * @returns {boolean} True if the phone number is valid
 */
function telephoneCheck(str) {
  // regex to check if phone number is valid
  const regex = /^1? ?\(\d{3}\) ?\d{3}[- ]?\d{4}$|^1? ?\d{3}[- ]?\d{3}[- ]?\d{4}$/

  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
