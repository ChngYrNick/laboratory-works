const W = require("./W.js");
const F = require("./F.js");

const eps = 0.001;

module.exports = function newtonMethod(x) {
  let fx,
    wx,
    wx1,
    n = 0;

  const result = [];

  result.push({ n, x: [...x] });

  do {
    fx = F.map(val => val(x));
    wx = W.map(arr => arr.map(val => val(x)));

    wx1 = new Array(3);
    for (let i = 0; i < wx1.length; i++) {
      wx1[i] = new Array(wx1.length);
    }

    for (let i = 0; i < wx1.length; i++) {
      for (let j = 0; j < wx1.length; j++) {
        wx1[i][j] = i === j ? 1 : 0;
      }
    }

    let r;

    for (let i = 0; i < F.length; i++) {
      // проверяем чтобы ffx[i][i] не был равен нулю
      if (wx[i][i] === 0) {
        // если тут ноль, то ищем строку с ненулем в этом столбце
        for (let p = i + 1; p < F.length; p++) {
          if (wx[p][i] != 0) {
            // если нашли нужную строку, то меняем строки i и p местами
            for (let q = 0; q < F.length; q++) {
              let t = wx[i][q];
              wx[i][q] = wx[p][q];
              wx[p][q] = t;
            }
            // поменяли строки? продолжаем алгоритм, прервав цикл
            break;
          }
        }
      }
      // если замены нулевого элемента не было
      if (wx[i][i] == 0) return 0;

      for (let k = 0; k < F.length; k++) {
        // саму из себя строку нельзя вычитать
        if (i == k) continue;

        // вычисляем коэффициент вычитания
        r = wx[k][i] / wx[i][i];

        // вычитаем по очереди каждый элемент строки
        for (let j = 0; j < F.length; j++) {
          wx[k][j] -= r * wx[i][j];
          wx1[k][j] -= r * wx1[i][j];
        }
      }
    }

    for (let i = 0; i < F.length; i++) {
      // вычисляем коэффициент "нормализации" (предполагается, что i-ый элемент i-ой строки НЕ! равен нулю)
      r = wx[i][i];
      // "нормализуем" строку матрицы
      for (let j = 0; j < F.length; j++) {
        wx[i][j] /= r;
        wx1[i][j] /= r;
      }
    }

    for (let i = 0; i < F.length; i++) {
      let dx = 0;

      for (let k = 0; k < F.length; k++) {
        dx += wx1[i][k] * fx[k];
      }

      x[i] = x[i] - dx;
    }

    n = Math.sqrt(F.reduce((acc, val) => acc + val(x), 0));

    result.push({ n, x: [...x] });
  } while (n > eps);

  return result;
};
