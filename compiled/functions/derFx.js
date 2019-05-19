"use strict";

// (sin(x) + xcos(x))y
module.exports = function (x, y) {
  return (Math.sin(x) + x * Math.cos(x)) * y;
};