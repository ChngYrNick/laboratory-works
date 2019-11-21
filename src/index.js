import program from 'commander';

import shortestHamiltonianCycle from './functions/shortestHamiltonianCycle';

program
  .version('0.0.1')
  .description('Program that searching shortest Hamiltonian cycle')
  .option('-s, --shortest-hamiltonian-cycle', 'Shortest Hamiltonian cycle')
  .option('-f, --floyd-method', 'Floyd method')
  .parse(process.argv);

// const graph = [
//   [0, 10, 15, 20],
//   [10, 0, 35, 25],
//   [15, 35, 0, 30],
//   [20, 25, 30, 0]
// ];

const graph = [
  [0, 2, 0, 0, 4, 2],
  [2, 0, 3, 0, 0, 3],
  [0, 3, 0, 2, 0, 1],
  [0, 0, 2, 0, 3, 2],
  [4, 0, 0, 3, 0, 1],
  [2, 3, 1, 2, 1, 0]
];

// const graph = [
//   [0, 20, 35, 42],
//   [20, 0, 34, 30],
//   [35, 34, 0, 12],
//   [42, 30, 12, 0]
// ];

const s = 0;

if (program.shortestHamiltonianCycle) {
  console.log(`Shortest path weight: ${shortestHamiltonianCycle(graph, s)}`);
}
