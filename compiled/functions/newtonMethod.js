"use strict";

var W = require("./W.js");

var F = require("./F.js");

var WX = require("./WX.js");

var eps = 0.001;

module.exports = function newtonMethod() {
  var fx,
      wx,
      wx1,
      n = 0;
  var x = [1, 1, 1]; // let x = new Array(F.length).fill(null).map(() => 0.5 - Math.random);

  var result = [];

  do {
    fx = F.map(function (val) {
      return val.apply(void 0, x);
    });
    wx = W.map(function (arr) {
      return arr.map(function (val) {
        return val.apply(void 0, x);
      });
    });
    wx1 = WX(wx);

    for (var i = 0; i < F.length; i++) {
      var dx = 0;

      for (var k = 0; k < F.length; k++) {
        dx += wx1[i][k] * fx[k];
      }

      x[i] = x[i] - dx;
    }

    n = Math.sqrt(F.reduce(function (acc, val) {
      return acc + val.apply(void 0, x);
    }, 0));
    result.push({
      n: n,
      x: x
    });
  } while (n > eps);

  return result;
};