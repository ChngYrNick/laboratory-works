"use strict";

module.exports = function (x) {
  return x * Math.log(x) / Math.sqrt(1 + Math.pow(x, 2));
};