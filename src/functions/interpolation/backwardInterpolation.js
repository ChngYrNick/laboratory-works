import factorial from "./factorial";

const n = 3;

export default function backwardInterpolation(x, y, t) {
  const diff = new Array(n);

  for (let i = 0; i <= n; ++i) {
    diff[i] = [];
    diff[i][0] = y[i];
  }

  for (let j = 0; j <= n; ++j) {
    for (let i = 0; i < n - j; ++i) {
      diff[i][j + 1] = diff[i + 1][j] - diff[i][j];
    }
  }

  let sum = y[n];
  let st = x[1] - x[0];
  let tmp = 1;
  for (let i = 0; i < n; i++) {
    tmp *= t - x[n - i];
    sum +=
      (diff[n - (i + 1)][i + 1] * tmp) /
      (Math.pow(st, i + 1) * factorial(i + 1));
  }

  return sum;
}
