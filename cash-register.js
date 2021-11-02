function amountOfUnit(arr) {
  let unitArr = [];
  let name = "";
  let unitAmount = 0;
  let unitObj = {};
  for (let i = 0; i < arr.length; i++) {
    name = arr[i][0];
    const amount = arr[i][1];

    switch (name) {
      case "PENNY":
        unitAmount = amount / 0.01;
        break;
      case "NICKEL":
        unitAmount = Math.round(amount / 0.05);
        break;
      case "DIME":
        unitAmount = amount / 0.1;
        break;
      case "QUARTER":
        unitAmount = amount / 0.25;
        break;
      case "ONE":
        unitAmount = amount / 1;
        break;
      case "FIVE":
        unitAmount = amount / 5;
        break;
      case "TEN":
        unitAmount = amount / 10;
        break;
      case "TWENTY":
        unitAmount = amount / 20;
        break;
      case "ONE HUNDRED":
        name = "HUNDRED";
        unitAmount = amount / 100;
        break;
    }
    unitArr.push([name, unitAmount]);
    // unitArr.push({ [name]: unitAmount });
  }

  unitObj = unitArr.reduce((obj, curr) => {
    const key = curr[0];
    const value = curr[1];
    obj = { ...obj, [key]: value };
    return obj;
  }, {});

  return unitObj;
}

//   unitObj = unitArr.reduce((obj, curr) => ({ ...obj, ...curr }), {});
//   console.log(unitObj);
//   return unitObj;
// }

function countFunds(arr) {
  let funds = 0;
  for (let i = 0; i < arr.length; i++) {
    const unitSum = arr[i][1];
    funds += unitSum;
  }
  return funds.toFixed(2);
}

function checkCashRegister(price, cash, cid) {
  let allChange = cash - price;
  let changeArr = [];
  const unitAmounts = amountOfUnit(cid);

  const allFunds = countFunds(cid);

  let resultObj = {
    status: "",
    change: [],
  };

  function countChange(
    changeAmt,
    unitAmt,
    unitChangeAmt,
    unitName,
    arrChange,
    resultArr
  ) {
    while (allChange >= changeAmt && unitAmt > 0) {
      allChange = (allChange - changeAmt).toFixed(2);

      unitChangeAmt = unitChangeAmt + changeAmt;
      arrChange.push([unitName, unitChangeAmt]);
      unitAmt = unitAmt - 1;
    }
    if (arrChange[arrChange.length - 1]) {
      resultArr.push(arrChange[arrChange.length - 1]);
    }
  }

  if (allChange > allFunds) {
    resultObj.status = "INSUFFICIENT_FUNDS";
    resultObj.change = [];
  }

  if (allChange < allFunds) {
    let changeAmountTwenty = 0;
    countChange(
      20,
      unitAmounts.TWENTY,
      changeAmountTwenty,
      "TWENTY",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    let changeAmountTen = 0;

    countChange(
      10,
      unitAmounts.TEN,
      changeAmountTen,
      "TEN",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    let changeAmountFive = 0;
    countChange(
      5,
      unitAmounts.FIVE,
      changeAmountFive,
      "FIVE",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    let changeAmountOne = 0;

    countChange(
      1,
      unitAmounts.ONE,
      changeAmountOne,
      "ONE",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    let changeAmountQ = 0;

    countChange(
      0.25,
      unitAmounts.QUARTER,
      changeAmountQ,
      "QUARTER",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    let changeAmountDime = 0;

    countChange(
      0.1,
      unitAmounts.DIME,
      changeAmountDime,
      "DIME",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    let changeAmountNickel = 0;

    countChange(
      0.05,
      unitAmounts.NICKEL,
      changeAmountNickel,
      "NICKEL",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    let changeAmountPenny = 0;

    countChange(
      0.01,
      unitAmounts.PENNY,
      changeAmountPenny,
      "PENNY",
      changeArr,
      resultObj.change
    );

    changeArr = [];
    if (allChange == 0) {
      resultObj.status = "OPEN";
    } else {
      resultObj.status = "INSUFFICIENT_FUNDS";
      resultObj.change = [];
    }
  }

  if (allChange == allFunds) {
    resultObj.status = "CLOSED";
    resultObj.change = cid;
  }

  return resultObj;
}

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);

// checkCashRegister(3.26, 100, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
