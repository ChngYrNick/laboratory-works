"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var jacobiMethod = function jacobiMethod(A, C) {
  var eps = 0.001;
  var x = [],
      i = 0,
      sumOfX,
      sumOfNX,
      nx;

  for (var _i = 0; _i < A.length; _i++) {
    var temp = -A[_i][_i];
    A[_i][_i] = -C[_i];
    C[_i] = temp;

    for (var j = 0; j < A[_i].length; j++) {
      A[_i][j] = A[_i][j] / C[_i];
      if (_i === j) x.push(A[_i][j]);
    }
  }

  A = A.map(function (arr) {
    return arr.map(function (val) {
      return Math.round(val * 1000) / 1000;
    });
  });
  x = x.map(function (val) {
    return Math.round(val * 1000) / 1000;
  });
  nx = x.slice();
  var B = A.reduce(function (acc, val, i) {
    var temp = val.reduce(function (acc2, val2, j) {
      return j === i ? acc2 : acc2 + Math.abs(val2);
    }, 0);
    return temp > acc ? temp : acc;
  }, 0);

  do {
    i++;
    x = nx.slice();

    var _loop = function _loop(_i2) {
      nx[_i2] = A[_i2].reduce(function (acc, val, index) {
        return index === _i2 ? val + acc : acc + val * x[index];
      }, 0);
    };

    for (var _i2 = 0; _i2 < A.length; _i2++) {
      _loop(_i2);
    }

    nx = nx.map(function (val) {
      return Math.round(val * 1000) / 1000;
    });
    sumOfX = Math.round(x.reduce(function (acc, val) {
      return acc + val;
    }, 0) * 1000) / 1000;
    sumOfNX = Math.round(nx.reduce(function (acc, val) {
      return acc + val;
    }, 0) * 1000) / 1000;
  } while (B < 1 ? Math.abs(sumOfX - sumOfNX) > eps || i < 2 : Math.abs(sumOfX - sumOfNX) > eps || i < 2 && Math.abs(sumOfX - sumOfNX) > (1 - B) / B * eps);

  return x;
};

var _default = jacobiMethod;
exports.default = _default;