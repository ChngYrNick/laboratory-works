/*eslint-disable*/

export function Determinant(A) {
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
  if (exchanges % 2) return -B[N - 1][N - 1];
  else return B[N - 1][N - 1];
}

function AdjugateMatrix(A) {
  // A - двумерный квадратный массив
  var N = A.length,
    adjA = [];
  for (var i = 0; i < N; i++) {
    adjA[i] = [];
    for (var j = 0; j < N; j++) {
      var B = [],
        sign = (i + j) % 2 == 0 ? 1 : -1;
      for (var m = 0; m < j; m++) {
        B[m] = [];
        for (var n = 0; n < i; n++) B[m][n] = A[m][n];
        for (var n = i + 1; n < N; n++) B[m][n - 1] = A[m][n];
      }
      for (var m = j + 1; m < N; m++) {
        B[m - 1] = [];
        for (var n = 0; n < i; n++) B[m - 1][n] = A[m][n];
        for (var n = i + 1; n < N; n++) B[m - 1][n - 1] = A[m][n];
      }
      adjA[i][j] = sign * Determinant(B); // Функцию Determinant см. выше
    }
  }
  return adjA;
}

export function InverseMatrix(A) {
  // A - двумерный квадратный массив
  var det = Determinant(A); // Функцию Determinant см. выше
  if (det == 0) return false;
  var N = A.length,
    A = AdjugateMatrix(A); // Функцию AdjugateMatrix см. выше
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) A[i][j] /= det;
  }
  return A;
}
