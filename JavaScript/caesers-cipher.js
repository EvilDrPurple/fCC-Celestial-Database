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
    if (diff < 13) {
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

rot13("SERR PBQR PNZC");
