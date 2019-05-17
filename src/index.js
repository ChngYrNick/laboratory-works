import program from "commander";

program
  .version("0.0.1")
  .description("Application for solving system of linear equations")
  .option("-t, --test-method", "Description")
  // eslint-disable-next-line
  .parse(process.argv);

if (program.testMethod) {
  console.table("test");
}
