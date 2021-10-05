function addTogether(...args) {
  let result = undefined;

  if (args.length > 1 && args.every((arg) => typeof arg === "number")) {
    result = args.reduce((sum, curr) => (sum += curr), 0);
  } else if (args.length == 1 && typeof args[0] == "number") {
    const firstArg = args[0];
    return function addTheArg(secondArg) {
      if (typeof secondArg === "number") {
        return (result = firstArg + secondArg);
      }
    };
  }
  return result;
}

addTogether(2, 3);
addTogether(23, 30);
addTogether(5)(7);
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
addTogether(2, "3");
addTogether(2)([3]);
