function truthCheck(collection, pre) {
  const arrOfValues = collection.map((obj) => obj[pre]);

  const result = arrOfValues.every((elem) => elem);
  return result;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
