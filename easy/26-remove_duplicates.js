// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//
// This solution uses the two-pointer technique to remove duplicates in-place from a sorted array.
// It is efficient for space, but always consider edge cases and possible optimizations for clarity and performance.
var removeDuplicates = function (nums) {
  let counter = 1;
  let length = nums.length;
  for (let i = 1; i < length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  return counter;
};
