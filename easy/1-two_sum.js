// 1. Two Sum
// https://leetcode.com/problems/two-sum/

// ...solution goes here...
var twoSum = function (nums, target) {
  const seen = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
};
