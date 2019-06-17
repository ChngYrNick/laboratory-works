const program = require("commander");
const newtonMethod = require("./functions/newtonMethod.js");
const modNewtonMethod = require("./functions/modNewtonMethod.js");
const simpleIterationMethod = require("./functions/simpleIterationMethod.js");

program
  .version("0.0.1")
  .description("Application for solving system of nonlinear equations")
  .option("-n, --newton-method", "Newton method")
  .option("-m, --modified-newton-method", "Modified Newton method")
  .option("-i, --simple-iteration-method", "Simple iteration method")
  .parse(process.argv);

let x0 = [0, 0];
let x1 = [0, 0];
let x2 = [0, 0];

const eps = 0.001;

if (program.newtonMethod) {
  console.table(newtonMethod(x0, eps));
}

if (program.modifiedNewtonMethod) {
  console.table(modNewtonMethod(x1, eps));
}

if (program.simpleIterationMethod) {
  console.table(simpleIterationMethod(x2, eps));
}
