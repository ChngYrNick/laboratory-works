"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _f = _interopRequireDefault(require("./f"));

var _derivativeF = _interopRequireDefault(require("./derivativeF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newtonMethod = function newtonMethod(x, eps) {
  var next = x;

  do {
    x = next;
    next = x - (0, _f.default)(x) / (0, _derivativeF.default)(x);
  } while (Math.abs(next - x) > eps);

  return next;
};

var _default = newtonMethod;
exports.default = _default;