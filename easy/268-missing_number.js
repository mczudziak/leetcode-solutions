// 268. Missing Number
// https://leetcode.com/problems/missing-number/

// ...solution goes here...
var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};
