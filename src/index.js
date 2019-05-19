const program = require("commander");
const backwardEulerMethod = require("./functions/backwardEulerMethod.js");
const correctedEulerMethod = require("./functions/correctedEulerMethod.js");

program
  .version("0.0.1")
  .description("Application for solving ordinary differential equations")
  .option("-b, --backward-euler-method", "Backward Euler method")
  .option("-c, --corrected-euler-method", "Corrected Euler method")
  .parse(process.argv);

if (program.backwardEulerMethod) {
  console.log(backwardEulerMethod(0, 1, 0.1, 1));
}

if (program.correctedEulerMethod) {
  console.log(correctedEulerMethod(0, 1, 0.1, 1));
}
