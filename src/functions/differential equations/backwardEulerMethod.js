const derY = require("./derY.js");

const eps = 0.001;

module.exports = function(x, b, h, y) {
  let result = {},
    ytemp;
  result[x] = y;
  while (Math.abs(x - b) >= eps) {
    x += h;
    ytemp = y;
    let temp = 3 * ytemp;
    while (Math.abs(ytemp - temp) >= eps) {
      temp = ytemp;
      ytemp = y + h * derY(x - h, temp);
    }
    y = ytemp;
    result[x] = y;
  }
  return result;
};
