var climbStairs = function (n) {
  let result = [];
  let a = 1,
    b = 2;

  if (n >= 1) result.push(a);
  if (n >= 2) result.push(b);

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    result.push(c);
    a = b;
    b = c;
  }
  return result[result.length - 1];
};
