const binInput = document.querySelector('#bin-input');
const convertBtn = document.querySelector('button');
const decimalDisplay = document.querySelector('.decimal-display__value');

convertBtn.addEventListener('click', (e) => {
  let binValue = binInput.value;
  console.log(binInput.value);
  binToDec(binValue);
});

function binToDec(bin) {
  let decimal = 0;
  try {
    for (let i = bin.length - 1; i >= 0; i--) {
      console.log(i, bin[i]);
      if (bin[i] === '1') {
        decimal += Math.pow(2, bin.length - i - 1);
        console.log(decimal);
      } else if (bin[i] !== '1' && bin[i] !== '0') {
        throw new Error('Please insert a valid binary value, ex: 01001101');
      }
    }

    decimalDisplay.textContent = decimal;
  } catch (error) {
    alert(error);
    binInput.value = null;
    return;
  }
}
