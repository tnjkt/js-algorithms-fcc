function onlyDigits(str) {
  const regex = /\D/g;
  const newStr = str.replace(regex, "");
  return newStr;
}

function telephoneCheck(str) {
  let result = false;

  const regex1 =
    /(^1?\s?[(][0-9]{3}[)]\s?[0-9]{3}-[0-9]{4})|(^1?\s?[0-9]{3}-?\s?[0-9]{3}-?\s?[0-9]{4})/;

  const regex2 = /[a-z;*&!#]/gi;

  const strOnlyDigits = onlyDigits(str);

  if (regex1.test(str) == true && regex2.test(str) == false) {
    if (strOnlyDigits.length == 11 && strOnlyDigits[0] == 1) {
      result = true;
    } else if (strOnlyDigits.length == 10) {
      result = true;
    }
  }
  return result;
}

telephoneCheck("27576227382");

onlyDigits("27576227382");
onlyDigits("1 (555) 555-5555");
