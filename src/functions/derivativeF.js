import f from "./f";

const eps = 0.000001;

const derivativeF = x => (f(x + eps) - f(x)) / eps;

export default derivativeF;
