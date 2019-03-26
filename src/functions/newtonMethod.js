import f from "./f";
import derivativeF from "./derivativeF";

const newtonMethod = (x, acc) => {
  let next = x;
  do {
    x = next;
    next = x - f(x) / derivativeF(x);
  } while (Math.abs(next - x) > acc);
  return next;
};

export default newtonMethod;
