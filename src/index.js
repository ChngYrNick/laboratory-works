import program from "commander";

program
  .version("0.0.1")
  .description("Application for solving interpolation tasks")
  .option("-s, --spline-interpolation", "Spline interpolation")
  .parse(process.argv);

const t = 3.5;

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const y = [-1, 2, 17, 50, 107, 194, 317, 482, 695, 962, 1289];
