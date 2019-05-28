"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lagrangeMethod;

function lagrangeMethod(x, y, t) {
  var lagrangePool = 0;

  for (var i = 0; i < x.length; i++) {
    var basicsPolinom = 1;

    for (var j = 0; j < x.length; j++) {
      if (j !== i) {
        basicsPolinom *= (t - x[j]) / (x[i] - x[j]);
      }
    }

    lagrangePool += basicsPolinom * y[i];
  }

  return lagrangePool;
}