"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _gaussMethod = _interopRequireDefault(require("./functions/gaussMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version("0.0.1").description("Application for solving nonlinear equations").option("-g, --gauss-method", "Divide method") // eslint-disable-next-line
.parse(process.argv);

var a = [[2, -1, 1, 3], [1, 1, -1, -4], [3, -1, 1, 1], [1, -3, 0, 3]];
var y = [-1, 6, 4, -5];

if (_commander.default.gaussMethod) {
  console.table((0, _gaussMethod.default)(a, y, a.length));
}