function steamrollArray(arr) {
  let newArr = [];

  arr.forEach((element) => {
    const numRegex = /\d/;
    let stringElem = "";

    if (Object.getPrototypeOf(element) === Object.prototype) {
      newArr.push(element);
    } else {
      stringElem = element.toString();
      if (stringElem.length == 1) {
        if (stringElem.match(numRegex)) {
          const newElemToNum = Number(stringElem);
          newArr.push(newElemToNum);
        } else {
          newArr.push(stringElem);
        }
      } else if (stringElem.length > 1) {
        const splitStrElem = stringElem.split(",");
        splitStrElem.forEach((elem) => {
          stringElem = elem.toString();

          if (stringElem.match(numRegex)) {
            const newElemToNum = Number(stringElem);
            newArr.push(newElemToNum);
          } else {
            newArr.push(stringElem);
          }
        });
      }
    }
  });

  return newArr;
}
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
