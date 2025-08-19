// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
//
// This solution uses sorting and binary search to find the intersection of two arrays.
// Performance can be improved by using a Set for faster lookups and to avoid repeated sorting.
var intersection = function (nums1, nums2) {
  const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let middle = 0;
    while (left <= right) {
      middle = Math.floor((left + right) / 2);
      if (nums[middle] === target) {
        return middle;
      } else if (nums[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
  };

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let returnNums = [];
  for (let i = 0; i < nums1.length; i++) {
    if (binarySearch(nums2, nums1[i]) !== -1) {
      if (binarySearch(returnNums, nums1[i]) === -1) {
        returnNums.push(nums1[i]);
        returnNums.sort((a, b) => a - b);
      }
    }
  }

  return returnNums;
};
