function convertToRoman(num) {
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
  const keys = Object.keys(romanNumerals).reverse().map(key => parseInt(key));
  let numerals = "";

  for (let val of keys) {
    if (num >= val) {
      do {
        numerals += romanNumerals[val];
        num -= val;
      } while (num >= val)
    }
  }
  
  //console.log(numerals)
  return numerals;
}

convertToRoman(36);
