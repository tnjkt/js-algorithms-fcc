function calcOrbPeriod(radius, alt, gm) {
  return Math.round(2 * Math.PI * Math.sqrt(Math.pow(radius + alt, 3) / gm));
}

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let altitude = 0;
  let orbPeriod = 0;

  const newArr = [];

  arr.forEach((obj) => {
    altitude = obj.avgAlt;
    orbPeriod = calcOrbPeriod(earthRadius, altitude, GM);
    const changedObj = {};
    changedObj.name = obj.name;
    changedObj.orbitalPeriod = orbPeriod;

    newArr.push(changedObj);
  });

  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
