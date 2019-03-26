"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _divideMethod = _interopRequireDefault(require("./functions/divideMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_commander.default.version("0.0.1").description("Application for solving nonlinear equations").option("-d, --divide-method", "Divide method").parse(process.argv);

if (_commander.default.divideMethod) root = _divideMethod.default.apply(void 0, _toConsumableArray(_commander.default.args));
console.log("---- results ----");
console.log((0, _divideMethod.default)(-2, -1, 0.01));