"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _f = _interopRequireDefault(require("./f"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eps = 0.000001;

var derivativeF = function derivativeF(x) {
  return ((0, _f.default)(x + eps) - (0, _f.default)(x)) / eps;
};

var _default = derivativeF;
exports.default = _default;