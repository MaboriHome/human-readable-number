module.exports = function toReadable(number) {

  const unit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred'];

  let numStr = number.toString().split('').reverse();

  if (number === 0) {
    return 'zero';
  }

  if (number < 20) {
    return unit[number];
  }

  if (number % 10 === 0 && number < 101) {
    return decade[number / 10]
  }


  if (number > 20) {

    let res = '';
    let i = 0;

    if (numStr.length === 3 && number % 100 < 20) {

      res = unit[Math.floor(number / 100)] + ' hundred ' + res;
      res = res + unit[number % 100];

      return res.trim();
    }

    while (i < numStr.length) {

      if (i === 0) {
        res = unit[numStr[i]] + res;
      }
      if (i === 1) {
        res = decade[numStr[i]] + ' ' + res;
      }
      if (i === 2) {
        res = unit[numStr[i]] + ' hundred ' + res;
      }
      i++;
    }
    return res.trim();
  }
}
