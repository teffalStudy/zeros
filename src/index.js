module.exports = function zeros(expression) {
  // your solution

  let result2 = 0;
  let result5 = 0;
  let factor_array = expression.split('*');

  factor_array.forEach(function(el) {
    if (el.slice(-2) != '!!') {
      factorial(parseInt(el.split(-1)), 1);
    } else {
      factorial(parseInt(el.split(-2)), 2);
    }
  })

  return Math.min(result2, result5);

  function factorial(number, step) {
    for(let i = number; i > 0; i -= step) {
      let check = i;
      while (check % 2 == 0) {
        check /= 2;
        result2++;
      }
      check = i;
      while (check % 5 == 0) {
        check /= 5;
        result5++;
      }
    }
  }
}
