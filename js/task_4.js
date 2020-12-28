const sortArray = (arr1, arr2) => {
  let result = [];
  let notFound = [];

  arr2.forEach((item) => {
    const current = arr1.filter((elem) => item === elem);

    result = result.concat(current);
  });

  arr1.forEach((item) => {
    !arr2.includes(item, 0) && notFound.push(item);
  });

  return (result = result.concat(notFound));
};

console.log(
  sortArray(
  [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  [2, 1, 4, 3, 9, 6]
  )
);
