"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factorial;

function factorial(num) {
  var res = 1;

  while (num > 0) {
    res *= num;
    --num;
  }

  return res;
}