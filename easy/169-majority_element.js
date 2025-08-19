// 169. Majority Element
// https://leetcode.com/problems/majority-element/

// ...solution goes here...
var majorityElement = function (nums) {
  const elementMap = new Map();
  const majority = nums.length / 2;

  for (const element of nums) {
    elementMap.set(element, (elementMap.get(element) || 0) + 1);
  }

  for (const [element, count] of elementMap.entries()) {
    if (count > majority) {
      return element;
    }
  }
};
