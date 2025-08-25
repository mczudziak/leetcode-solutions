var romanToInt = function (s) {
  const romanSymbols = new Map();
  romanSymbols.set("M", 1000);
  romanSymbols.set("C", 100);
  romanSymbols.set("D", 500);
  romanSymbols.set("L", 50);
  romanSymbols.set("X", 10);
  romanSymbols.set("V", 5);
  romanSymbols.set("I", 1);

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanSymbols.get(s[i]) < romanSymbols.get(s[i + 1])) {
      sum += -romanSymbols.get(s[i]);
    } else {
      sum += romanSymbols.get(s[i]);
    }
  }

  return sum;
};

let s = "LVIII";
console.log(romanToInt(s));
