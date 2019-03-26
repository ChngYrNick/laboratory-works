import program from "commander";
import divideMethod from "./functions/divideMethod";
import newtonMethod from "./functions/newtonMethod";

program
  .version("0.0.1")
  .description("Application for solving nonlinear equations")
  .option("-d, --divide-method", "Divide method")
  // eslint-disable-next-line
  .parse(process.argv);

if (program.divideMethod) divideMethod(...program.args);

console.log("---- Half division ----");

console.log(divideMethod.normal(-2, -1, 0.000001));
console.log(divideMethod.recursive(-2, -1, 0.000001));
console.log(divideMethod.memoizedRecursive(-2, -1, 0.000001));

console.log("-------- Newton --------");

console.log(newtonMethod(-2, 0.000001));
