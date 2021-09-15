function convertHTML(str) {
  const split = str.split("");
  let newStr = "";

  for (let i = 0; i < split.length; i++) {
    const strChar = split[i];
    if (strChar == "&") {
      split[i] = "&amp;";
    } else if (strChar == "<") {
      split[i] = "&lt;";
    } else if (strChar == ">") {
      split[i] = "&gt;";
    } else if (strChar == "'") {
      split[i] = "&apos;";
    } else if (strChar == '"') {
      split[i] = "&quot;";
    }
  }

  newStr = split.join("");

  console.log(newStr);
  return newStr;
}

convertHTML("Dolce & Gabbana");
