const gaussMethod = (a, C, n) => {
  let x,
    max,
    index,
    k = 0;
  const eps = 0.00001;
  x = new Array(n);

  while (k < n) {
    // Поиск строки с максимальным a[i][k]
    max = Math.abs(a[k][k]);
    index = k;
    for (let i = k + 1; i < n; i++) {
      if (Math.abs(a[i][k]) > max) {
        max = Math.abs(a[i][k]);
        index = i;
      }
    }

    // Перестановка строк
    if (max < eps) return undefined;

    for (let j = 0; j < n; j++) {
      let temp = a[k][j];
      a[k][j] = a[index][j];
      a[index][j] = temp;
    }
    let temp = C[k];
    C[k] = C[index];
    C[index] = temp;
    // Нормализация уравнений
    for (let i = k; i < n; i++) {
      let temp = a[i][k];
      if (Math.abs(temp) < eps) continue; // для нулевого коэффициента пропустить
      for (let j = 0; j < n; j++) a[i][j] = a[i][j] / temp;
      C[i] = C[i] / temp;
      if (i == k) continue; // уравнение не вычитать само из себя
      for (let j = 0; j < n; j++) a[i][j] = a[i][j] - a[k][j];
      C[i] = C[i] - C[k];
    }
    k++;
  }
  // обратная подстановка

  for (k = n - 1; k >= 0; k--) {
    x[k] = C[k];
    for (let i = 0; i < k; i++) C[i] = C[i] - a[i][k] * x[k];
  }
  return x;
};

export default gaussMethod;
