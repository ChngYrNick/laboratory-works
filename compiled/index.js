"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _divideMethod = _interopRequireDefault(require("./functions/divideMethod"));

var _newtonMethod = _interopRequireDefault(require("./functions/newtonMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version("0.0.1").description("Application for solving nonlinear equations").option("-d, --divide-method", "Divide method").option("-n, --newton-method", "Newthon method") // eslint-disable-next-line
.parse(process.argv);

if (_commander.default.divideMethod) {
  console.log("---- Half division ----");
  console.log("Standart = ".concat(_divideMethod.default.normal(-2, -1, 0.000001)));
  console.log("Recursive = ".concat(_divideMethod.default.recursive(-2, -1, 0.000001)));
  console.log("Recursive with memoization = ".concat(_divideMethod.default.memoizedRecursive(-2, -1, 0.000001)));
}

if (_commander.default.newtonMethod) {
  console.log("-------- Newton --------");
  console.log((0, _newtonMethod.default)(-2, 0.000001));
}