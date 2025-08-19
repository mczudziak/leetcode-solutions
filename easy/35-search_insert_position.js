// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// ...solution goes here...
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    } else if (nums[nums.length - 1] < target) {
      return nums.length;
    }
  }
};
