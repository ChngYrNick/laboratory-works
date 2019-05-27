const derY = require("./derY.js");
const derFx = require("./derFx.js");
const derFy = require("./derFy.js");

const eps = 0.001;

module.exports = function(x, b, h, y) {
  let i = x,
    ytemp = y,
    hd = h / 2,
    result = {};

  result[x] = y;

  while (Math.abs(i - b) > eps) {
    i += h;
    ytemp +=
      h *
      (derY(i, ytemp) + (derFx(x, y) + derFy(i, ytemp) * derY(i, ytemp)) * hd);
    result[i] = ytemp;
  }

  return result;
};
