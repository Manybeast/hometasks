const bracketsValidation = (inputStr) => {
  const BRACKETS = ['(',')','{','}','[',']'];
  let stack = [];

  if (isBracket(BRACKETS, inputStr)) throw new Error('Invalid input string');

  if (inputStr.length % 2) return false;

  inputStr.split('').forEach((bracket) => {
    const bracketsIndex = BRACKETS.indexOf(bracket);

    if (!(bracketsIndex % 2)) {
      stack.push(bracketsIndex + 1);
    } else {
      if (stack.pop() !== bracketsIndex || bracketsIndex < 0) {
        return false;
      }
    }
  });

  return stack.length === 0;
};

const isBracket = (bracketsConst, str) => {
  let invalid = false;

  if (typeof str !== 'string' ||
      !(1 <= str.length <= 104)) {
    return true;
  }

  str.split('').forEach((item) => {
    if(bracketsConst.indexOf(item) < 0) {
      invalid = true;
    }
  });

  return invalid;
};

console.log('Task 3: ', bracketsValidation('([{}()]{}){[]}'));
