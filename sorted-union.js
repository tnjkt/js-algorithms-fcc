function uniteUnique(...arrs) {
  console.log(arrs);

  const allArrs = arrs.reduce(
    (arrOfArrs, currArr) => arrOfArrs.concat(currArr),
    []
  );

  //    const newArr=[];
  //    for (let i = 0; i < allArrs.length; i++) {
  //     const num = allArrs[i];
  //     if (newArr.indexOf(num) == -1) {
  //       newArr.push(num);
  //     }
  //   }

  const newArr = allArrs.reduce((arr, num) => {
    if (arr.indexOf(num) == -1) {
      return [...arr, num];
    }
    return arr;
  }, []);
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
