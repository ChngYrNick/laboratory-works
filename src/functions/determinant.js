function det(A) {
  // Используется алгоритм Барейса, сложность O(n^3)
  let N = A.length,
    B = [],
    denom = 1,
    exchanges = 0;
  for (let i = 0; i < N; ++i) {
    B[i] = [];
    for (let j = 0; j < N; ++j) B[i][j] = A[i][j];
  }
  for (let i = 0; i < N - 1; ++i) {
    let maxN = i,
      maxValue = Math.abs(B[i][i]);
    for (let j = i + 1; j < N; ++j) {
      let value = Math.abs(B[j][i]);
      if (value > maxValue) {
        maxN = j;
        maxValue = value;
      }
    }
    if (maxN > i) {
      let temp = B[i];
      B[i] = B[maxN];
      B[maxN] = temp;
      ++exchanges;
    } else {
      if (maxValue == 0) return maxValue;
    }
    let value1 = B[i][i];
    for (let j = i + 1; j < N; ++j) {
      let value2 = B[j][i];
      B[j][i] = 0;
      for (let k = i + 1; k < N; ++k)
        B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom;
    }
    denom = value1;
  }
  if (exchanges % 2) return -B[N - 1][N - 1];
  else return B[N - 1][N - 1];
}
