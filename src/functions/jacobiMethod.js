const jacobiMethod = (A, C) => {
  const eps = 0.001;
  let x = [],
    i = 0,
    sumOfX,
    sumOfNX,
    nx;

  for (let i = 0; i < A.length; i++) {
    let temp = -A[i][i];
    A[i][i] = -C[i];
    C[i] = temp;

    for (let j = 0; j < A[i].length; j++) {
      A[i][j] = A[i][j] / C[i];
      if (i === j) x.push(A[i][j]);
    }
  }

  A = A.map(function(arr) {
    return arr.map(function(val) {
      return Math.round(val * 1000) / 1000;
    });
  });

  x = x.map(function(val) {
    return Math.round(val * 1000) / 1000;
  });

  nx = x.slice();

  const B = A.reduce(function(acc, val, i) {
    const temp = val.reduce(function(acc2, val2, j) {
      return j === i ? acc2 : acc2 + Math.abs(val2);
    }, 0);

    return temp > acc ? temp : acc;
  }, 0);

  do {
    i++;
    x = nx.slice();
    for (let i = 0; i < A.length; i++) {
      nx[i] = A[i].reduce(function(acc, val, index) {
        return index === i ? val + acc : acc + val * x[index];
      }, 0);
    }

    nx = nx.map(function(val) {
      return Math.round(val * 1000) / 1000;
    });

    sumOfX =
      Math.round(
        x.reduce(function(acc, val) {
          return acc + val;
        }, 0) * 1000
      ) / 1000;

    sumOfNX =
      Math.round(
        nx.reduce(function(acc, val) {
          return acc + val;
        }, 0) * 1000
      ) / 1000;
  } while (
    B < 1
      ? Math.abs(sumOfX - sumOfNX) > eps || i < 2
      : Math.abs(sumOfX - sumOfNX) > eps ||
        (i < 2 && Math.abs(sumOfX - sumOfNX) > ((1 - B) / B) * eps)
  );

  return x;
};

export default jacobiMethod;
