/**
 * @file Contains a function that will test if a string is a palindrome, the same forward as it is backwards.
 * @author Kylie Scott
 */

/**
 * Tests if a string is a palindrome. Ignores spaces, underscores, and other symbols. Ignores case.
 * 
 * @param {string} str String to be tested
 * @returns {boolean} True if the string is a palindrome
 */
function palindrome(str) {
  // remove whitespace, symbols
  str = str.replace(/\W|\s|_/g, "");
  str = str.toUpperCase();

  const reverseStr = str.split("").reverse().join("");

  return str == reverseStr;
}

console.log(palindrome("eye"));
