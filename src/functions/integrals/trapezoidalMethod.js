const f = require("./f.js");

module.exports = function(a, b, n) {
  let h,
    sum = 0,
    x;
  h = (b - a) / n;
  sum += f(a);
  for (let i = 1; i < n; i++) {
    x = a + i * h;
    sum += 2 * f(x);
  }
  sum += f(b);
  return (h * sum) / 2;
};
