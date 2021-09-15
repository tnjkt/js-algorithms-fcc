function sumFibs(num) {
  const arr = [];

  // Array of fibonacci numbers that go up till num
  let numToPush = 0;
  for (let i = 0; numToPush < num; i++) {
    if (arr.length == 0 || arr.length == 1) {
      numToPush = 1;
      arr.push(numToPush);
    } else {
      const numBefore = arr[i - 1];
      const numTwoBefore = arr[i - 2];
      numToPush = numBefore + numTwoBefore;
      if (numToPush <= num) {
        arr.push(numToPush);
      }
    }
  }
  // Odd numbers in the created fibonacci arr
  const oddNumbers = arr.filter((num) => num % 2 == 1);
  // Sum of the odd fibonacci numbers
  const result = oddNumbers.reduce((sum, num) => sum + num, 0);
  return result;
}
sumFibs(4);
