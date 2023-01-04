/**
 * @file Contains a function that will decode a ROT13 cipher, where the values of the letters are shifted by 13 places.
 * @author Kylie Scott
 */

/**
 * Decodes a ROT13 encoded string
 * 
 * @param {string} str ROT13 encoded string
 * @returns {string} Decoded string
 */
function rot13(str) {
  str = str.split('');
  str = str.map(function(letter) {
    // if non-alphanumeric or whitespace
    if (/\W|\s/.test(letter)) return letter;

    let charCode = letter.charCodeAt(0);
    let shift = 13;
    // difference between last char code and current char code
    const diff = 90 - charCode;
    
    // if difference is less than the shift
    if (diff < shift) {
      // shift char code to the beginning
      shift -= diff;
      charCode = 64;
    }

    charCode += shift;
    return String.fromCharCode(charCode);
  });

  str = str.join('');
  return str;
}

console.log(rot13("SERR PBQR PNZC"));
