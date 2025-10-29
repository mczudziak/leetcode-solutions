/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newArray = [];
    for(let i = 0; i<nums.length; i++){
       if(newArray.includes(nums[i])){
           return true
       }
       newArray.push(nums[i]);
    }
    return false;
};

let testCase = [1,2,3];

console.log(containsDuplicate(testCase));