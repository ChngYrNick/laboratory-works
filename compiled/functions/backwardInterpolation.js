"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backwardInterpolation;

var _factorial = _interopRequireDefault(require("./factorial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 3;

function backwardInterpolation(x, y, t) {
  var diff = new Array(n);

  for (var i = 0; i <= n; ++i) {
    diff[i] = [];
    diff[i][0] = y[i];
  }

  for (var j = 0; j <= n; ++j) {
    for (var _i = 0; _i < n - j; ++_i) {
      diff[_i][j + 1] = diff[_i + 1][j] - diff[_i][j];
    }
  }

  var sum = y[n];
  var st = x[1] - x[0];
  var tmp = 1;

  for (var _i2 = 0; _i2 < n; _i2++) {
    tmp *= t - x[n - _i2];
    sum += diff[n - (_i2 + 1)][_i2 + 1] * tmp / (Math.pow(st, _i2 + 1) * (0, _factorial.default)(_i2 + 1));
  }

  return sum;
}