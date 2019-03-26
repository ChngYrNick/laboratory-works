import program from "commander";
import divideMethod from "./functions/divideMethod";

program
  .version("0.0.1")
  .description("Application for solving nonlinear equations")
  .option("-d, --divide-method", "Divide method")
  // eslint-disable-next-line
  .parse(process.argv);

if (program.divideMethod) divideMethod(...program.args);

console.log("---- results ----");

console.log(divideMethod.normal(-2, -1, 0.01));
console.log(divideMethod.recursive(-2, -1, 0.01));
console.log(divideMethod.memoizedRecursive(-2, -1, 0.01));
