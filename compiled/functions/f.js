"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// const f = x => x * Math.tan(x);
// const f = x => 1 * x + 1 * Math.tan(1) * x;
var f = function f(x) {
  return Math.pow(x, 3) + 2 * Math.pow(x, 2) + 3 * x + 5;
};

var _default = f;
exports.default = _default;