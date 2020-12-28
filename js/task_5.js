const findTarget = (nums, target) => {
  let index = nums.findIndex((item) => item === target);

  if (index < 0) {
    index = nums.findIndex((item) => item > target);
  }

  if (index < 0) {
    index = nums.length;
  }

  return index;
};

console.log(
    findTarget([1, 3, 5, 6], 7)
);
