"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mathjs = _interopRequireDefault(require("mathjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kramerMethod = function kramerMethod(A, C) {
  var delta = _mathjs.default.det(A.slice());

  var deltaArr = [];

  for (var i = 0; i < A.length; i++) {
    var arr = A.slice();

    for (var j = 0; j < C.length; j++) {
      arr[j][i] = C[j];
    }

    deltaArr.push(_mathjs.default.det(arr.slice()));
  }

  return deltaArr.map(function (val) {
    return Math.round(val / delta * 1000) / 1000;
  });
};

var _default = kramerMethod;
exports.default = _default;