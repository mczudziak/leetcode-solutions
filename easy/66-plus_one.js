// 66. Plus One
// https://leetcode.com/problems/plus-one/

// ...solution goes here...
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  // Jeśli wszystkie cyfry były 9 (np. [9,9,9])
  digits.unshift(1);
  return digits;
};
