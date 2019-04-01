"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _f = _interopRequireDefault(require("./f"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var recursive = function recursive(b, a, eps) {
  if (Math.abs(b - a) <= eps) return a;
  var mean = (b + a) / 2;
  return (0, _f.default)(a) * (0, _f.default)(mean) > 0 ? recursive(b, mean, eps) : recursive(mean, a, eps);
};

var memoizedDivideMethod = function memoizedDivideMethod(cache) {
  cache = cache || {};
  return function (b, a, eps) {
    if (Math.abs(b - a) <= eps) return a;
    var mean = (b + a) / 2;
    var divideMethod = memoizedDivideMethod(cache);

    var write = function write() {
      cache[a] = (0, _f.default)(a);
      cache[b] = (0, _f.default)(b);
      cache[mean] = (0, _f.default)(mean);
      return cache[a] * cache[mean] > 0 ? divideMethod(b, mean, eps) : divideMethod(mean, a, eps);
    };

    return a in cache ? cache[a] * (0, _f.default)(mean) > 0 ? divideMethod(b, mean, eps) : divideMethod(mean, a, eps) : b in cache ? cache[b] * (0, _f.default)(mean) > 0 ? divideMethod(mean, a, eps) : divideMethod(b, mean, eps) : write();
  };
};

var memoizedRecursive = memoizedDivideMethod();

var normal = function normal(b, a, eps) {
  var mean;

  do {
    mean = (a + b) / 2;
    if ((0, _f.default)(mean) === 0) break;
    (0, _f.default)(a) * (0, _f.default)(mean) > 0 ? a = mean : b = mean;
  } while (Math.abs(b - a) > eps);

  return mean;
};

var _default = {
  recursive: recursive,
  memoizedRecursive: memoizedRecursive,
  normal: normal
};
exports.default = _default;