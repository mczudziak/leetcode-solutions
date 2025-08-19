// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

// ...solution goes here...
var isPalindrome = function (x) {
  if (x < 0) return false;
  let number = x;

  let reversed = 0;

  while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reversed === x;
};
