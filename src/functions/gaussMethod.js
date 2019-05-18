const f = require("./f.js");

const N = 100;
const n = 3;

module.exports = function(a, b) {
  const Xi = [-0.7745967, 0, 0.7745967];
  const Ci = [0.5555556, 0.8888889, 0.5555556];
  let sum = 0;

  for (let i = 0; i < N; i++) {
    let a2 = a + (i * (b - a)) / N;
    let b2 = a + ((i + 1) * (b - a)) / N;

    let ra = (b2 - a2) / 2;
    let su = (a2 + b2) / 2;
    let S = 0,
      Q;

    for (let j = 0; j < n; j++) {
      Q = su + ra * Xi[j];
      S += Ci[j] * f(Q);
    }

    sum += ra * S;
  }

  return sum; // 13.723492910917269
};
