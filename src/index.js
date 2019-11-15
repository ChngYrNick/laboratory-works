import program from 'commander';

import simplexMethod from './functions/simplexMethod';

program
  .version('0.0.1')
  .description('Colloquium')
  .option('-t, --test', 'Test')
  .parse(process.argv);

const F = [-2, 1];

const extr = 'min';

const A = [
  [2, 1],
  [1, 1],
  [-3, 2]
];

const B = [8, 6, 3];

const equalSigns = ['<=', '<=', '>='];

if (program.test) {
  simplexMethod(F, extr, A, B, equalSigns);
}
