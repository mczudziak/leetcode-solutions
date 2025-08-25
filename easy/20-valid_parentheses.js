var isValid = function (s) {
  const openBracket = "(";
  const closedBracket = ")";
  const openSquare = "[";
  const closedSquare = "]";
  const openCurly = "{";
  const closedCurly = "}";

  let string = s.split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] == openBracket && string[i + 1] == closedBracket) {
      string.splice(i, 2);
      i = -1;
    }
    if (string[i] == openSquare && string[i + 1] == closedSquare) {
      string.splice(i, 2);
      i = -1;
    }
    if (string[i] == openCurly && string[i + 1] == closedCurly) {
      string.splice(i, 2);
      i = -1;
    }
  }

  console.log(string);
  if (string.length === 0) {
    return true;
  } else {
    return false;
  }
};
