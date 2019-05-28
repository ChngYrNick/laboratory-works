const f = require("./f.js");

const N = 100;

const table = {
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

module.exports = function(a, b, n) {
  let sum = 0,
    Xi;

  for (let i in table) {
    if (i == n) {
      Xi = table[i].x;
    }
  }

  if (!Xi) return 0;

  for (let i = 0; i < N; i++) {
    let a2 = a + (i * (b - a)) / N;
    let b2 = a + ((i + 1) * (b - a)) / N;

    let ra = (b2 - a2) / 2;
    let su = (a2 + b2) / 2;
    let S = 0,
      Q;

    for (let j = 0; j < n; j++) {
      Q = su + ra * Xi[j];
      S += f(Q);
    }

    sum += ra * S;
  }

  return sum; // 13.723492910917269
};
