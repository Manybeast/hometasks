const checkPalindrom = (int) => {
  const str = int.toString();

  return str === str.split('').reverse().join('');
};

console.log(checkPalindrom(121));
