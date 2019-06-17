"use strict";

var W = require("./W.js");

var F = require("./F.js");

var eps = 0.001;

module.exports = function newtonMethod(x) {
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
  wx1 = new Array(3);

  for (var _i = 0; _i < wx1.length; _i++) {
    wx1[_i] = new Array(wx1.length);
  }

  for (var _i2 = 0; _i2 < wx1.length; _i2++) {
    for (var j = 0; j < wx1.length; j++) {
      wx1[_i2][j] = _i2 === j ? 1 : 0;
    }
  }

  var r;

  for (var _i3 = 0; _i3 < F.length; _i3++) {
    // перевіряємо щоб ffx[i][i] не дорівнювало нулю
    if (wx[_i3][_i3] === 0) {
      // якщо ноль, то шукаємо рядок не з нулем у стовпці
      for (var p = _i3 + 1; p < F.length; p++) {
        if (wx[p][_i3] != 0) {
          // якщо знайшли, то міняємо рядки p та i місцями
          for (var q = 0; q < F.length; q++) {
            var t = wx[_i3][q];
            wx[_i3][q] = wx[p][q];
            wx[p][q] = t;
          } // поміняли рядки? продовжуємо алгоритм, перервавши цикл


          break;
        }
      }
    } // якщо заміни нульового елемента не було


    if (wx[_i3][_i3] == 0) return 0;

    for (var k = 0; k < F.length; k++) {
      // сам з себе рядок не можна віднімати
      if (_i3 == k) continue; // обчислюємо коефіцієнт віднімання

      r = wx[k][_i3] / wx[_i3][_i3]; // віднімаємо по черзі кожен елемент рядка

      for (var _j = 0; _j < F.length; _j++) {
        wx[k][_j] -= r * wx[_i3][_j];
        wx1[k][_j] -= r * wx1[_i3][_j];
      }
    }
  }

  for (var _i4 = 0; _i4 < F.length; _i4++) {
    // обчислюємо коефіцієнт "нормалізації" (мається на увазі, що i-ий елемент i-го рядка не дорівнює нулю)
    r = wx[_i4][_i4]; // "нормалізуємо" рядок матриці

    for (var _j2 = 0; _j2 < F.length; _j2++) {
      wx[_i4][_j2] /= r;
      wx1[_i4][_j2] /= r;
    }
  }

  do {
    fx = F.map(function (val) {
      return val(x);
    });

    for (var _i5 = 0; _i5 < F.length; _i5++) {
      var dx = 0;

      for (var _k = 0; _k < F.length; _k++) {
        dx += wx1[_i5][_k] * fx[_k];
      }

      x[_i5] = x[_i5] - dx;
    }

    n = F.reduce(function (acc, val) {
      return acc + val(x);
    }, 0);
    obj = {
      n: n
    };

    for (var _i6 = 0; _i6 < x.length; _i6++) {
      obj["x" + _i6] = x[_i6];
    }

    result.push(obj);
  } while (n > eps);

  return result;
};