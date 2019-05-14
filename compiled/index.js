"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _gaussMethod = _interopRequireDefault(require("./functions/gaussMethod"));

var _jacobiMethod = _interopRequireDefault(require("./functions/jacobiMethod"));

var _kramerMethod = _interopRequireDefault(require("./functions/kramerMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version("0.0.1").description("Application for solving system of linear equations").option("-g, --gauss-method", "Divide method").option("-j, --jacobi-method", "Jacobi method").option("-k, --kramer-method", "Kramer method") // eslint-disable-next-line
.parse(process.argv);

var A = [[2, -1, 1, 3], [1, 1, -1, -4], [3, -1, 1, 1], [1, -3, 0, 3]];
var C = [-1, 6, 4, -5];

if (_commander.default.gaussMethod) {
  console.table((0, _gaussMethod.default)(A, C, A.length));
}

if (_commander.default.jacobiMethod) {
  console.table((0, _jacobiMethod.default)(A, C));
}

if (_commander.default.kramerMethod) {
  console.table((0, _kramerMethod.default)(A, C));
}