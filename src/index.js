import program from "commander";
import gaussMethod from "./functions/gaussMethod";
import jacobiMethod from "./functions/jacobiMethod";
import kramerMethod from "./functions/kramerMethod";

program
  .version("0.0.1")
  .description("Application for solving system of linear equations")
  .option("-g, --gauss-method", "Divide method")
  .option("-j, --jacobi-method", "Jacobi method")
  .option("-k, --kramer-method", "Kramer method")
  // eslint-disable-next-line
  .parse(process.argv);

const A = [[2, -1, 1, 3], [1, 1, -1, -4], [3, -1, 1, 1], [1, -3, 0, 3]];

const C = [-1, 6, 4, -5];

if (program.gaussMethod) {
  console.table(gaussMethod(A, C, A.length));
}

if (program.jacobiMethod) {
  console.table(jacobiMethod(A, C));
}

if (program.kramerMethod) {
  console.table(kramerMethod(A, C));
}
