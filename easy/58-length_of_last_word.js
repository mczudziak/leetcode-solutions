// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

// ...solution goes here...
var lengthOfLastWord = function (s) {
  let tab = s.trim().split(" ");
  return tab[tab.length - 1].length;
};
