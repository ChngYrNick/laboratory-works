import program from "commander";
import splineInterpolation from "./functions/splineInterpolation";

program
  .version("0.0.1")
  .description("Application for solving interpolation tasks")
  .option("-s, --spline-interpolation", "Spline interpolation")
  .parse(process.argv);

const t = 1.5;

const x = [5, 7, 9, 8];

const y = [9, 15, 8, 14];

if (program.splineInterpolation) {
  console.table("Result: " + splineInterpolation(x, y, t));
}
