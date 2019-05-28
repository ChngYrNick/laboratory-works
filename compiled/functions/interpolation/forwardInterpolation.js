"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forwardInterpolation;

function forwardInterpolation(x, y, t) {
  var res = y[0];

  for (var i = 1; i < x.length; i++) {
    var F = 0;

    for (var j = 0; j <= i; j++) {
      var den = 1;

      for (var k = 0; k <= i; k++) {
        if (k != j) den *= x[j] - x[k];
      }

      F += y[j] / den;
    }

    for (var _k = 0; _k < i; _k++) {
      F *= t - x[_k];
    }

    res += F;
  }

  return res;
}