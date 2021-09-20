function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (func(num)) {
      newArr = arr.slice(arr.indexOf(num));
      return newArr;
    }
  }
  return newArr;
}

// dropElements([1, 2, 3], function (n) {
//   return n < 3;
// });

// dropElements([1, 2, 3, 4], function (n) {
//   return n >= 3;
// });

// dropElements([0, 1, 0, 1], function (n) {
//   return n === 1;
// });
