function nextPermutation(vertex) {
  let i = vertex.length - 2;
  while (i >= 0 && vertex[i] >= vertex[i + 1]) {
    i -= 1;
  }

  if (i === -1) return false;

  let j = i + 1;
  while (j < vertex.length && vertex[j] > vertex[i]) {
    j += 1;
  }
  j -= 1;

  [vertex[i], vertex[j]] = [vertex[j], vertex[i]];

  let left = i + 1;
  let right = vertex.length - 1;

  while (left < right) {
    [vertex[left], vertex[right]] = [vertex[right], vertex[left]];
    left += 1;
    right -= 1;
  }

  return true;
}

export default function shortestHamiltonianCycle(graph, s) {
  // Зберігаємо всі вершини окремо від вихідної вершини
  const vertex = [];
  for (let i = 0; i < graph.length; i++) {
    if (i != s) {
      vertex.push(i);
    }
  }

  // Змінна з мінімальною вагою шляху
  let minPath = Infinity;

  do {
    // Змінна з поточною вагою шляху
    let currentPathWeight = [];

    // Обчислення поточної ваги шляху
    let k = s;
    for (let i = 0; i < vertex.length; i++) {
      currentPathWeight.push(graph[k][vertex[i]]);
      k = vertex[i];
    }

    currentPathWeight.push(graph[k][s]);

    if (currentPathWeight.includes(0)) {
      continue;
    }

    const temp = currentPathWeight.reduce((p, c) => p + c);

    // За виконанням умови змінюємо мінімум
    minPath = temp < minPath ? temp : minPath;
  } while (nextPermutation(vertex));

  return minPath;
}
