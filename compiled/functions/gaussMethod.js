"use strict";

var f = require("./f.js");

var N = 100;
var n = 3;

module.exports = function (a, b) {
  var Xi = [-0.7745967, 0, 0.7745967];
  var Ci = [0.5555556, 0.8888889, 0.5555556];
  var sum = 0;

  for (var i = 0; i < N; i++) {
    var a2 = a + i * (b - a) / N;
    var b2 = a + (i + 1) * (b - a) / N;
    var ra = (b2 - a2) / 2;
    var su = (a2 + b2) / 2;
    var S = 0,
        Q = void 0;

    for (var j = 0; j < n; j++) {
      Q = su + ra * Xi[j];
      S += Ci[j] * f(Q);
    }

    sum += ra * S;
  }

  return sum; // 13.723492910917269
};