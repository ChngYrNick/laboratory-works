"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _f = _interopRequireDefault(require("./f"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var divideMethod = function divideMethod(b, a, accuracy) {
  var mean;

  do {
    mean = (b + a) / 2;

    if ((0, _f.default)(mean) * (0, _f.default)(a) > 0) {
      a = mean;
    } else {
      b = mean;
    }
  } while (b - a <= accuracy);

  return mean;
};

var _default = divideMethod; // const divideMethod = (b, a, accuracy) => {
//   let mean;
//   do {
//     mean = (a + b) / 2;
//     if (f(mean) === 0) return mean;
//     if (f(a) * f(mean) < 0) b = mean;
//     if (f(b) * f(mean) < 0) a = mean;
//     console.log(mean);
//   } while (b - a < accuracy);
//   return mean;
// };

exports.default = _default;