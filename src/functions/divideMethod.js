import f from "./f";

const recursive = (b, a, eps) => {
  if (Math.abs(b - a) <= eps) return a;
  const mean = (b + a) / 2;
  return f(a) * f(mean) > 0 ? recursive(b, mean, eps) : recursive(mean, a, eps);
};

const memoizedDivideMethod = cache => {
  cache = cache || {};
  return (b, a, eps) => {
    if (Math.abs(b - a) <= eps) return a;
    const mean = (b + a) / 2;
    const divideMethod = memoizedDivideMethod(cache);
    const write = () => {
      cache[a] = f(a);
      cache[b] = f(b);
      cache[mean] = f(mean);
      return cache[a] * cache[mean] > 0
        ? divideMethod(b, mean, eps)
        : divideMethod(mean, a, eps);
    };
    return a in cache
      ? cache[a] * f(mean) > 0
        ? divideMethod(b, mean, eps)
        : divideMethod(mean, a, eps)
      : b in cache
      ? cache[b] * f(mean) > 0
        ? divideMethod(mean, a, eps)
        : divideMethod(b, mean, eps)
      : write();
  };
};

const memoizedRecursive = memoizedDivideMethod();

const normal = (b, a, eps) => {
  let mean;
  do {
    mean = (a + b) / 2;
    if (f(mean) === 0) break;
    f(a) * f(mean) > 0 ? (a = mean) : (b = mean);
  } while (Math.abs(b - a) > eps);
  return mean;
};

export default { recursive, memoizedRecursive, normal };
