const program = require("commander");
const simpsonMethod = require("./functions/simpsonMethod.js");
const gaussMethod = require("./functions/gaussMethod.js");

program
  .version("0.0.1")
  .description("Application for solving integrals")
  .option("-s, --simpson-method", "Simpson method")
  .option("-g, --gauss-method", "Gauss method")
  .parse(process.argv);

if (program.simpsonMethod) {
  console.log(`Simpson method = ${simpsonMethod(1, 10, 0.001)}`);
}

if (program.gaussMethod) {
  console.log(`Gauss method = ${gaussMethod(1, 10, 6)}`);
}
