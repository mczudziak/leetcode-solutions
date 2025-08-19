// 3110. Score of a String
// https://leetcode.com/problems/score-of-a-string/

// ...solution goes here...
var scoreOfString = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return sum;
};
