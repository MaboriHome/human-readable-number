module.exports = function toReadable (number) {
    const unit = ['', 'one ', 'two ', 'three ', 'four ',
    'five ', 'six ', 'seven ', 'eight ', 'nine ',
    'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ',
    'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  const decade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
    'seventy', 'eighty', 'ninety', 'one hundred'];

  const numStr = number.toString().split('').reverse();

  if (number === 0) {
    return 'zero';
  }

  if (number < 20) {
    return unit[number];
  }

  if (number % 10 === 0 && number !== 10 && number < 101) {
    return decade[number / 10 + 1]
  }

  if (number > 20) {

    let res = '';
    let i = 0;

    while (i < numStr.length) {

      if (i === 0) {
        res = unit[numStr[i]] + res;
      }
      if (i === 1) {
        res = decade[numStr[i]] + ' ' + res;
      }
      if (i === 2) {
        res = unit[numStr[i]] + 'hundred ' + res;
      }
      i++;
    }
    return res;
  }  
}
