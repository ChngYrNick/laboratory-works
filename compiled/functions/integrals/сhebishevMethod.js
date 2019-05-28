"use strict";

var f = require("./f.js");

var N = 100;
var table = {
  "1": {
    x: [0]
  },
  "2": {
    x: [-0.5773503, 0.5773503]
  },
  "3": {
    x: [-0.7745967, 0, 0.7745967]
  },
  "4": {
    x: [-0.8611363, -0.339981, 0.339981, 0.8611363]
  },
  "5": {
    x: [-0.9061798, -0.5384693, 0, 0.5384693, 0.9061798]
  },
  "6": {
    x: [-0.93247, -0.6612094, -0.2386142, 0.2386142, 0.6612094, 0.93247]
  }
};

module.exports = function (a, b, n) {
  var sum = 0,
      Xi;

  for (var i in table) {
    if (i == n) {
      Xi = table[i].x;
    }
  }

  if (!Xi) return 0;

  for (var _i = 0; _i < N; _i++) {
    var a2 = a + _i * (b - a) / N;
    var b2 = a + (_i + 1) * (b - a) / N;
    var ra = (b2 - a2) / 2;
    var su = (a2 + b2) / 2;
    var S = 0,
        Q = void 0;

    for (var j = 0; j < n; j++) {
      Q = su + ra * Xi[j];
      S += f(Q);
    }

    sum += ra * S;
  }

  return sum; // 13.723492910917269
};