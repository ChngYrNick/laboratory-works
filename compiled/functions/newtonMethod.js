"use strict";

var W = require("./W.js");

var F = require("./F.js");

var eps = 0.001;

module.exports = function newtonMethod() {
  var fx,
      wx,
      wx1,
      n = 0;
  var x = [0.5, 0.5, 0.5];
  var result = [];
  result.push({
    n: n,
    x: [].concat(x)
  });

  do {
    fx = F.map(function (val) {
      return val(x);
    });
    wx = W.map(function (arr) {
      return arr.map(function (val) {
        return val(x);
      });
    });
    wx1 = new Array(3);

    for (var i = 0; i < wx1.length; i++) {
      wx1[i] = new Array(wx1.length);
    }

    for (var _i = 0; _i < wx1.length; _i++) {
      for (var j = 0; j < wx1.length; j++) {
        wx1[_i][j] = _i === j ? 1 : 0;
      }
    }

    var r = void 0;

    for (var _i2 = 0; _i2 < F.length; _i2++) {
      // проверяем чтобы ffx[i][i] не был равен нулю
      if (wx[_i2][_i2] === 0) {
        // если тут ноль, то ищем строку с ненулем в этом столбце
        for (var p = _i2 + 1; p < F.length; p++) {
          if (wx[p][_i2] != 0) {
            // если нашли нужную строку, то меняем строки i и p местами
            for (var q = 0; q < F.length; q++) {
              var t = wx[_i2][q];
              wx[_i2][q] = wx[p][q];
              wx[p][q] = t;
            } // поменяли строки? продолжаем алгоритм, прервав цикл


            break;
          }
        }
      } // если замены нулевого элемента не было


      if (wx[_i2][_i2] == 0) return 0;

      for (var k = 0; k < F.length; k++) {
        // саму из себя строку нельзя вычитать
        if (_i2 == k) continue; // вычисляем коэффициент вычитания

        r = wx[k][_i2] / wx[_i2][_i2]; // вычитаем по очереди каждый элемент строки

        for (var _j = 0; _j < F.length; _j++) {
          wx[k][_j] -= r * wx[_i2][_j];
          wx1[k][_j] -= r * wx1[_i2][_j];
        }
      }
    }

    for (var _i3 = 0; _i3 < F.length; _i3++) {
      // вычисляем коэффициент "нормализации" (предполагается, что i-ый элемент i-ой строки НЕ! равен нулю)
      r = wx[_i3][_i3]; // "нормализуем" строку матрицы

      for (var _j2 = 0; _j2 < F.length; _j2++) {
        wx[_i3][_j2] /= r;
        wx1[_i3][_j2] /= r;
      }
    }

    for (var _i4 = 0; _i4 < F.length; _i4++) {
      var dx = 0;

      for (var _k = 0; _k < F.length; _k++) {
        dx += wx1[_i4][_k] * fx[_k];
      }

      x[_i4] = x[_i4] - dx;
    }

    n = F.reduce(function (acc, val) {
      return acc + val(x);
    }, 0);
    result.push({
      n: n,
      x: [].concat(x)
    });
  } while (n > eps);

  return result;
};