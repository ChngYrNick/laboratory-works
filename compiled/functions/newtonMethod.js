"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var W = require("./W.js");

var F = require("./F.js");

var WX = require("./WX.js");

var eps = 0.001;

module.exports = function newtonMethod() {
  var fx,
      wx,
      wx1,
      n = 0;
  var x = [0.3, 0.7, 0.4]; // let x = new Array(F.length).fill(null).map(() => 0.5 - Math.random);

  var result = [];

  do {
    fx = F.map(function (val) {
      return Math.round(val.apply(void 0, _toConsumableArray(x)) * 1000) / 1000;
    });
    wx = W.map(function (arr) {
      return arr.map(function (val) {
        return val.apply(void 0, _toConsumableArray(x));
      });
    });
    wx1 = WX(wx).map(function (arr) {
      return arr.map(function (val) {
        return Math.round(val * 1000) / 1000;
      });
    });

    for (var i = 0; i < F.length; i++) {
      var dx = 0;

      for (var k = 0; k < F.length; k++) {
        dx += wx1[i][k] * fx[k];
      }

      x[i] = x[i] - dx;
    }

    x = x.map(function (val) {
      return Math.round(val * 1000) / 1000;
    });
    n = Math.sqrt(F.reduce(function (acc, val) {
      return acc + val.apply(void 0, _toConsumableArray(x));
    }, 0));
    result.push({
      n: n,
      x: x
    });
  } while (n > eps);

  return result;
};