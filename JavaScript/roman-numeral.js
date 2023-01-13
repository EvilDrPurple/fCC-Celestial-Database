/**
 * @file Contains a function that converts a number to roman numerals.
 * @author Kylie Scott
 */

/**
 * Converts an input number into roman numerals.
 * 
 * @param {number} num Number to be converted
 * @returns {string} The number converted to roman numerals
 */
function convertToRoman(num) {
  /** Object containing the values of roman numerals */
  const romanNumerals = {
    1000: "M",
     900: "CM",
     500: "D",
     400: "CD",
     100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
       9: "IX",
       5: "V",
       4: "IV",
       1: "I"
  }
  /** Array of each roman numeral value as numbers */
  const vals = Object.keys(romanNumerals).reverse().map(key => parseInt(key));
  /** Stores the roman numerals to be returned */
  let retNumerals = "";

  // for each of the roman numeral values
  for (let val of vals) {
    // if the number being converted is greater than or equal to the current roman numeral value being checked
    if (num >= val) {
      do {
        // add the roman numeral to the return value
        retNumerals += romanNumerals[val];
        // subtract from the number being converted
        num -= val;
      } while (num >= val)
    }
  }

  return retNumerals;
}

console.log(convertToRoman(36));
