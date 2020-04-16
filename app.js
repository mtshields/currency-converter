const currencyEle_base = document.getElementById('currency-base');
const amountEle_base = document.getElementById('amount-base');
const currencyEle_target = document.getElementById('currency-target');
const amountEle_target = document.getElementById('amount-target');
const rateEle = document.getElementById('rate');
const swapEle = document.getElementById('swap');

const convert = () => {
  const currency_base = currencyEle_base.value;
  const currency_target = currencyEle_target.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_base}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_target];

      rateEle.innerText = `1 ${currency_base} = ${rate} ${currency_target}`;

      amountEle_target.value = (amountEle_base.value * rate).toFixed(2);
    });
};

currencyEle_base.addEventListener('change', convert);
amountEle_base.addEventListener('input', convert);
currencyEle_target.addEventListener('change', convert);
amountEle_target.addEventListener('input', convert);

convert();
