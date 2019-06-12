export default function splineInterpolation(x, y, t) {
  const n = x.length;
  // Инициализация массива сплайнов
  const splines = [];
  for (let i = 0; i < n; i++) {
    splines[i] = {};
    splines[i].x = x[i];
    splines[i].a = y[i];
  }
  splines[0].c = 0;

  // Решение СЛАУ относительно коэффициентов сплайнов c[i] методом прогонки для трехдиагональных матриц
  // Вычисление прогоночных коэффициентов - прямой ход метода прогонки
  const alpha = [],
    beta = [];
  let A, B, C, F, h_i, h_i1, z;
  alpha[0] = beta[0] = 0;

  for (let i = 1; i < n - 1; i++) {
    h_i = x[i] - x[i - 1];
    h_i1 = x[i + 1] - x[i];
    A = h_i;
    C = 2 * (h_i + h_i1);
    B = h_i1;
    F = 6 * ((y[i + 1] - y[i]) / h_i1 - (y[i] - y[i - 1]) / h_i);
    z = A * alpha[i - 1] + C;
    alpha[i] = -B / z;
    beta[i] = (F - A * beta[i - 1]) / z;
  }

  splines[n - 1].c = (F - A * beta[n - 2]) / (C + A * alpha[n - 2]);

  // Нахождение решения - обратный ход метода прогонки
  for (let i = n - 2; i > 0; i--) {
    splines[i].c = alpha[i] * splines[i + 1].c + beta[i];
  }

  // По известным коэффициентам c[i] находим значения b[i] и d[i]
  for (let i = n - 1; i > 0; i--) {
    let h_i = x[i] - x[i - 1];
    splines[i].d = (splines[i].c - splines[i - 1].c) / h_i;
    splines[i].b =
      (h_i * (2 * splines[i].c + splines[i - 1].c)) / 6 +
      (y[i] - y[i - 1]) / h_i;
  }

  let s;
  if (t <= splines[0].x)
    // Если x меньше точки сетки x[0] - пользуемся первым эл-тов массива
    s = splines[1];
  else if (t >= splines[n - 1].x)
    // Если x больше точки сетки x[n - 1] - пользуемся последним эл-том массива
    s = splines[n - 1];
  // Иначе x лежит между граничными точками сетки - производим бинарный поиск нужного эл-та массива
  else {
    let i = 0,
      j = n - 1;
    while (i + 1 < j) {
      let k = i + (j - i) / 2;
      if (x <= splines[k].x) j = k;
      else i = k;
    }
    s = splines[j];
  }

  console.table(splines);
  const dx = t - s.x;
  return s.a + (s.b + (s.c / 2 + (s.d * dx) / 6) * dx) * dx; // Вычисляем значение сплайна в заданной точке по схеме Горнера
}
