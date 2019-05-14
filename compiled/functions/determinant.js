"use strict";

function det(A) {
  // Используется алгоритм Барейса, сложность O(n^3)
  var N = A.length,
      B = [],
      denom = 1,
      exchanges = 0;

  for (var i = 0; i < N; ++i) {
    B[i] = [];

    for (var j = 0; j < N; ++j) {
      B[i][j] = A[i][j];
    }
  }

  for (var _i = 0; _i < N - 1; ++_i) {
    var maxN = _i,
        maxValue = Math.abs(B[_i][_i]);

    for (var _j = _i + 1; _j < N; ++_j) {
      var value = Math.abs(B[_j][_i]);

      if (value > maxValue) {
        maxN = _j;
        maxValue = value;
      }
    }

    if (maxN > _i) {
      var temp = B[_i];
      B[_i] = B[maxN];
      B[maxN] = temp;
      ++exchanges;
    } else {
      if (maxValue == 0) return maxValue;
    }

    var value1 = B[_i][_i];

    for (var _j2 = _i + 1; _j2 < N; ++_j2) {
      var value2 = B[_j2][_i];
      B[_j2][_i] = 0;

      for (var k = _i + 1; k < N; ++k) {
        B[_j2][k] = (B[_j2][k] * value1 - B[_i][k] * value2) / denom;
      }
    }

    denom = value1;
  }

  if (exchanges % 2) return -B[N - 1][N - 1];else return B[N - 1][N - 1];
}