// step-1:add event handler with the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2:get the withdraw amount from the withdraw input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  //convert it to number
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   step-7:clear the input field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please enter a valid input(Number)");
    return;
  }

  // step-3:get previous withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step-5:get the previous balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert(
      "Insufficient amount! Please enter correct amount that can be withdrawn."
    );
    return;
  }

  // step-4:calculate total withdraw amount
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // step-4.5:set that calculated value to withdraw amount
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step-6 & 6.5:calculate new balance and set the new balance
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
