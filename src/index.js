const program = require("commander");

program
  .version("0.0.1")
  .description("Application for solving interpolation tasks")
  .option("-f, --forward-interpolation", "Interpolation 'Forward'")
  .option("-b, --backward-interpolation", "Interpolation 'Backward'")
  .option("-l, --lagrange-method", "Lagrange method")
  .parse(process.argv);
