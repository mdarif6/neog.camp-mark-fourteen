let purchase = document.querySelector(".purchase");
let stock = document.querySelector(".stock");
let currentPrice = document.querySelector(".currentprice");
let buttonCheck = document.querySelector(".profitloss");
let output = document.querySelector(".output");

buttonCheck.addEventListener("submit", (e) => {
  e.preventDefault();

  let purchasePrice = purchase.value;
  let stockNumber = stock.value;
  let updatedPrice = currentPrice.value;

  let purchasePriceForPercenatage = purchasePrice * stockNumber;

  console.log(purchasePrice, stockNumber, updatedPrice);
  let profit = (updatedPrice - purchasePrice) * stockNumber;
  let profitPercentage = (profit / purchasePriceForPercenatage) * 100;

  let loss = (purchasePrice - updatedPrice) * stockNumber;
  let lossPercentage = (loss / purchasePriceForPercenatage) * 100;

  if (updatedPrice > purchasePrice) {
    output.textContent = `Hurray!! You got the ${profit} Rs. profit and proft percentage is  ${profitPercentage.toFixed(
      2
    )} %`;
  } else if (updatedPrice < purchasePrice) {
    output.textContent = `oops you loss ${loss} Rs. and loss percentage is ${lossPercentage.toFixed(
      2
    )}`;
  }
});
