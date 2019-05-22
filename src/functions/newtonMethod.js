const W = require("./W.js");
const F = require("./F.js");
const WX = require("./WX.js");

const eps = 0.001;

module.exports = function newtonMethod() {
  let fx,
    wx,
    wx1,
    n = 0;

  let x = [1, 1, 1];
  // let x = new Array(F.length).fill(null).map(() => 0.5 - Math.random);

  const result = [];

  do {
    fx = F.map(val => val(...x));
    wx = W.map(arr => arr.map(val => val(...x)));

    wx1 = WX(wx);

    for (let i = 0; i < F.length; i++) {
      let dx = 0;

      for (let k = 0; k < F.length; k++) {
        dx += wx1[i][k] * fx[k];
      }

      x[i] = x[i] - dx;
    }

    n = Math.sqrt(F.reduce((acc, val) => acc + val(...x), 0));

    result.push({ n, x });
  } while (n > eps);

  return result;
};
