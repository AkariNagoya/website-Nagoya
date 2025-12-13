const calculatePriceAfterTax = function(price,taxRate) {
  const taxAmount = price * taxRate;
  const taxPrice = price + taxAmount;
  console.log(taxPrice);
}

calculatePriceAfterTax(100, 0.08); // 108
calculatePriceAfterTax(150, 0.1); // 165