const G = require("./G.js");

module.exports = function simpleIterationMethod(x1, eps) {
  const result = [],
    x = [];
  let k = 0,
    n = true;

  do {
    let obj = {};
    for (let i = 0; i < x1.length; i++) {
      obj["x" + i] = x1[i];
    }
    result.push(obj);

    for (let i = 0; i < x1.length; i++) {
      x[i] = x1[i];
    }

    x1 = G.map(val => val(x));

    for (let i = 0; i < x1.length; i++) {
      if (Math.abs(x1[i] - x[i]) < eps) {
        n = false;
        break;
      }
    }

    k++;
  } while (n && k < 100);

  let obj = {};
  for (let i = 0; i < x1.length; i++) {
    obj["x" + i] = x1[i];
  }
  result.push(obj);

  return result;
};
