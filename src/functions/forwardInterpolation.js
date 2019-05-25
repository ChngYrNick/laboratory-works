export default function forwardInterpolation(x, y, t) {
  let res = y[0];

  for (let i = 1; i < x.length; i++) {
    let F = 0;

    for (let j = 0; j <= i; j++) {
      let den = 1;

      for (let k = 0; k <= i; k++) {
        if (k != j) den *= x[j] - x[k];
      }
      F += y[j] / den;
    }

    for (let k = 0; k < i; k++) {
      F *= t - x[k];
    }

    res += F;
  }
  return res;
}
