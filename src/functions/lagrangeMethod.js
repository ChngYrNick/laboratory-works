export default function lagrangeMethod(x, y, t) {
  let lagrangePool = 0;
  for (let i = 0; i < x.length; i++) {
    let basicsPolinom = 1;
    for (let j = 0; j < x.length; j++) {
      if (j !== i) {
        basicsPolinom *= (t - x[j]) / (x[i] - x[j]);
      }
    }
    lagrangePool += basicsPolinom * y[i];
  }
  return lagrangePool;
}
