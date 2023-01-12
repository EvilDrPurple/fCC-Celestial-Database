/**
 * @file Contains a cash register drawer function.
 * @author Kylie Scott
 */

/**
 * Cash register drawer function that calculates and returns the amount of change given, seperated by currency type.
 * 
 * @param {number} price Purchase price
 * @param {number} cash Payment given
 * @param {Array} cid Cash-in-drawer, 2D array of available currenct in the format: ["NAME", $ amount]
 * @returns {Object} retObj
 * @returns {string} retObj.status - Register status. "INSUFFICIENT_FUNDS" if cash-in-drawer is less than change due, "CLOSED" if cash-in-drawer is equal to change due, "OPEN" otherwise.
 * @returns {Array} retObj.change - 2D array of change given in the format: ["NAME", $ amount], sorted highest to lowest 
 */
function checkCashRegister(price, cash, cid) {
  /** Object containing currency types and worth */
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
  /** 2D array of the change to be given */
  let changeGiven = [];
  /** The amount of change due to the customer */
  let changeDue = cash - price;
  let tempChange = 0;

  /** Total value of the register */
  let registerVal = cid.reduce((sum, cash) => sum + cash[1], 0);
  registerVal = registerVal.toFixed(2);
  // if cash-in-drawer is equal to change due
  if (registerVal == changeDue) return { status: "CLOSED", change: cid };

  // reverse cid so that it iterates from highest to lowest
  cid.reverse();

  // iterate through the cash-in-drawer, name is the currency name and amount is the dollar amount of the currency present
  for (let [name, amount] of cid) {
    // if the amount of change due is greater than or equal to the value of a particular currency,
    // and there is some amount of it in the drawer
    if (changeDue >= money[name] && amount > 0) {
      while (changeDue >= money[name] && amount > 0) {
        // add to the change given
        tempChange += money[name];
        // subtract from the total change due
        changeDue -= money[name];
        changeDue = changeDue.toFixed(2);
        // subtract from the total amount in the register
        amount -= money[name];
      }

      changeGiven.push([name, tempChange]);
      tempChange = 0;
    }
  }

  // if the cash-in-drawer is unable to provide the right amount of change
  if (changeDue > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  return { status: "OPEN", change: changeGiven };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
