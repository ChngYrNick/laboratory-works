"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splineInterpolation;

function splineInterpolation(x, y, t) {
  var n = x.length; // Инициализация массива сплайнов

  var splines = [];

  for (var i = 0; i < n; i++) {
    splines[i] = {};
    splines[i].x = x[i];
    splines[i].a = y[i];
  }

  splines[0].c = 0; // Решение СЛАУ относительно коэффициентов сплайнов c[i] методом прогонки для трехдиагональных матриц
  // Вычисление прогоночных коэффициентов - прямой ход метода прогонки

  var alpha = [],
      beta = [];
  var A, B, C, F, h_i, h_i1, z;
  alpha[0] = beta[0] = 0;

  for (var _i = 1; _i < n - 1; _i++) {
    h_i = x[_i] - x[_i - 1];
    h_i1 = x[_i + 1] - x[_i];
    A = h_i;
    C = 2 * (h_i + h_i1);
    B = h_i1;
    F = 6 * ((y[_i + 1] - y[_i]) / h_i1 - (y[_i] - y[_i - 1]) / h_i);
    z = A * alpha[_i - 1] + C;
    alpha[_i] = -B / z;
    beta[_i] = (F - A * beta[_i - 1]) / z;
  }

  splines[n - 1].c = (F - A * beta[n - 2]) / (C + A * alpha[n - 2]); // Нахождение решения - обратный ход метода прогонки

  for (var _i2 = n - 2; _i2 > 0; _i2--) {
    splines[_i2].c = alpha[_i2] * splines[_i2 + 1].c + beta[_i2];
  } // По известным коэффициентам c[i] находим значения b[i] и d[i]


  for (var _i3 = n - 1; _i3 > 0; _i3--) {
    var _h_i = x[_i3] - x[_i3 - 1];

    splines[_i3].d = (splines[_i3].c - splines[_i3 - 1].c) / _h_i;
    splines[_i3].b = _h_i * (2 * splines[_i3].c + splines[_i3 - 1].c) / 6 + (y[_i3] - y[_i3 - 1]) / _h_i;
  }

  console.log(splines);
  var s;
  if (t <= splines[0].x) // Если x меньше точки сетки x[0] - пользуемся первым эл-тов массива
    s = splines[1];else if (t >= splines[n - 1].x) // Если x больше точки сетки x[n - 1] - пользуемся последним эл-том массива
    s = splines[n - 1]; // Иначе x лежит между граничными точками сетки - производим бинарный поиск нужного эл-та массива
  else {
      var _i4 = 0,
          j = n - 1;

      while (_i4 + 1 < j) {
        var k = _i4 + (j - _i4) / 2;
        if (x <= splines[k].x) j = k;else _i4 = k;
      }

      s = splines[j];
    }
  var dx = t - s.x;
  return s.a + (s.b + (s.c / 2 + s.d * dx / 6) * dx) * dx; // Вычисляем значение сплайна в заданной точке по схеме Горнера (в принципе, "умный" компилятор применил бы схему Горнера сам, но ведь не все так умны, как кажутся);
}