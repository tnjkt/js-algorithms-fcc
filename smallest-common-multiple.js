function smallestCommons(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const newArr = [];

  for (let i = sorted[0]; i <= sorted[1]; i++) {
    newArr.push(i);
  }
  console.log(newArr);

  let num = 1;
  const divides = (currNum) => num % currNum === 0;

  while (!newArr.every(divides)) {
    num++;
  }
  return num;
}

smallestCommons([5, 1]);
