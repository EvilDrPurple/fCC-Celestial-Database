function checkCashRegister(price, cash, cid) {
  const money = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }
  let change = [];
  let diff = cash - price;
  let tempChange = 0;
  
  let registerVal = cid.reduce((sum, cash) => sum + cash[1], 0);
  registerVal = registerVal.toFixed(2);
  if (registerVal == diff) {
    return {status: "CLOSED", change: cid};
  }

  cid.reverse();

  for (let [name, q] of cid) {
    if (diff >= money[name] && q > 0) {
      while (diff >= money[name] && q > 0) {
        tempChange += money[name];
        diff -= money[name];
        diff = diff.toFixed(2);
        q -= money[name];
      }

      change.push([name, tempChange]);
      tempChange = 0;
    }
  }

  if (diff > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: change};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
