//step-1:add eventlistener to the diposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step-2:get diposit amount from the deposit input field
  const dipositField = document.getElementById("deposit-field");
  const newDipositAmountString = dipositField.value;
  const newDipositAmount = parseFloat(newDipositAmountString);

  // step-3:get the current deposit total
  //for non iput element (element other than input,textarea) use innertext to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  previousDepositTotal = parseFloat(previousDepositTotalString);

  //step-4:add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDipositAmount;
  //set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  //step-5:get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   step-6:calculate current total value
  const currentbalanceTotal=previousBalanceTotal+newDipositAmount;
  //set the balance total
  balanceTotalElement.innerText=currentbalanceTotal;

  //clear the depositfield
  dipositField.value = "";
});
