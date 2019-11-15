function hasNegative(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0) return true
  }

  return false;
}

function hasPositive(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0) return true
  }

  return false;
}

export default function simplexMethod(F, extr, A, B, equalSigns) {
  const N = A.length;
  const Sb = [];

  for (let i = 0; i < N; i++) {
    if (equalSigns[i] === '>=') {
      for (let j = 0; j < A[i].length; j++) {
        A[i][j] *= -1;
      }

      B[i] *= -1;

      equalSigns[i] = '<=';
    }

    F.push(0);
    Sb.push(0);
  }

  const table = [];

  for (let i = 0; i < N; i++) {
    table[i] = [];

    for (let j = 0; j < F.length; j++) {
      if (j < A[0].length) {
        table[i][j] = A[i][j];
      } else if (j === i + N - 1) {
        table[i][j] = 1;
      } else {
        table[i][j] = 0;
      }
    }

    table[i].unshift(B[i]);
  }
  F.unshift(0);

  const M = [];

  for (let i = 0; i < F.length; i++) {
    let sum = 0;

    for (let j = 0; j < N; j++) {
      sum += table[j][i] * Sb[j];
    }

    M[i] = sum - F[i];
  }

  while(extr === 'max' ? hasNegative(M) : hasPositive(M)){
    const
  }
}
