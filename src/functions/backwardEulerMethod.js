const derY = require("./derY.js");

const eps = 0.001;

module.exports = function(x, b, h, y) {
  let result = {},
    R0 = y,
    i = x,
    ytemp;
  result[x] = y;
  while (Math.abs(i - b) >= eps) {
    i += h;
    ytemp = R0;
    let temp = 3 * ytemp;
    while (Math.abs(ytemp - temp) >= eps) {
      temp = ytemp;
      ytemp = R0 + h * derY(i - h, temp);
    }
    R0 = ytemp;
    result[i] = R0;
  }
  return result;
};
