function sumPrimes(num) {
  const numArr = [];
  const primesArr = [];

  for (let i = 1; i <= num; i++) {
    let number = i;
    numArr.push(number);
    let divides = false;
    for (let j = 2; j < number; j++) {
      const localdivides = number % j == 0;
      if (localdivides) {
        divides = true;
        continue;
      }
    }
    if (!divides && primesArr.indexOf(number) == -1 && number != 1) {
      primesArr.push(number);
      console.log(primesArr);
    }
  }
  const result = primesArr.reduce((sum, num) => sum + num, 0);
  return result;
}

sumPrimes(10);
