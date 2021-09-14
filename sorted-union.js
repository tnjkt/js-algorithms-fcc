function uniteUnique(...arrs) {
  console.log(arrs);
  const newArr = [];

  const allArrs = arrs.reduce(
    (arrOfArrs, currArr) => arrOfArrs.concat(currArr),
    []
  );

  for (let i = 0; i < allArrs.length; i++) {
    const num = allArrs[i];
    if (newArr.indexOf(num) == -1) {
      newArr.push(num);
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
