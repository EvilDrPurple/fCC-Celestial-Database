function rot13(str) {
  str = str.split('');
  str = str.map(function(letter) {
    if (/\W|\s/.test(letter)) return letter;

    let charCode = letter.charCodeAt(0);
    let shift = 13;
    const diff = 90 - charCode;

    if (diff < 13) {
      shift -= diff;
      charCode = 64;
    }

    charCode += shift;
    return String.fromCharCode(charCode);
  });

  str = str.join('');
  //console.log(str)
  return str;
}

rot13("SERR PBQR PNZC");
