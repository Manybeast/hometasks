const roman2arabic = (romanStr) => {
  const VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, Z: 2000 };

  if (isInvalid(VALUES, romanStr)) throw new Error('Invalid roman numeral');

  return romanStr
      .toUpperCase()
      .split("")
      .reduce((prev, curr, i, arr) => {
        const a = VALUES[ arr[i] ];
        const b = VALUES[ arr[i + 1] ];

        return b > a ? prev - a : prev + a;
      }, 0);
};

const isInvalid = (valuesObj, str) => {
  let invalid = false;
  if (!(1 <= str.length <= 15) || typeof str !== 'string')
    return true;

  str.split('').forEach((item) => {
    if(Object.keys(valuesObj).indexOf(item) < 0)
      invalid = true;
  });

  return invalid;
};

console.log('Task 1: ', roman2arabic('MCMXCIV'));
