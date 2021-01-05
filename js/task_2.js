const checkPalindrom = (int) => {
  if(isInteger(int)) throw new Error('Invalid input integer');

  const str = int.toString();

  return str === str.split('').reverse().join('');
};

const isInteger = (int) => {
  switch(true) {
    case int === '':
    case int === 'boolean':
    case int === 'object':
    case !isFinite(int):
      return true;
    default:
      return false;
  }
};

console.log('Task 2: ', checkPalindrom('121'));
