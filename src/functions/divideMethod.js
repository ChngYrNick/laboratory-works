import f from "./f";

const recursive = (b, a, acc, mean) => {
  if (Math.abs(b - a) <= acc) return mean;
  mean = (b + a) / 2;
  return f(a) * f(mean) > 0
    ? recursive(b, mean, acc, mean)
    : recursive(mean, a, acc, mean);
};

const memoizedDivideMethod = cache => {
  cache = cache || {};
  return (b, a, acc, mean) => {
    if (Math.abs(b - a) <= acc) return mean;
    mean = (b + a) / 2;
    const divideMethod = memoizedDivideMethod(cache);
    const write = () => {
      cache[a] = f(a);
      cache[b] = f(b);
      cache[mean] = f(mean);
      console.log(cache);
      return cache[a] * cache[mean] > 0
        ? divideMethod(b, mean, acc, mean)
        : divideMethod(mean, a, acc, mean);
    };
    console.log(`f(${mean}) = ${f(mean)}`);
    return a in cache
      ? cache[a] * f(mean) > 0
        ? divideMethod(b, mean, acc, mean)
        : divideMethod(mean, a, acc, mean)
      : b in cache
      ? cache[b] * f(mean) > 0
        ? divideMethod(mean, a, acc, mean)
        : divideMethod(b, mean, acc, mean)
      : write();
  };
};

const memoizedRecursive = memoizedDivideMethod();

const normal = (b, a, acc) => {
  let mean = a;
  do {
    mean = (a + b) / 2;
    if (f(mean) === 0) break;
    f(a) * f(mean) > 0 ? (a = mean) : (b = mean);
  } while (Math.abs(b - a) > acc);
  return mean;
};

export default { recursive, memoizedRecursive, normal };
