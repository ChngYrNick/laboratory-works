"use strict";

var G = require("./G.js");

module.exports = function simpleIterationMethod(x1, eps) {
  var result = [],
      x = [];
  var k = 0,
      n = true;

  do {
    var _obj = {};

    for (var i = 0; i < x1.length; i++) {
      _obj["x" + i] = x1[i];
    }

    result.push(_obj);

    for (var _i = 0; _i < x1.length; _i++) {
      x[_i] = x1[_i];
    }

    x1 = G.map(function (val) {
      return val(x);
    });

    for (var _i2 = 0; _i2 < x1.length; _i2++) {
      if (Math.abs(x1[_i2] - x[_i2]) < eps) {
        n = false;
        break;
      }
    }

    k++;
  } while (n && k < 100);

  var obj = {};

  for (var _i3 = 0; _i3 < x1.length; _i3++) {
    obj["x" + _i3] = x1[_i3];
  }

  result.push(obj);
  return result;
};