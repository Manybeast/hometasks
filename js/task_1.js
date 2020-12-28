const roman2arabic = (romanStr) => {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, Z: 2000 };

  if (!(1 <= romanStr.length <= 15)) return "Invalid roman numeral";

  return romanStr
      .toUpperCase()
      .split("")
      .reduce(function (r, v, i, arr) {
        const a = values[ arr[i] ];
        const b = values[ arr[i + 1] ];

        return b > a ? r - a : r + a;
      }, 0);
};

console.log(roman2arabic("MCMXCIV"));
