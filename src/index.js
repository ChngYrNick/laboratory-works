import program from "commander";
import gaussMethod from "./functions/gaussMethod";

program
  .version("0.0.1")
  .description("Application for solving nonlinear equations")
  .option("-g, --gauss-method", "Divide method")
  // eslint-disable-next-line
  .parse(process.argv);

const a = [[2, -1, 1, 3], [1, 1, -1, -4], [3, -1, 1, 1], [1, -3, 0, 3]];

const C = [-1, 6, 4, -5];

if (program.gaussMethod) {
  console.table(gaussMethod(a, C, a.length));
}
