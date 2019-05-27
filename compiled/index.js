"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _splineInterpolation = _interopRequireDefault(require("./functions/splineInterpolation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version("0.0.1").description("Application for solving interpolation tasks").option("-s, --spline-interpolation", "Spline interpolation").parse(process.argv);

var t = 1.5;
var x = [5, 7, 9, 8];
var y = [9, 15, 8, 14];

if (_commander.default.splineInterpolation) {
  console.log("Result: " + (0, _splineInterpolation.default)(x, y, t));
}