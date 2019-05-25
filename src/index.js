import program from "commander";
import backwardInterpolation from "./functions/backwardInterpolation";
import forwardInterpolation from "./functions/forwardInterpolation";
import lagrangeMethod from "./functions/lagrangeMethod";

program
  .version("0.0.1")
  .description("Application for solving interpolation tasks")
  .option("-f, --forward-interpolation", "Interpolation 'Forward'")
  .option("-b, --backward-interpolation", "Interpolation 'Backward'")
  .option("-l, --lagrange-method", "Lagrange method")
  .parse(process.argv);

const t = 3.5;

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const y = [-1, 2, 17, 50, 107, 194, 317, 482, 695, 962, 1289];

if (program.forwardInterpolation) {
  console.log(`Interpolation 'Forward': ${forwardInterpolation(x, y, t)}`);
}

if (program.backwardInterpolation) {
  console.log(`Interpolation 'Backward': ${backwardInterpolation(x, y, t)}`);
}

if (program.lagrangeMethod) {
  console.log(`Lagrange method: ${lagrangeMethod(x, y, t)}`);
}
