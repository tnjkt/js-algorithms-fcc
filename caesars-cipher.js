function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i];
    const placeInAlphabet = alphabet.indexOf(char);
    let newChar = "";

    if (placeInAlphabet !== -1) {
      if (placeInAlphabet <= 12) {
        newChar = alphabet[placeInAlphabet + 13];
      } else {
        const tillAlphEnd = alphabet.length - 1 - placeInAlphabet;
        const fromAlphStart = 13 - tillAlphEnd;
        newChar = alphabet[fromAlphStart - 1];
      }
      newStr[i] = newChar;
    }
  }
  newStr = newStr.join("");
  return newStr;
}
rot13("SERR PBQR PNZC");
