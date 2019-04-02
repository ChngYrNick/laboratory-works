"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var gaussMethod = function gaussMethod(a, C, n) {
  var x,
      max,
      index,
      k = 0;
  var eps = 0.00001;
  x = new Array(n);

  while (k < n) {
    // Поиск строки с максимальным a[i][k]
    max = Math.abs(a[k][k]);
    index = k;

    for (var i = k + 1; i < n; i++) {
      if (Math.abs(a[i][k]) > max) {
        max = Math.abs(a[i][k]);
        index = i;
      }
    } // Перестановка строк


    if (max < eps) return undefined;

    for (var j = 0; j < n; j++) {
      var _temp = a[k][j];
      a[k][j] = a[index][j];
      a[index][j] = _temp;
    }

    var temp = C[k];
    C[k] = C[index];
    C[index] = temp; // Нормализация уравнений

    for (var _i = k; _i < n; _i++) {
      var _temp2 = a[_i][k];
      if (Math.abs(_temp2) < eps) continue; // для нулевого коэффициента пропустить

      for (var _j = 0; _j < n; _j++) {
        a[_i][_j] = a[_i][_j] / _temp2;
      }

      C[_i] = C[_i] / _temp2;
      if (_i == k) continue; // уравнение не вычитать само из себя

      for (var _j2 = 0; _j2 < n; _j2++) {
        a[_i][_j2] = a[_i][_j2] - a[k][_j2];
      }

      C[_i] = C[_i] - C[k];
    }

    k++;
  } // обратная подстановка


  for (k = n - 1; k >= 0; k--) {
    x[k] = C[k];

    for (var _i2 = 0; _i2 < k; _i2++) {
      C[_i2] = C[_i2] - a[_i2][k] * x[k];
    }
  }

  return x;
};

var _default = gaussMethod;
exports.default = _default;