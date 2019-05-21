module.exports = function determinant(A) {
  // Используется алгоритм Барейса, сложность O(n^3)
  var N = A.length,
    B = [],
    denom = 1,
    exchanges = 0;
  for (var i = 0; i < N; ++i) {
    B[i] = [];
    for (var j = 0; j < N; ++j) B[i][j] = A[i][j];
  }
  for (var i = 0; i < N - 1; ++i) {
    var maxN = i,
      maxValue = Math.abs(B[i][i]);
    for (var j = i + 1; j < N; ++j) {
      var value = Math.abs(B[j][i]);
      if (value > maxValue) {
        maxN = j;
        maxValue = value;
      }
    }
    if (maxN > i) {
      var temp = B[i];
      B[i] = B[maxN];
      B[maxN] = temp;
      ++exchanges;
    } else {
      if (maxValue == 0) return maxValue;
    }
    var value1 = B[i][i];
    for (var j = i + 1; j < N; ++j) {
      var value2 = B[j][i];
      B[j][i] = 0;
      for (var k = i + 1; k < N; ++k)
        B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom;
    }
    denom = value1;
  }

  return B;
  // if (exchanges % 2) return -B[N - 1][N - 1];
  // else return B[N - 1][N - 1];
};
