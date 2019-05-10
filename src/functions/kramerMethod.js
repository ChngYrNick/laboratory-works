import math from "mathjs";

const kramerMethod = (A, C) => {
  const matrix = A.slice();
  const delta = math.det([...matrix]);
  const deltaArr = [];

  for (let i = 0; i < A.length; i++) {
    let arr = matrix.slice();
    for (let j = 0; j < C.length; j++) {
      arr[j][i] = C[j];
    }
    deltaArr.push(math.det([...arr]));
  }

  return deltaArr.map(val => val / delta);
};

export default kramerMethod;
