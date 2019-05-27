import program from "commander";

program
  .version("0.0.1")
  .description("Colloquium")
  .option("-t, --test", "Test")
  .parse(process.argv);
