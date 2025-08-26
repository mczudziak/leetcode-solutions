var strStr = function (haystack, needle) {
  let result = haystack.indexOf(needle);
  console.log(result);

  if (result > -1) {
    return result;
  } else {
    return -1;
  }
};

let testHaystack = "sadbutsad";
let testNeedle = "sad";
let testH2 = "leetcode";
let testN2 = "leeto";

console.log(strStr(testHaystack, testNeedle));
console.log(strStr(testH2, testN2));
