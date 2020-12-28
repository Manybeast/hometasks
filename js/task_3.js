const bracketsValidatiton = (inputStr) => {
  const brackets = ['(',')','{','}','[',']'];
  let stack = [];

  if (!(1 <= inputStr.length <= 104)) return "Invalid string";

  if (inputStr.length % 2) return false;

  inputStr.split('').forEach((bracket) => {
    let bracketsIndex = brackets.indexOf(bracket);

    if (!(bracketsIndex % 2)) {
      stack.push(bracketsIndex + 1);
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  });

  return stack.length === 0;
};

console.log(bracketsValidatiton(
    "([{}()]{}){[]}"
));
