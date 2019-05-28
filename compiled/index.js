"use strict";

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version("0.0.1").description("Colloquium").option("-t, --test", "Test").parse(process.argv);

if (_commander.default.test) {
  console.log("Hello, World!");
}