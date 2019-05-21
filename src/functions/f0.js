module.exports = function(x1, x2, x3) {
  return x1 * x2 * x3 + Math.pow(x2, 16) * x1 + Math.pow(x1, 15) - 14;
};
