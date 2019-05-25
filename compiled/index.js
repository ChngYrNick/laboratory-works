"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _backwardInterpolation = _interopRequireDefault(require("./functions/backwardInterpolation"));

var _forwardInterpolation = _interopRequireDefault(require("./functions/forwardInterpolation"));

var _lagrangeMethod = _interopRequireDefault(require("./functions/lagrangeMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version("0.0.1").description("Application for solving interpolation tasks").option("-f, --forward-interpolation", "Interpolation 'Forward'").option("-b, --backward-interpolation", "Interpolation 'Backward'").option("-l, --lagrange-method", "Lagrange method").parse(process.argv);

var t = 3.5;
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var y = [-1, 2, 17, 50, 107, 194, 317, 482, 695, 962, 1289];

if (_commander.default.forwardInterpolation) {
  console.log("Interpolation 'Forward': ".concat((0, _forwardInterpolation.default)(x, y, t)));
}

if (_commander.default.backwardInterpolation) {
  console.log("Interpolation 'Backward': ".concat((0, _backwardInterpolation.default)(x, y, t)));
}

if (_commander.default.lagrangeMethod) {
  console.log("Lagrange method: ".concat((0, _lagrangeMethod.default)(x, y, t)));
}