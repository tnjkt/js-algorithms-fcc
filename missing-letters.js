function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let missingLetter = "";

  const strFirstLetter = str[0];
  const strLastLetter = str[str.length - 1];

  const fromAlphabet = alphabet.slice(
    alphabet.indexOf(strFirstLetter),
    alphabet.indexOf(strLastLetter) + 1
  );

  for (let i = 0; i < fromAlphabet.length; i++) {
    if (str.indexOf(fromAlphabet[i]) == -1) {
      missingLetter = fromAlphabet[i];
      return missingLetter;
    }
  }
  return undefined;
}

fearNotLetter("abce");
