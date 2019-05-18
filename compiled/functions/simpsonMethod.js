"use strict";

var f = require("./f.js");

module.exports = function (a, b, eps) {
  var I = eps + 1,
      I1 = 0; // I-предыдущее вычисленное значение интеграла, I1-новое, с большим N.

  for (var N = 2; N <= 4 || Math.abs(I1 - I) > eps; N *= 2) {
    var h = void 0,
        sum = void 0;
    h = (b - a) / (2 * N); // Шаг интегрирования.

    sum = f(a);

    for (var i = 1; i < 2 * N; i += 2) {
      sum += f(a + h * i) * 4 + f(a + h * (i + 1)) * 2; // Значения с чётными индексами умножаем на 2, с не чётными на 4
    }

    sum -= f(b); // Отнимаем значение f(b) так как ранее прибавили его дважды.

    I = I1;
    I1 = h / 3 * sum;
  }

  return I1; // 13.72353038229074
};