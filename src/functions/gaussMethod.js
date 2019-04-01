const gaussMethod = (a, y, n) => {
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
    let temp = y[k];
    y[k] = y[index];
    y[index] = temp;
    // Нормализация уравнений
    for (let i = k; i < n; i++) {
      let temp = a[i][k];
      if (Math.abs(temp) < eps) continue; // для нулевого коэффициента пропустить
      for (let j = 0; j < n; j++) a[i][j] = a[i][j] / temp;
      y[i] = y[i] / temp;
      if (i == k) continue; // уравнение не вычитать само из себя
      for (let j = 0; j < n; j++) a[i][j] = a[i][j] - a[k][j];
      y[i] = y[i] - y[k];
    }
    k++;
  }
  // обратная подстановка

  for (k = n - 1; k >= 0; k--) {
    x[k] = y[k];
    for (let i = 0; i < k; i++) y[i] = y[i] - a[i][k] * x[k];
  }
  return x;
};

export default gaussMethod;
