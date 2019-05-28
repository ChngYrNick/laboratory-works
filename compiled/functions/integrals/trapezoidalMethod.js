"use strict";

var f = require("./f.js");

module.exports = function (a, b, n) {
  var h,
      sum = 0,
      x;
  h = (b - a) / n;
  sum += f(a);

  for (var i = 1; i < n; i++) {
    x = a + i * h;
    sum += 2 * f(x);
  }

  sum += f(b);
  return h * sum / 2;
};