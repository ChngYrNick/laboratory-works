const W = require("./W.js");
const F = require("./F.js");
const gaussSOLE = require("./gaussSOLE.js");

module.exports = function newtonMethod(x, eps) {
  let fx,
    wx,
    wx1,
    obj = {},
    n = 0;

  const result = [];

  obj = { n };
  for (let i = 0; i < x.length; i++) {
    obj["x" + i] = x[i];
  }
  result.push(obj);

  wx = W.map(arr => arr.map(val => val(x)));
  wx1 = gaussSOLE(wx);

  do {
    fx = F.map(val => val(x));

    for (let i = 0; i < F.length; i++) {
      let dx = 0;

      for (let k = 0; k < F.length; k++) {
        dx += wx1[i][k] * fx[k];
      }

      x[i] = x[i] - dx;
    }

    n = F.reduce((acc, val) => acc + val(x), 0);

    obj = { n };
    for (let i = 0; i < x.length; i++) {
      obj["x" + i] = x[i];
    }
    result.push(obj);
  } while (n > eps);

  return result;
};
