function tillThree(num, arr) {
  if (num < 5) {
    for (let i = 0; i < num; i++) {
      arr.push("I");
    }
  }
  if (num > 5) {
    for (let i = 0; i < num - 5; i++) {
      arr.push("I");
    }
  }
}

function tillThreeTens(num, arr) {
  if (num < 5) {
    for (let i = 0; i < num; i++) {
      arr.push("X");
    }
  }
  if (num > 5) {
    for (let i = 0; i < num - 5; i++) {
      arr.push("X");
    }
  }
}

function tillThreeHundreds(num, arr) {
  if (num < 5) {
    for (let i = 0; i < num; i++) {
      arr.push("C");
    }
  }
  if (num > 5) {
    for (let i = 0; i < num - 5; i++) {
      arr.push("C");
    }
  }
}

function tillThreeThousands(num, arr) {
  for (let i = 0; i < num; i++) {
    arr.push("M");
  }
}

function convertToRoman(num) {
  let arabicNum = num.toString().split("");
  let number = 0;
  let romanNum = [];

  if (arabicNum.length == 4) {
    number = arabicNum[0];
    if (number > 0 && number <= 3) {
      tillThreeThousands(number, romanNum);
    }

    arabicNum = arabicNum.slice(1);
  }

  if (arabicNum.length == 3) {
    number = arabicNum[0];
    if (number > 0 && number <= 3) {
      tillThreeHundreds(number, romanNum);
    }
    if (number == 4) {
      romanNum.push("C", "D");
    }
    if (number == 5) {
      romanNum.push("D");
    }

    if (number > 5 && number <= 8) {
      romanNum.push("D");
      tillThreeHundreds(number, romanNum);
    }

    if (number == 9) {
      romanNum.push("C", "M");
    }

    arabicNum = arabicNum.slice(1);
  }

  if (arabicNum.length == 2) {
    number = arabicNum[0];
    if (number > 0 && number <= 3) {
      tillThreeTens(number, romanNum);
    }
    if (number == 4) {
      romanNum.push("X", "L");
    }
    if (number == 5) {
      romanNum.push("L");
    }

    if (number > 5 && number <= 8) {
      romanNum.push("L");
      tillThreeTens(number, romanNum);
    }

    if (number == 9) {
      romanNum.push("X", "C");
    }

    arabicNum = arabicNum.slice(1);
  }

  if (arabicNum.length == 1) {
    number = arabicNum[0];

    if (number > 0 && number <= 3) {
      tillThree(number, romanNum);
    }
    if (number == 4) {
      romanNum.push("I", "V");
    }
    if (number == 5) {
      romanNum.push("V");
    }

    if (number > 5 && number <= 8) {
      romanNum.push("V");
      tillThree(number, romanNum);
    }

    if (number == 9) {
      romanNum.push("I", "X");
    }
  }

  let result = romanNum.join("");
  return result;
}

convertToRoman(3999);
