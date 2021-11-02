function palindrome(str) {
  const regex = /[^0-9a-z]/gi;

  const newStr = str.replace(regex, "").toLowerCase().split("");
  const strBackwards = [];

  for (let i = newStr.length - 1; i >= 0; i--) {
    strBackwards.push(newStr[i]);
  }

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== strBackwards[i]) {
      return false;
    }
  }
  return true;
}

palindrome("almostomla");
