"use strict";

var W = require("./W.js");

var F = require("./F.js");

var gaussSOLE = require("./gaussSOLE.js");

module.exports = function newtonMethod(x, eps) {
  var fx,
      wx,
      wx1,
      obj = {},
      n = 0;
  var result = [];
  obj = {
    n: n
  };

  for (var i = 0; i < x.length; i++) {
    obj["x" + i] = x[i];
  }

  result.push(obj);
  wx = W.map(function (arr) {
    return arr.map(function (val) {
      return val(x);
    });
  });
  wx1 = gaussSOLE(wx);

  do {
    fx = F.map(function (val) {
      return val(x);
    });

    for (var _i = 0; _i < F.length; _i++) {
      var dx = 0;

      for (var k = 0; k < F.length; k++) {
        dx += wx1[_i][k] * fx[k];
      }

      x[_i] = x[_i] - dx;
    }

    n = F.reduce(function (acc, val) {
      return acc + val(x);
    }, 0);
    obj = {
      n: n
    };

    for (var _i2 = 0; _i2 < x.length; _i2++) {
      obj["x" + _i2] = x[_i2];
    }

    result.push(obj);
  } while (n > eps);

  return result;
};