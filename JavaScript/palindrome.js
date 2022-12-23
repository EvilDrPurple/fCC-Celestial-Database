function palindrome(str) {
  str = str.replaceAll(/\W|\s|_/g, "");
  str = str.toUpperCase();

  const reverseStr = str.split("").reverse().join("");

  return str == reverseStr;
}

palindrome("eye");
