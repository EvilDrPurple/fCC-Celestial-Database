# Caesers Cipher

## Instructions

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## Tests

- [x] `rot13("SERR PBQR PNZC")` should decode to the string `FREE CODE CAMP`
- [x] `rot13("SERR CVMMN!")` should decode to the string `FREE PIZZA!`
- [x] `rot13("SERR YBIR?")` should decode to the string `FREE LOVE?`
- [x] `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should decode to the string `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

---

# Palindrome Checker

## Instructions

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A *palindrome* is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note:** You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others.

We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.

## Tests

- [x] `palindrome("eye")` should return a `boolean`.
- [x] `palindrome("eye")` should return `true`.
- [x] `palindrome("_eye")` should return `true`.
- [x] `palindrome("race car")` should return `true`.
- [x] `palindrome("not a palindrome")` should return `false`.
- [x] `palindrome("A man, a plan, a canal. Panama")` should return `true`.
- [x] `palindrome("never odd or even")` should return `true`.
- [x] `palindrome("nope")` should return `false`.
- [x] `palindrome("almostomla")` should return `false`.
- [x] `palindrome("My age is 0, 0 si ega ym.")` should return `true`.
- [x] `palindrome("1 eye for of 1 eye.")` should return `false`.
- [x] `palindrome("0_0 (: /-\ :) 0-0")` should return `true`.
- [x] `palindrome("five|\_/|four")` should return `false`.

---
