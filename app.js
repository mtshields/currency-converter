// Select DOM elements
const currencyEle_base = document.getElementById('currency-base');
const amountEle_base = document.getElementById('amount-base');
const currencyEle_target = document.getElementById('currency-target');
const amountEle_target = document.getElementById('amount-target');
const rateEle = document.getElementById('rate');
const swapEle = document.getElementById('swap');

// Get exchange rates using fetch() and update the DOM with the data
const calculate = () => {
  const currency_base = currencyEle_base.value;
  const currency_target = currencyEle_target.value;
  console.log(currency_base, currency_target);
};

// Add event listeners
currencyEle_base.addEventListener('change', calculate);
amountEle_base.addEventListener('input', calculate);
currencyEle_target.addEventListener('change', calculate);
amountEle_target.addEventListener('input', calculate);

calculate();
